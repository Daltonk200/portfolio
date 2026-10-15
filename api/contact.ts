import nodemailer from 'nodemailer'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)

const json = (body: unknown, status = 200) =>
  Response.json(body, { status })

// Vercel Function (Node.js runtime). Also served by the Vite dev server in development.
export async function POST(request: Request) {
  let data: Record<string, unknown>
  try {
    data = (await request.json()) as Record<string, unknown>
  } catch {
    return json({ error: 'Invalid request.' }, 400)
  }

  const name = String(data.name ?? '').trim().slice(0, 200)
  const email = String(data.email ?? '').trim().slice(0, 320)
  const message = String(data.message ?? '').trim().slice(0, 5000)

  // Honeypot: real visitors never fill this hidden field.
  if (data.company) return json({ ok: true })

  if (!name || !email || !message) {
    return json({ error: 'Please fill in all fields.' }, 400)
  }
  if (!EMAIL_RE.test(email)) {
    return json({ error: 'Please enter a valid email.' }, 400)
  }

  const { SMTP_SERVER, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD, FROM_EMAIL, TO_EMAIL } =
    process.env
  if (!SMTP_SERVER || !SMTP_USERNAME || !SMTP_PASSWORD || !TO_EMAIL) {
    console.error('Contact form: SMTP environment variables are missing.')
    return json({ error: 'Email service is not configured.' }, 500)
  }

  const port = Number(SMTP_PORT) || 587
  const transporter = nodemailer.createTransport({
    host: SMTP_SERVER,
    port,
    secure: port === 465,
    auth: { user: SMTP_USERNAME, pass: SMTP_PASSWORD },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${FROM_EMAIL || SMTP_USERNAME}>`,
      to: TO_EMAIL,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `Portfolio inquiry from ${name}`,
      text: `${message}\n\n— ${name}\n${email}`,
      html: `<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p><p>— ${escapeHtml(name)}<br><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>`,
    })
  } catch (err) {
    console.error('Contact form: failed to send email.', err)
    return json({ error: 'Could not send your message. Please try again later.' }, 502)
  }

  return json({ ok: true })
}
