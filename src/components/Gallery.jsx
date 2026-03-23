import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { artworks, filters } from '../data/artworks'
import ArtworkCanvas from './ArtworkCanvas'

const galleryItems = artworks.filter(a => !a.featured)

const reveal = {
  initial:    { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, amount: 0.1 },
  transition: { duration: 0.85, ease: [0.23, 1, 0.32, 1] },
}

export default function Gallery({ onSelect }) {
  const [active, setActive] = useState('all')

  const visible = galleryItems.filter(a => active === 'all' || a.filter === active)

  return (
    <section id="gallery" className="px-8 md:px-16 py-24">
      {/* Header */}
      <motion.div {...reveal} className="flex items-baseline gap-6 mb-12">
        <span className="text-[0.65rem] tracking-[0.2em] opacity-60" style={{ color: 'var(--accent)' }}>
          02
        </span>
        <h2 className="font-serif font-light tracking-tight" style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', color: 'var(--text)' }}>
          The <em className="italic" style={{ color: 'var(--accent)' }}>Gallery</em>
        </h2>
      </motion.div>

      {/* Filter bar */}
      <motion.div
        {...reveal}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        className="flex gap-8 mb-12 pb-5 overflow-x-auto scrollbar-none"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            data-cursor-expand
            className="relative text-[0.63rem] tracking-[0.18em] uppercase bg-transparent border-none pb-1 whitespace-nowrap transition-colors duration-200"
            style={{ color: active === f ? 'var(--accent)' : 'var(--muted)', cursor: 'none' }}
          >
            {f === 'all' ? 'All Works' : f.charAt(0).toUpperCase() + f.slice(1)}

            {/* Underline indicator */}
            <motion.span
              layoutId="filter-underline"
              className="absolute left-0 right-0 h-px"
              style={{
                bottom: '-1.3rem',
                background: 'var(--accent)',
                display: active === f ? 'block' : 'none',
              }}
            />
          </button>
        ))}
      </motion.div>

      {/* Masonry grid */}
      <div className="masonry-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((artwork, i) => (
            <motion.div
              key={artwork.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.23, 1, 0.32, 1] }}
              className="relative overflow-hidden border cursor-none"
              style={{ borderColor: 'var(--border)' }}
              whileHover={{ y: -4 }}
              onClick={() => onSelect(artwork)}
              data-cursor-expand
            >
              <ArtworkCanvas artwork={artwork} />

              {/* Caption on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(10,9,7,0.9), transparent)' }}
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
              >
                <h4 className="font-serif text-base font-light" style={{ color: 'var(--text)' }}>
                  {artwork.title}
                </h4>
                <p className="text-[0.58rem] tracking-[0.15em] uppercase mt-1" style={{ color: 'var(--accent)' }}>
                  {artwork.category}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
