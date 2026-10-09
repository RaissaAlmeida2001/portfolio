import { useState } from 'react'
import { perfil, servicos, projetos, habilidades, experiencias, formacao, certificados, eventos } from './data.js'
import Window from './components/Window.jsx'
import Bow from './components/Bow.jsx'
import SparkleTrail from './components/SparkleTrail.jsx'
import Guestbook from './components/Guestbook.jsx'
import VisitCounter from './components/VisitCounter.jsx'

const MENU = [
  ['#sobre', 'sobre mim'],
  ['#servicos', 'o que faço'],
  ['#projetos', 'projetinhos'],
  ['#experiencia', 'experiência'],
  ['#formacao', 'formação'],
  ['#recados', 'recados'],
  ['#contato', 'contato'],
]

export default function App() {
  const [filtro, setFiltro] = useState('todos')
  const tags = ['todos', ...new Set(projetos.flatMap(p => p.tags))]
  const visiveis = filtro === 'todos' ? projetos : projetos.filter(p => p.tags.includes(filtro))

  return (
    <>
      <SparkleTrail />


      <nav className="menu">
        <Bow size={34} />
        {MENU.map(([href, texto]) => (
          <a key={href} href={href}>{texto}</a>
        ))}
      </nav>

      <main className="container">
        {/* ——— Hero ——— */}
        <header className="hero">
          <div className="hero-texto">
            <h1 className="titulo-glitter">{perfil.nome}</h1>
            <p className="hero-sub">{perfil.titulo} ♡</p>
            <p className="hero-stack">{perfil.subtitulo}</p>
            <div className="hero-botoes">
              <a href="#experiencia" className="botao-gloss">minha jornada ✿</a>
              <a href="#contato" className="botao-gloss botao-lilas">fala comigo ✉</a>
            </div>
          </div>
          <img src="/kitty-laptop.gif" alt="gatinha de óculos mexendo no notebook rosa" className="hero-gif" width="240" height="240" />
        </header>

        {/* ——— Sobre (estilo perfil de rede social antiga) ——— */}
        <div id="sobre" className="grade-sobre">
          <Window titulo="sobre_mim.txt" icone="♡">
            {perfil.bio.map((p, i) => <p key={i} className="bio">{p}</p>)}
          </Window>
          <Window titulo="status" icone="☆">
            <ul className="status">
              <li><b>local:</b> {perfil.local}</li>
              <li><b>humor:</b> {perfil.humor}</li>
              <li><b>buscando:</b> {perfil.buscando}</li>
              <li className="online"><span className="bolinha" /> {perfil.status}</li>
            </ul>
          </Window>
        </div>

        {/* ——— O que eu faço ——— */}
        <h2 id="servicos" className="titulo-secao">✿ o que eu faço ✿</h2>
        <div className="projetos">
          {servicos.map(s => (
            <article key={s.titulo} className="card" style={{ '--cor': s.cor }}>
              <Bow size={40} className="card-laco" />
              <div className="card-icone" aria-hidden="true">{s.icone}</div>
              <h3>{s.titulo}</h3>
              <p>{s.descricao}</p>
            </article>
          ))}
        </div>

        {/* ——— Skills ——— */}
        <Window titulo="minhas_skills.exe" icone="★" className="secao">
          <div className="skills">
            {habilidades.map(g => (
              <div key={g.grupo}>
                <p className="skill-grupo">{g.grupo}</p>
                <div className="stickers">
                  {g.itens.map(item => <span key={item} className="sticker">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Window>

        {/* ——— Projetinhos ——— */}
        <h2 id="projetos" className="titulo-secao">✿ projetinhos ✿</h2>
        {tags.length > 2 && (
          <div className="filtros">
            {tags.map(t => (
              <button key={t} className={`chip ${filtro === t ? 'ativo' : ''}`} onClick={() => setFiltro(t)}>
                {t}
              </button>
            ))}
          </div>
        )}
        <div className="projetos">
          {visiveis.map(p => (
            <article key={p.titulo} className="card projeto" style={{ '--cor': p.cor }}>
              <Bow size={40} className="card-laco" />
              {p.imagem && <img src={p.imagem} alt={`print do projeto ${p.titulo}`} className="projeto-img" loading="lazy" />}
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
              <div className="tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              {(p.repo || p.demo) && (
                <div className="projeto-links">
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="chip">código ✎</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="chip">ver no ar ✦</a>}
                </div>
              )}
            </article>
          ))}
          {filtro === 'todos' && (
            <article className="card card-embreve" aria-label="mais projetos em breve">
              <div className="card-icone" aria-hidden="true">🎀</div>
              <h3>em breve...</h3>
              <p>mais projetinhos fofos chegando por aqui ✿</p>
            </article>
          )}
        </div>

        {/* ——— Experiência ——— */}
        <h2 id="experiencia" className="titulo-secao">♡ experiência ♡</h2>
        <ol className="timeline">
          {experiencias.map(e => (
            <li key={e.cargo + e.periodo} className="timeline-item">
              <span className="timeline-ponto" aria-hidden="true">♥</span>
              <Window titulo={e.empresa} icone="✦">
                <div className="exp-topo">
                  <h3>{e.cargo}</h3>
                  <span className="exp-periodo">{e.periodo}</span>
                </div>
                {e.local && <p className="exp-local">{e.local}</p>}
                <p>{e.resumo}</p>
                {e.itens.length > 0 && (
                  <ul className="exp-itens">
                    {e.itens.map(it => <li key={it}>{it}</li>)}
                  </ul>
                )}
              </Window>
            </li>
          ))}
        </ol>

        {/* ——— Formação, certificados e eventos ——— */}
        <h2 id="formacao" className="titulo-secao">✎ formação ✎</h2>
        <div className="grade-formacao">
          <Window titulo="formacao.doc" icone="🎓">
            {formacao.map(f => (
              <div key={f.curso} className="formacao">
                <h3>{f.curso}</h3>
                <p>{f.instituicao} · <span className="exp-periodo">{f.periodo}</span></p>
              </div>
            ))}
            <p className="skill-grupo">certificados</p>
            <ul className="certificados">
              {certificados.map(c => (
                <li key={c.nome}>
                  {c.url ? <a href={c.url} target="_blank" rel="noreferrer">{c.nome}</a> : <b>{c.nome}</b>}
                  <small>{[c.emissor, c.data].filter(Boolean).join(' · ')}</small>
                </li>
              ))}
            </ul>
          </Window>
          <Window titulo="eventos.exe" icone="✦">
            <ul className="destaques">
              {eventos.map(ev => (
                <li key={ev.titulo}>
                  <span aria-hidden="true">{ev.icone}</span> <b>{ev.titulo}</b>
                  <small className="evento-detalhe">{ev.texto}</small>
                </li>
              ))}
            </ul>
          </Window>
        </div>

        {/* ——— Livro de visitas ——— */}
        <div id="recados">
          <h2 className="titulo-secao">✉ livro de visitas ✉</h2>
          <Guestbook />
        </div>

        {/* ——— Contato ——— */}
        <Window titulo="contato.exe" icone="✉" className="secao contato">
          <div id="contato">
            <p>Vamos trabalhar juntos ou só bater um papo sobre dados? ♡</p>
            <a href={`mailto:${perfil.email}`} className="botao-gloss">{perfil.email}</a>
            <div className="redes">
              {perfil.redes.map(r => (
                <a key={r.nome} href={r.url} target="_blank" rel="noreferrer" className="chip">{r.nome}</a>
              ))}
            </div>
          </div>
        </Window>
      </main>

      <footer className="rodape">
        <VisitCounter />
        <p>feito com ♡, React e muito glitter · © {new Date().getFullYear()} {perfil.nomeCompleto}</p>
      </footer>
    </>
  )
}
