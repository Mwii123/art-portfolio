import { usePaintCanvas } from '../hooks/usePaintCanvas'

/**
 * ArtworkCanvas — renders either a real <img> or an abstract canvas placeholder.
 *
 * Props:
 *   artwork  – artwork object from artworks.js
 *   className – optional extra classes
 */
export default function ArtworkCanvas({ artwork, className = '' }) {
  // Always call the hook — it's a no-op when imgSrc is present
  const canvasRef = usePaintCanvas(
    artwork.paintStyle,
    artwork.aspectW,
    artwork.aspectH
  )

  if (artwork.imgSrc) {
    return (
      <img
        src={artwork.imgSrc}
        alt={artwork.title}
        className={`block w-full object-cover ${className}`}
        style={{ filter: 'grayscale(15%) brightness(0.88)', transition: 'filter 0.5s, transform 0.7s cubic-bezier(0.23,1,0.32,1)' }}
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      width={artwork.aspectW}
      height={artwork.aspectH}
      className={`block w-full ${className}`}
      style={{ transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1), filter 0.5s' }}
    />
  )
}
