import { BrandMark } from '@/components/site/brand-mark'

/** Soft light-blue ambient field with the faded Zevyer mark, as on the brand artwork. */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f6fafd]">
      {/* Radial gradients instead of blur filters: same soft glow, no GPU filter cost. */}
      <div className="absolute -left-[22rem] -top-[22rem] h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(closest-side,rgba(184,227,245,0.6),transparent)]" />
      <div className="absolute -right-[18rem] top-[8%] h-[54rem] w-[54rem] rounded-full bg-[radial-gradient(closest-side,rgba(201,220,240,0.7),transparent)]" />
      <div className="absolute bottom-[-30%] left-[10%] h-[58rem] w-[66rem] rounded-full bg-[radial-gradient(closest-side,rgba(220,241,251,0.9),transparent)]" />
      <BrandMark muted className="absolute -bottom-[14vmin] -left-[10vmin] h-[62vmin] w-[62vmin] opacity-45" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(33,96,172,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(33,96,172,0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)',
        }}
      />
    </div>
  )
}
