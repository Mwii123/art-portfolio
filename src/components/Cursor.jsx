import { useEffect, useRef } from 'react'

/**
 * Cursor — custom dot + ring cursor (hidden on mobile via CSS)
 * Uses raw DOM manipulation for maximum performance (no re-renders).
 */
export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      const x = e.clientX, y = e.clientY
      dot.style.transform  = `translate(${x}px,${y}px) translate(-50%,-50%)`
      ring.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`
    }

    const expand = () => {
      ring.style.width       = '56px'
      ring.style.height      = '56px'
      ring.style.borderColor = 'rgba(201,169,110,0.85)'
    }
    const shrink = () => {
      ring.style.width       = '36px'
      ring.style.height      = '36px'
      ring.style.borderColor = 'rgba(201,169,110,0.5)'
    }

    document.addEventListener('mousemove', onMove)

    // Expand on any interactive element
    const targets = () => document.querySelectorAll('a, button, [data-cursor-expand]')
    const attach  = () => targets().forEach(el => { el.addEventListener('mouseenter', expand); el.addEventListener('mouseleave', shrink) })
    attach()

    // Re-attach when DOM changes (new gallery items etc.)
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 z-[9999] w-[10px] h-[10px] rounded-full pointer-events-none"
        style={{ background: 'var(--accent)', transition: 'transform 0.12s ease' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="hidden md:block fixed top-0 left-0 z-[9998] w-[36px] h-[36px] rounded-full pointer-events-none"
        style={{
          border: '1px solid rgba(201,169,110,0.5)',
          transition: 'transform 0.32s cubic-bezier(0.23,1,0.32,1), width 0.25s, height 0.25s',
        }}
      />
    </>
  )
}
