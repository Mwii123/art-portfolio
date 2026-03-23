import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ArtworkCanvas from './ArtworkCanvas'

/**
 * Lightbox — full-screen artwork viewer
 *
 * Props:
 *   artwork  – the selected artwork object (or null when closed)
 *   onClose  – callback to clear the selection
 */
export default function Lightbox({ artwork, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = artwork ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [artwork])

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          key="lightbox-backdrop"
          className="fixed inset-0 z-[500] flex items-center justify-center"
          style={{ background: 'rgba(10,9,7,0.96)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
        >
          {/* Close button */}
          <motion.button
            className="absolute top-8 right-8 text-[0.63rem] tracking-[0.2em] uppercase px-5 py-2 bg-transparent transition-colors duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)', cursor: 'none' }}
            whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            onClick={onClose}
            data-cursor-expand
          >
            Close ✕
          </motion.button>

          {/* Artwork */}
          <motion.div
            key={artwork.id}
            className="flex flex-col items-center gap-6 px-6"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Canvas / image */}
            <div
              className="overflow-hidden"
              style={{ maxWidth: '90vw', maxHeight: '75vh', border: '1px solid var(--border)' }}
            >
              <ArtworkCanvas
                artwork={artwork}
                className="block"
                style={{ maxWidth: '90vw', maxHeight: '75vh', objectFit: 'contain' }}
              />
            </div>

            {/* Meta */}
            <div className="text-center">
              <p
                className="text-[0.58rem] tracking-[0.22em] uppercase mb-2"
                style={{ color: 'var(--accent)' }}
              >
                {artwork.category}
              </p>
              <h3
                className="font-serif text-2xl md:text-3xl font-light"
                style={{ color: 'var(--text)' }}
              >
                {artwork.title}
              </h3>
              <p className="text-[0.65rem] mt-1" style={{ color: 'var(--muted)' }}>
                {artwork.year}
                {artwork.dimensions && ` — ${artwork.dimensions}`}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
