// Servidor de produção: entrega o site (pasta dist) + a API do contador.
// Rode com: npm run build && npm start
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { rotaVisitas } from './contador.js'

const PORTA = process.env.PORT || 3000
const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const TIPOS = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.gif': 'image/gif', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.json': 'application/json',
}

async function arquivoEstatico(req, res) {
  const caminho = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  // normalize + checagem impede sair da pasta dist (../../)
  let arquivo = normalize(join(DIST, caminho === '/' ? 'index.html' : caminho))
  if (!arquivo.startsWith(DIST)) {
    res.statusCode = 403
    return res.end()
  }
  try {
    const conteudo = await readFile(arquivo)
    res.setHeader('Content-Type', TIPOS[extname(arquivo)] || 'application/octet-stream')
    res.end(conteudo)
  } catch {
    res.setHeader('Content-Type', TIPOS['.html'])
    res.end(await readFile(join(DIST, 'index.html')))
  }
}

createServer((req, res) => {
  rotaVisitas(req, res, () => arquivoEstatico(req, res))
}).listen(PORTA, () => console.log(`✿ portfólio no ar em http://localhost:${PORTA}`))
