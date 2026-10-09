// API do contador na Vercel (função serverless).
// O total fica no Upstash Redis — a Vercel cria as variáveis de ambiente
// sozinha quando você conecta o Upstash pelo painel (Storage → Upstash Redis).
// No seu computador (npm run dev) quem responde é o server/contador.js.
const URL_REDIS = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN
const CHAVE = 'portfolio:visitas'

async function redis(comando) {
  const r = await fetch(`${URL_REDIS}/${comando}/${CHAVE}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}` },
  })
  if (!r.ok) throw new Error(`Redis respondeu ${r.status}`)
  return (await r.json()).result
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).end()
  }
  if (!URL_REDIS || !TOKEN) {
    // banco ainda não conectado: mostra 0 sem quebrar o site
    return res.status(200).json({ total: 0 })
  }

  try {
    const total = req.method === 'POST' ? await redis('incr') : Number(await redis('get')) || 0
    res.status(200).json({ total })
  } catch (erro) {
    console.error(erro)
    res.status(500).json({ total: 0 })
  }
}
