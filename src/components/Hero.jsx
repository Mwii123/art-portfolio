import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 32 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.23, 1, 0.32, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-start justify-end px-8 md:px-16 pb-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 40%, #2a1f0f 0%, transparent 60%),
            linear-gradient(160deg, #0e0d0b 30%, #1a1208 100%)
          `,
        }}
      />

      {/* Animated vertical lines */}
      {[
        { left: '25%', height: '100%', duration: 8 },
        { left: '60%', height: '80%',  duration: 11, reverse: true },
        { left: '80%', height: '90%',  duration: 6  },
      ].map(({ left, height, duration, reverse }, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-px pointer-events-none"
          style={{
            left,
            height,
            background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)',
          }}
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'easeInOut',
            direction: reverse ? 'reverse' : 'normal',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">
        <motion.p
          {...fadeUp(0.3)}
          className="text-[0.65rem] tracking-[0.25em] uppercase mb-6"
          style={{ color: 'var(--accent)' }}
        >
          Visual Artist &amp; Painter
        </motion.p>

        <motion.h1
          {...fadeUp(0.5)}
          className="font-serif font-light leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', color: 'var(--text)' }}
        >
          Where color
          <br />
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>breathes</em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.8)}
          className="mt-8 text-[0.78rem] tracking-[0.12em] leading-[1.8] max-w-sm"
          style={{ color: 'var(--muted)' }}
        >
          Original paintings, mixed media works, and visual explorations born
          from quiet observation and raw emotion.
        </motion.p>

        <motion.a
          {...fadeUp(1.0)}
          href="#featured"
          className="mt-10 inline-flex items-center gap-4 text-[0.68rem] tracking-[0.2em] uppercase no-underline transition-[gap] duration-300 hover:gap-6"
          style={{ color: 'var(--accent)' }}
        >
          View the collection
          <span className="text-[1.1em]">→</span>
        </motion.a>
      </div>

      {/* Scroll hint */}
      <motion.div
        {...fadeUp(1.3)}
        className="absolute right-8 md:right-16 bottom-12 hidden md:flex flex-col items-center gap-3"
      >
        <motion.div
          className="w-px h-16"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', transformOrigin: 'top' }}
        />
        <span
          className="text-[0.6rem] tracking-[0.2em] uppercase"
          style={{ color: 'var(--muted)', writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
