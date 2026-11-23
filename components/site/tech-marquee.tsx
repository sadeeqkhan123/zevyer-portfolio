import { TECH_STACK } from '@/lib/site'

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4" aria-hidden={hidden || undefined}>
      {TECH_STACK.map((t) => (
        <li
          key={t.name}
          className="glass flex shrink-0 items-center gap-3 rounded-2xl py-2 pl-2 pr-4"
        >
          <img
            src={t.logo}
            alt={hidden ? '' : `${t.name} logo`}
            width={36}
            height={36}
            loading="lazy"
            className="h-9 w-9 rounded-xl object-cover ring-1 ring-black/5"
          />
          <span className="whitespace-nowrap text-sm font-semibold text-ink">{t.name}</span>
        </li>
      ))}
    </ul>
  )
}

/** Slow right-to-left loop of the technologies Zevyer builds with. Pauses on hover. */
export function TechMarquee() {
  return (
    <section aria-label="Technologies we use" className="py-4">
      <p className="container-x mb-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
        Technologies we build with
      </p>
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        }}
      >
        <div className="marquee-track flex w-max py-2 group-hover:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  )
}
