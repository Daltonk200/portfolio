import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Serves api/contact.ts at /api/contact during `npm run dev` (Vercel serves it in production).
function devApi(): Plugin {
  return {
    name: 'dev-api',
    apply: 'serve',
    configureServer(server) {
      Object.assign(process.env, loadEnv(server.config.mode, process.cwd(), ''))
      server.middlewares.use('/api/contact', async (req, res) => {
        const chunks: Buffer[] = []
        for await (const chunk of req) chunks.push(chunk as Buffer)
        const mod = await server.ssrLoadModule('/api/contact.ts')
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end()
          return
        }
        const response: Response = await mod.POST(
          new Request('http://localhost/api/contact', {
            method: 'POST',
            headers: { 'content-type': req.headers['content-type'] ?? '' },
            body: Buffer.concat(chunks),
          }),
        )
        res.statusCode = response.status
        res.setHeader('content-type', response.headers.get('content-type') ?? 'application/json')
        res.end(await response.text())
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devApi()],
})
