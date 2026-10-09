import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { rotaVisitas } from './server/contador.js'

// Plugin que liga a API do contador dentro do `npm run dev`
const apiContador = {
  name: 'api-contador',
  configureServer(server) {
    server.middlewares.use(rotaVisitas)
  },
}

export default defineConfig({
  plugins: [react(), apiContador],
})
