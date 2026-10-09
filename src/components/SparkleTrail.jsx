import { useEffect, useRef } from 'react'

// Rastro de brilhinhos seguindo o mouse ✨
const SIMBOLOS = ['✦', '♡', '✧', '⋆', '❀']
const CORES = ['#ff4fa3', '#ff9ccf', '#c58cff', '#ffd700', '#7fd3ff']

export default function SparkleTrail() {
  const ultimo = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    function mover(e) {
      const agora = Date.now()
      if (agora - ultimo.current < 40) return
      ultimo.current = agora
      const el = document.createElement('span')
      el.className = 'brilho'
      el.textContent = SIMBOLOS[Math.floor(Math.random() * SIMBOLOS.length)]
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
      el.style.color = CORES[Math.floor(Math.random() * CORES.length)]
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 900)
    }
    window.addEventListener('pointermove', mover)
    return () => window.removeEventListener('pointermove', mover)
  }, [])

  return null
}
