export default function Footer() {
  return (
    <footer
      className="px-8 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <p className="text-[0.6rem] tracking-[0.12em]" style={{ color: 'var(--muted)' }}>
        © {new Date().getFullYear()} Kala-Kalam Studio. All rights reserved.
      </p>
      <div className="flex gap-8">
        {['Instagram', 'Behance', 'LinkedIn'].map(s => (
          <a
            key={s}
            href="#"
            className="text-[0.6rem] tracking-[0.15em] uppercase no-underline transition-colors duration-200 hover:text-accent"
            style={{ color: 'var(--muted)' }}
            data-cursor-expand
          >
            {s}
          </a>
        ))}
      </div>
    </footer>
  )
}
