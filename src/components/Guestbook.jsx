import { useEffect, useState } from 'react'
import Window from './Window.jsx'
import { recadosIniciais } from '../data.js'
import { cpfValido, mascararCpf } from '../cpf.js'

// Livro de visitas — salva no navegador (localStorage).
// Se quiser que todo mundo veja os recados, dá pra trocar por um backend Node depois!
// O CPF só é usado pra validar quem assina: ele NUNCA é salvo nem exibido.
const CHAVE = 'livro-de-visitas-v2'

function carregar() {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE))
    return Array.isArray(salvo) ? salvo : recadosIniciais
  } catch {
    return recadosIniciais
  }
}

export default function Guestbook() {
  const [recados, setRecados] = useState(carregar)
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [texto, setTexto] = useState('')
  const [erro, setErro] = useState('')

  useEffect(() => {
    try { localStorage.setItem(CHAVE, JSON.stringify(recados)) } catch {}
  }, [recados])

  function enviar(e) {
    e.preventDefault()
    if (!nome.trim() || !texto.trim()) {
      setErro('preenche seu nome e o recadinho ♡')
      return
    }
    if (!cpfValido(cpf)) {
      setErro('ops! esse CPF não é válido, confere os números ✿')
      return
    }
    const data = new Date().toLocaleDateString('pt-BR')
    setRecados([{ nome: nome.trim(), texto: texto.trim(), data }, ...recados])
    setNome('')
    setCpf('')
    setTexto('')
    setErro('')
  }

  return (
    <Window titulo="livro_de_visitas.exe" icone="✉" className="guestbook">
      <form onSubmit={enviar} className="gb-form" noValidate>
        <input value={nome} onChange={e => setNome(e.target.value)} placeholder="seu nome ♡" maxLength={50} aria-label="seu nome" />
        <input
          value={cpf}
          onChange={e => { setCpf(mascararCpf(e.target.value)); setErro('') }}
          placeholder="seu CPF (000.000.000-00)"
          inputMode="numeric"
          autoComplete="off"
          aria-label="CPF"
          aria-invalid={erro.includes('CPF')}
        />
        <textarea value={texto} onChange={e => setTexto(e.target.value)} placeholder="deixa um recadinho..." maxLength={200} rows={3} aria-label="recado" />
        {erro && <p className="gb-erro" role="alert">{erro}</p>}
        <p className="gb-aviso">🔒 o CPF serve só pra validar sua assinatura: ele não é salvo nem aparece no recado.</p>
        <button className="botao-gloss" type="submit">assinar ✿</button>
      </form>
      {recados.length === 0 ? (
        <p className="gb-vazio">ninguém assinou ainda... seja a primeira pessoa! ✿</p>
      ) : (
        <ul className="gb-lista">
          {recados.map((r, i) => (
            <li key={i}>
              <strong>{r.nome}</strong> <small>{r.data}</small>
              <p>{r.texto}</p>
            </li>
          ))}
        </ul>
      )}
    </Window>
  )
}
