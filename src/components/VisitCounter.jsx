import { useEffect, useState } from 'react'

// Contador de visitas retrô — o total fica guardado no servidor (server/contador.js).
// Cada pessoa conta 1 vez por sessão (recarregar a página não soma de novo).
// Enquanto você desenvolve (npm run dev) ele só mostra o número, sem somar.
const CHAVE_SESSAO = 'visita-contada'

function jaContou() {
  try { return sessionStorage.getItem(CHAVE_SESSAO) === '1' } catch { return false }
}

function marcarContada() {
  try { sessionStorage.setItem(CHAVE_SESSAO, '1') } catch {}
}

export default function VisitCounter() {
  const [n, setN] = useState(null)

  useEffect(() => {
    const somar = !import.meta.env.DEV && !jaContou()
    if (somar) marcarContada()
    fetch('/api/visitas', { method: somar ? 'POST' : 'GET' })
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(d => setN(d.total))
      .catch(() => setN(0))
  }, [])

  return (
    <div className="contador">
      visitantes:
      <span className="contador-num">{n === null ? '······' : String(n).padStart(6, '0')}</span>
    </div>
  )
}
