// Janelinha estilo computador anos 2000
export default function Window({ titulo, icone = '♡', children, className = '' }) {
  return (
    <section className={`janela ${className}`}>
      <div className="janela-barra">
        <span>{icone} {titulo}</span>
        <div className="janela-botoes" aria-hidden="true">
          <span>_</span><span>□</span><span>×</span>
        </div>
      </div>
      <div className="janela-corpo">{children}</div>
    </section>
  )
}
