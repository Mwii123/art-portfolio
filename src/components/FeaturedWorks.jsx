import { motion } from 'framer-motion'
import { artworks } from '../data/artworks'
import ArtworkCanvas from './ArtworkCanvas'

const featured = artworks.filter(a => a.featured)

const reveal = {
  initial:   { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, amount: 0.15 },
  transition: { duration: 0.85, ease: [0.23, 1, 0.32, 1] },
}

export default function FeaturedWorks({ onSelect }) {
  return (
    <section id="featured" className="px-8 md:px-16 py-28">
      {/* Section header */}
      <motion.div {...reveal} className="flex items-baseline gap-6 mb-12">
        <span className="text-[0.65rem] tracking-[0.2em] opacity-60" style={{ color: 'var(--accent)' }}>
          01
        </span>
        <h2 className="font-serif font-light tracking-tight" style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', color: 'var(--text)' }}>
          Featured <em className="italic" style={{ color: 'var(--accent)' }}>Works</em>
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        {...reveal}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        className="grid gap-6"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
      >
        {featured.map((artwork, i) => (
          <FeatCard
            key={artwork.id}
            artwork={artwork}
            large={i === 0}
            onSelect={onSelect}
          />
        ))}
      </motion.div>
    </section>
  )
}

function FeatCard({ artwork, large, onSelect }) {
  return (
    <motion.div
      className="relative overflow-hidden border cursor-none"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--border)',
        gridRow: large ? 'span 2' : 'span 1',
      }}
      whileHover="hovered"
      onClick={() => onSelect(artwork)}
      data-cursor-expand
    >
      {/* Image / Canvas */}
      <motion.div
        variants={{ hovered: { scale: 1.04 } }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <ArtworkCanvas artwork={artwork} />
      </motion.div>

      {/* Always-visible label */}
      <div className="absolute bottom-6 left-8 right-8 pointer-events-none">
        <p className="text-[0.58rem] tracking-[0.22em] uppercase mb-1" style={{ color: 'var(--accent)' }}>
          {artwork.category}
        </p>
        <h3 className="font-serif text-2xl font-light leading-tight" style={{ color: 'var(--text)' }}>
          {artwork.title}
        </h3>
        <p className="text-[0.63rem] mt-1" style={{ color: 'var(--muted)' }}>
          {artwork.year} — {artwork.dimensions}
        </p>
      </div>
    </motion.div>
  )
}
