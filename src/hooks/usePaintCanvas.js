import { useEffect, useRef } from 'react'

// ── Colour palettes for placeholder paintings ──
const PALETTES = [
  ['#1a0a00', '#8b3a1e', '#d4856a', '#f2c49b', '#fff3e0'], // warm sienna
  ['#001220', '#0d4a6b', '#1f8aad', '#7ecac3', '#e8f4f8'], // deep teal
  ['#0d0d1a', '#2d1b5a', '#6b3fa0', '#b87fd4', '#f0e0ff'], // violet dusk
  ['#0a1a0a', '#1e4d20', '#4a8c3f', '#9cc96b', '#e8f5c8'], // forest green
  ['#1a0d08', '#5c2e0a', '#a05a2c', '#d4a45a', '#f5e4b0'], // ochre earth
  ['#100010', '#3d0840', '#8c2080', '#d45cc0', '#f8d8f0'], // magenta night
  ['#08080a', '#1a1a2e', '#4a3060', '#8060a0', '#d0b8e8'], // midnight purple
]

function hexAlpha(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${a})`
}

function paintAbstract(canvas, w, h, style) {
  if (!canvas) return
  canvas.width  = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  const pal = PALETTES[Math.floor(Math.random() * PALETTES.length)]
  const rnd = (a, b) => a + Math.random() * (b - a)

  // Background
  const bg = ctx.createLinearGradient(0, 0, w, h)
  bg.addColorStop(0, pal[0])
  bg.addColorStop(1, pal[1])
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, w, h)

  if (style === 'brush') {
    for (let i = 0; i < 60; i++) {
      ctx.save()
      ctx.globalAlpha = rnd(0.05, 0.45)
      ctx.strokeStyle = pal[Math.floor(rnd(1, 5))]
      ctx.lineWidth   = rnd(6, w * 0.14)
      ctx.lineCap     = 'round'
      ctx.beginPath()
      ctx.moveTo(rnd(-20, w + 20), rnd(-20, h + 20))
      ctx.bezierCurveTo(
        rnd(-50, w + 50), rnd(-50, h + 50),
        rnd(-50, w + 50), rnd(-50, h + 50),
        rnd(-20, w + 20), rnd(-20, h + 20)
      )
      ctx.stroke()
      ctx.restore()
    }
    for (let i = 0; i < 12; i++) {
      ctx.save()
      ctx.globalAlpha = rnd(0.03, 0.12)
      const g = ctx.createRadialGradient(rnd(0, w), rnd(0, h), 0, rnd(0, w), rnd(0, h), rnd(40, w * 0.5))
      g.addColorStop(0, pal[4])
      g.addColorStop(1, 'transparent')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)
      ctx.restore()
    }
  } else if (style === 'wash') {
    for (let i = 0; i < 8; i++) {
      const x = rnd(-w * 0.3, w * 1.1), y = rnd(-h * 0.3, h * 1.1)
      const r = rnd(h * 0.2, h * 0.8)
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, hexAlpha(pal[Math.floor(rnd(2, 5))], rnd(0.1, 0.4)))
      g.addColorStop(1, 'transparent')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)
    }
    for (let i = 0; i < 25; i++) {
      ctx.save()
      ctx.globalAlpha = rnd(0.1, 0.5)
      ctx.strokeStyle = pal[Math.floor(rnd(0, 3))]
      ctx.lineWidth   = rnd(0.5, 2)
      ctx.beginPath()
      ctx.moveTo(rnd(0, w), rnd(0, h))
      for (let j = 0; j < 5; j++) ctx.lineTo(rnd(0, w), rnd(0, h))
      ctx.stroke()
      ctx.restore()
    }
  } else if (style === 'geometry') {
    for (let i = 0; i < 30; i++) {
      ctx.save()
      ctx.globalAlpha = rnd(0.06, 0.4)
      ctx.fillStyle   = pal[Math.floor(rnd(1, 5))]
      ctx.translate(rnd(0, w), rnd(0, h))
      ctx.rotate(rnd(0, Math.PI * 2))
      const s = rnd(20, w * 0.35)
      if (Math.random() > 0.5) {
        ctx.fillRect(-s / 2, -s / 2, s, s)
      } else {
        ctx.beginPath(); ctx.arc(0, 0, s / 2, 0, Math.PI * 2); ctx.fill()
      }
      ctx.restore()
    }
  } else {
    // drip
    for (let i = 0; i < 10; i++) {
      const x = rnd(w * 0.1, w * 0.9)
      ctx.save()
      ctx.globalAlpha = rnd(0.1, 0.6)
      ctx.strokeStyle = pal[Math.floor(rnd(2, 5))]
      ctx.lineWidth   = rnd(3, 18)
      ctx.lineCap     = 'round'
      ctx.beginPath(); ctx.moveTo(x, 0)
      let cy = 0
      while (cy < h) { cy += rnd(10, 40); ctx.lineTo(x + rnd(-20, 20), cy) }
      ctx.stroke(); ctx.restore()
    }
    for (let i = 0; i < 20; i++) {
      ctx.save(); ctx.globalAlpha = rnd(0.05, 0.3)
      const g = ctx.createLinearGradient(0, 0, w, h)
      g.addColorStop(0, pal[1]); g.addColorStop(1, pal[3])
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h); ctx.restore()
    }
  }
}

/**
 * usePaintCanvas(style, w, h)
 * Returns a ref to attach to a <canvas> element.
 * Automatically paints the abstract artwork on mount.
 */
export function usePaintCanvas(style, w = 400, h = 400) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      paintAbstract(canvasRef.current, w, h, style)
    }
  }, [style, w, h])

  return canvasRef
}
