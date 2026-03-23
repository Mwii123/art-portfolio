import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Works',   href: '#featured' },
  { label: 'Gallery', href: '#gallery'  },
  { label: 'About',   href: '#about'    },
  { label: 'Contact', href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-lg border-b border-white/[0.07]'
            : 'bg-gradient-to-b from-bg/90 to-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-2xl font-light tracking-wide"
          style={{ color: 'var(--accent2)' }}
        >
          Kala-Kalam Studio
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-[0.68rem] tracking-[0.18em] uppercase text-muted hover:text-accent transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
          data-cursor-expand
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
            className="block w-[22px] h-px bg-ink"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="block w-[22px] h-px bg-ink"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
            className="block w-[22px] h-px bg-ink"
          />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center gap-10"
          >
            {links.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: i * 0.07 }}
                className="font-serif text-5xl font-light text-ink hover:text-accent transition-colors duration-200 no-underline"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
