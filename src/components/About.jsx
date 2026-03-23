import { motion } from 'framer-motion'
import { usePaintCanvas } from '../hooks/usePaintCanvas'

const reveal = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, amount: 0.15 },
  transition: { duration: 0.85, delay, ease: [0.23, 1, 0.32, 1] },
})

const stats = [
  { num: '12+', label: 'Years of\nPractice'     },
  { num: '80+', label: 'Original\nWorks'         },
  { num: '14',  label: 'Solo\nExhibitions'       },
]

export default function About() {
  const canvasRef = usePaintCanvas('drip', 600, 700)

  return (
    <section
      id="about"
      className="px-8 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Visual */}
      <motion.div {...reveal(0)} className="relative">
        {/* Accent line */}
        <div
          className="absolute w-0.5 opacity-40 hidden md:block"
          style={{
            height: '60%', top: '-5%', left: '-1.5rem',
            background: 'var(--accent)',
          }}
        />
        <div className="overflow-hidden" style={{ border: '1px solid var(--border)' }}>
          <canvas ref={canvasRef} width={600} height={700} className="block w-full" />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div {...reveal(0.15)}>
        <h2
          className="font-serif font-light leading-[1.15] mb-8"
          style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--text)' }}
        >
          The artist
          <br />
          behind the{' '}
          <em className="italic" style={{ color: 'var(--accent)' }}>brush</em>
        </h2>

        <p className="text-[0.82rem] leading-[2] mb-6" style={{ color: 'var(--muted)' }}>
          I work primarily in oils and mixed media, exploring the space between
          observation and imagination. Each piece begins with a feeling —
          sometimes a colour, sometimes a half-remembered light — and grows
          outward from there.
        </p>
        <p className="text-[0.82rem] leading-[2]" style={{ color: 'var(--muted)' }}>
          My work has been shown in galleries across Europe and collected
          privately. I take on a limited number of commissions each year and
          love collaborative conversations about what a painting can become.
        </p>

        {/* Stats */}
        <div
          className="flex gap-12 mt-10 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {stats.map(({ num, label }) => (
            <div key={num}>
              <div className="font-serif text-4xl font-light" style={{ color: 'var(--accent)' }}>
                {num}
              </div>
              <div
                className="text-[0.58rem] tracking-[0.18em] uppercase mt-1 whitespace-pre-line"
                style={{ color: 'var(--muted)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
