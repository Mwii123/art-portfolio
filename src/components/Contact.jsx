import { motion } from 'framer-motion'

const reveal = {
  initial:    { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, amount: 0.2 },
  transition: { duration: 0.85, ease: [0.23, 1, 0.32, 1] },
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-8 md:px-16 py-28 text-center"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <motion.div {...reveal}>
        <h2
          className="font-serif font-light leading-none mb-8"
          style={{ fontSize: 'clamp(2.5rem,6vw,6rem)', color: 'var(--text)' }}
        >
          Let's{' '}
          <em className="italic" style={{ color: 'var(--accent)' }}>connect</em>
        </h2>

        <p
          className="text-[0.78rem] leading-[1.9] max-w-md mx-auto mb-12"
          style={{ color: 'var(--muted)' }}
        >
          Whether you're interested in acquiring a piece, commissioning new
          work, or simply want to talk about art — my inbox is always open.
        </p>

        <motion.a
          href="mailto:hello@yourstudio.com"
          className="inline-flex items-center gap-4 text-[0.68rem] tracking-[0.2em] uppercase no-underline px-10 py-4 transition-all duration-300"
          style={{
            color: 'var(--text)',
            border: '1px solid var(--border)',
          }}
          whileHover={{
            backgroundColor: 'var(--accent)',
            color: 'var(--bg)',
            borderColor: 'var(--accent)',
          }}
          data-cursor-expand
        >
          Send a message
        </motion.a>
      </motion.div>
    </section>
  )
}
