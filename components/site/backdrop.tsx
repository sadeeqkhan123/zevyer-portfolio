import { BrandMark } from '@/components/site/brand-mark'

/** Soft light-blue ambient field with the faded Zevyer mark, as on the brand artwork. */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f6fafd]">
      <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#b8e3f5] opacity-60 blur-[120px]" />
      <div className="absolute -right-32 top-[18%] h-[480px] w-[480px] rounded-full bg-[#c9dcf0] opacity-70 blur-[110px]" />
      <div className="absolute bottom-[-12%] left-[20%] h-[520px] w-[620px] rounded-full bg-[#dcf1fb] opacity-90 blur-[130px]" />
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
