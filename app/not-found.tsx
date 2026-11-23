import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] items-center justify-center pt-28">
      <div className="glass-strong max-w-lg rounded-[2rem] p-10 text-center">
        <p className="font-[family-name:var(--font-display)] text-6xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink">Page not found</h1>
        <p className="mt-2 text-ink-soft">The page you are looking for has moved or does not exist.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
