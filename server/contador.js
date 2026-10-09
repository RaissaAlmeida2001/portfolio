// Contador de visitas guardado num arquivo JSON no servidor.
// GET  /api/visitas -> { total }        (só lê)
// POST /api/visitas -> { total }        (soma +1 e devolve)
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ARQUIVO = join(dirname(fileURLToPath(import.meta.url)), 'dados', 'visitas.json')

function ler() {
  try {
    return JSON.parse(readFileSync(ARQUIVO, 'utf-8')).total ?? 0
  } catch {
    return 0 // começa do zero ✿
  }
}

let total = ler()

function salvar() {
  if (!existsSync(dirname(ARQUIVO))) mkdirSync(dirname(ARQUIVO), { recursive: true })
  writeFileSync(ARQUIVO, JSON.stringify({ total }))
}

// Middleware no formato (req, res, next) — funciona no Vite e no servidor de produção
export function rotaVisitas(req, res, next) {
  if (!req.url.startsWith('/api/visitas')) return next()

  if (req.method === 'POST') {
    total += 1
    salvar()
  } else if (req.method !== 'GET') {
    res.statusCode = 405
    return res.end()
  }

  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify({ total }))
}
