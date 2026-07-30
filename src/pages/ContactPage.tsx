import { useState, type FormEvent } from 'react'
import { BG } from '../assets/bg'
import { DECOR } from '../assets/decorations'
import BgAtmosphere from '../components/BgAtmosphere'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactButton from '../components/ContactButton'
import Decoration from '../components/Decoration'
import FadeIn from '../components/FadeIn'
import PageHero from '../components/PageHero'
import { SITE } from '../data/site'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.')
      return
    }
    setSubmitted(true)
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
  }

  return (
    <BgAtmosphere
      src={BG.keyboard}
      intensity={0.22}
      position="right center"
      className="relative min-h-screen overflow-hidden"
      overlay="linear-gradient(90deg, rgba(12,12,12,0.96) 0%, rgba(12,12,12,0.88) 55%, rgba(12,12,12,0.78) 100%)"
    >
      <Decoration
        src={DECOR.baymax}
        alt="Friendly helper"
        className="absolute bottom-0 right-[-2%] z-[5] w-[160px] opacity-95 sm:right-[1%] sm:w-[220px] md:w-[280px]"
        delay={0.3}
        x={50}
        y={0}
      />
      <Decoration
        src={DECOR.handshake}
        alt="Partnership"
        className="absolute left-[2%] top-[18%] z-[5] hidden w-[160px] opacity-90 md:block lg:w-[200px]"
        delay={0.2}
        x={-40}
        y={0}
      />
      <div className="relative z-10 px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: 'Contact' }]} />
        <PageHero
          title="let's build something impactful"
          subtitle="have an idea, startup, or business challenge? let's turn it into software that delivers real results."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn y={24}>
            {submitted ? (
              <div className="rounded-[28px] border border-[#D7E2EA]/30 p-8 text-center bg-[#0C0C0C]/60 backdrop-blur-sm">
                <p className="text-[#D7E2EA] font-medium uppercase tracking-widest mb-3">
                  Thanks — your mail client should open next.
                </p>
                <p className="text-[#D7E2EA]/70 font-light text-sm">
                  If it didn&apos;t, email {SITE.email} directly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="space-y-5 rounded-[28px] border border-[#D7E2EA]/15 p-6 sm:p-8 bg-[#0C0C0C]/55 backdrop-blur-sm"
              >
                <div>
                  <label className="block text-[#D7E2EA]/60 text-xs uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border-2 border-[#D7E2EA]/25 bg-transparent px-5 py-3.5 text-[#D7E2EA] outline-none focus:border-[#D7E2EA] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#D7E2EA]/60 text-xs uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border-2 border-[#D7E2EA]/25 bg-transparent px-5 py-3.5 text-[#D7E2EA] outline-none focus:border-[#D7E2EA] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#D7E2EA]/60 text-xs uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full rounded-2xl border-2 border-[#D7E2EA]/25 bg-transparent px-5 py-3.5 text-[#D7E2EA] outline-none focus:border-[#D7E2EA] transition-colors resize-y"
                  />
                </div>
                {error ? (
                  <p className="text-sm text-red-400">{error}</p>
                ) : null}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full px-10 py-3.5 text-sm text-white font-medium uppercase tracking-widest transition-opacity duration-200 hover:opacity-90"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow:
                      '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                    outline: '2px solid white',
                    outlineOffset: '-3px',
                  }}
                >
                  Send message
                </button>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.1} y={24}>
            <div className="space-y-8">
              <div>
                <h3 className="text-[#D7E2EA] text-xs uppercase tracking-widest mb-3">
                  Direct
                </h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[#D7E2EA] text-lg hover:opacity-70 transition-opacity"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <h3 className="text-[#D7E2EA] text-xs uppercase tracking-widest mb-3">
                  Social
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-sm text-[#D7E2EA] uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-sm text-[#D7E2EA] uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="rounded-[28px] border border-[#D7E2EA]/20 p-6 space-y-4 bg-[#0C0C0C]/55 backdrop-blur-sm">
                <p className="text-[#D7E2EA] text-xs uppercase tracking-widest">
                  Availability
                </p>
                <p className="text-[#D7E2EA]/80 font-light">{SITE.availability}</p>
                <p className="text-[#D7E2EA] text-xs uppercase tracking-widest pt-2">
                  Timezone
                </p>
                <p className="text-[#D7E2EA]/80 font-light">{SITE.timezone}</p>
                <p className="text-[#D7E2EA] text-xs uppercase tracking-widest pt-2">
                  Response
                </p>
                <p className="text-[#D7E2EA]/80 font-light">{SITE.responseTime}</p>
              </div>
              <ContactButton label="Email me directly" href={`mailto:${SITE.email}`} />
            </div>
          </FadeIn>
        </div>
      </div>
      </div>
    </BgAtmosphere>
  )
}
