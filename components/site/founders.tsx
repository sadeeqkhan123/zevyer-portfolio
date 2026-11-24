import { Fragment, type ReactNode } from 'react'
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react'
import { CO_FOUNDERS, type CoFounder } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/ui'

/* Syntax-coloured tokens (dark editor theme) */
const Kw = ({ children }: { children: ReactNode }) => <span className="text-[#c792ea]">{children}</span>
const Ty = ({ children }: { children: ReactNode }) => <span className="text-[#5fd4f4]">{children}</span>
const Key = ({ children }: { children: ReactNode }) => <span className="text-[#82aaff]">{children}</span>
const P = ({ children }: { children: ReactNode }) => <span className="text-[#7f8ea3]">{children}</span>

function Str({ children, href }: { children: ReactNode; href?: string }) {
  if (!href) return <span className="text-[#c3e88d]">&quot;{children}&quot;</span>
  const external = !href.startsWith('mailto:')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="text-[#c3e88d] underline decoration-[#c3e88d]/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
    >
      &quot;{children}&quot;
    </a>
  )
}

function Field({ name, children }: { name: string; children: ReactNode }) {
  return (
    <>
      {'  '}
      <Key>{name}</Key>
      <P>: </P>
      {children}
      <P>,</P>
    </>
  )
}

function Editor({ filename, lines }: { filename: string; lines: ReactNode[] }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#0f1a2b] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-xs text-[#7f8ea3]">{filename}</span>
      </div>
      <div className="overflow-x-auto [scrollbar-width:thin]">
        <pre className="min-w-max py-4 font-mono text-[12.5px] leading-6 sm:text-[13px]">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-10 shrink-0 select-none pr-4 text-right text-[#4b5a70]" aria-hidden>
                {i + 1}
              </span>
              <code className="pr-6 text-[#d6deeb]">{line}</code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}

const handle = (url: string) => url.replace(/^https?:\/\/(www\.)?linkedin\.com\//, '').replace(/\/$/, '')
const kebab = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

function FounderCard({ founder, index }: { founder: CoFounder; index: number }) {
  const lines: ReactNode[] = [
    <Fragment key="decl">
      <Kw>const</Kw> <span className="text-[#ffcb6b]">{founder.handle}</span>
      <P>: </P>
      <Ty>CoFounder</Ty> <P>= {'{'}</P>
    </Fragment>,
    <Field key="name" name="name">
      <Str>{founder.name}</Str>
    </Field>,
    <Field key="role" name="role">
      <Str>{founder.role}</Str>
    </Field>,
  ]
  if (founder.company)
    lines.push(
      <Field key="company" name="company">
        <Str>{founder.company}</Str>
      </Field>
    )
  if (founder.ventures?.length)
    lines.push(
      <Field key="ventures" name="ventures">
        <P>[</P>
        {founder.ventures.map((v, i) => (
          <Fragment key={v.url}>
            {i > 0 && <P>, </P>}
            <Str href={v.url}>{v.label}</Str>
          </Fragment>
        ))}
        <P>]</P>
      </Field>
    )
  lines.push(
    <Field key="email" name="email">
      <Str href={`mailto:${founder.email}`}>{founder.email}</Str>
    </Field>,
    <Field key="linkedin" name="linkedin">
      <Str href={founder.linkedin}>{handle(founder.linkedin)}</Str>
    </Field>,
    <P key="end">{'};'}</P>
  )

  return (
    <Reveal as="article" delay={index * 0.08} className="glass flex h-full min-w-0 flex-col rounded-[2rem] p-2.5">
      <header className="px-5 pb-5 pt-6 sm:px-7">
        <p className="font-mono text-xs font-medium text-brand-600">
          <span className="text-ink-soft/60">{'//'}</span> co-founder {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">{founder.name}</h3>
        <p className="mt-1.5 text-base text-ink-soft">
          {founder.designation}
          {founder.company && <span className="text-ink-soft/75"> @ {founder.company}</span>}
        </p>
      </header>
      <div className="min-w-0">
        <Editor filename={`founders/${kebab(founder.handle)}.ts`} lines={lines} />
      </div>
      <footer className="mt-auto flex flex-wrap gap-2 px-3 pb-3 pt-5 sm:px-4">
        <a href={`mailto:${founder.email}`} className="btn-secondary !min-h-10 !px-4">
          <Mail className="h-4 w-4" aria-hidden />
          Email
        </a>
        <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary !min-h-10 !px-4">
          <Linkedin className="h-4 w-4" aria-hidden />
          LinkedIn
        </a>
        {founder.ventures?.map((v) => (
          <a key={v.url} href={v.url} target="_blank" rel="noopener noreferrer" className="btn-secondary !min-h-10 !px-4">
            {v.label}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        ))}
      </footer>
    </Reveal>
  )
}

const interfaceLines: ReactNode[] = [
  <Fragment key="0">
    <Kw>export interface</Kw> <Ty>CoFounder</Ty> <P>{'{'}</P>
  </Fragment>,
  ...(
    [
      ['name', 'string'],
      ['role', 'string'],
      ['company?', 'string'],
      ['ventures?', 'string[]'],
      ['email', 'string'],
      ['linkedin', 'string'],
    ] as const
  ).map(([k, t]) => (
    <Fragment key={k}>
      {'  '}
      <Key>{k}</Key>
      <P>: </P>
      <Ty>{t}</Ty>
      <P>;</P>
    </Fragment>
  )),
  <P key="end">{'}'}</P>,
]

export function FoundersSection({ className = 'mt-20 lg:mt-28' }: { className?: string }) {
  return (
    <section id="founders" className={`container-x scroll-mt-28 ${className}`}>
      <div className="grid items-end gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                Meet the <span className="text-gradient">co-founders</span>
              </>
            }
            body="The people accountable for every Zevyer project. Reach either of us directly."
          />
        </div>
        <Reveal className="hidden lg:col-span-5 lg:block" delay={0.06}>
          <Editor filename="types/co-founder.ts" lines={interfaceLines} />
        </Reveal>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CO_FOUNDERS.map((f, i) => (
          <FounderCard key={f.handle} founder={f} index={i} />
        ))}
      </div>
    </section>
  )
}
