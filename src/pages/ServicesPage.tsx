import { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactButton from '../components/ContactButton'
import FadeIn from '../components/FadeIn'
import PageHero from '../components/PageHero'
import { SERVICES } from '../data/services'

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  return (
    <div className="bg-white min-h-screen rounded-t-none">
      <div className="px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="[&_a]:text-[#0C0C0C]/50 [&_span]:text-[#0C0C0C] [&_nav]:text-[#0C0C0C]/50">
            <Breadcrumbs items={[{ label: 'Services' }]} />
          </div>
          <PageHero
            title="services"
            subtitle="Detailed offerings for startups and teams that need AI, automation, and solid engineering."
            light
          />

          <div className="space-y-16 sm:space-y-24">
            {SERVICES.map((service, i) => (
              <FadeIn key={service.slug} delay={Math.min(i * 0.05, 0.3)} y={30}>
                <article
                  id={service.slug}
                  className="border-t border-[#0C0C0C]/15 pt-10 sm:pt-14"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 mb-8">
                    <span
                      className="font-black text-[#0C0C0C] leading-none"
                      style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h2
                        className="font-medium uppercase text-[#0C0C0C] mb-4"
                        style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}
                      >
                        {service.name}
                      </h2>
                      <p className="text-[#0C0C0C]/70 font-light leading-relaxed max-w-2xl text-base sm:text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    <div>
                      <h3 className="text-[#0C0C0C] font-medium uppercase tracking-widest text-sm mb-3">
                        Technologies
                      </h3>
                      <ul className="space-y-1 text-[#0C0C0C]/65 font-light">
                        {service.technologies.map((t) => (
                          <li key={t}>• {t}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-[#0C0C0C] font-medium uppercase tracking-widest text-sm mb-3">
                        Typical workflow
                      </h3>
                      <ol className="space-y-1 text-[#0C0C0C]/65 font-light list-decimal list-inside">
                        {service.workflow.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h3 className="text-[#0C0C0C] font-medium uppercase tracking-widest text-sm mb-3">
                        Deliverables
                      </h3>
                      <ul className="space-y-1 text-[#0C0C0C]/65 font-light">
                        {service.deliverables.map((d) => (
                          <li key={d}>• {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-[#0C0C0C] font-medium uppercase tracking-widest text-sm mb-3">
                      Ideal clients
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.idealClients.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-[#0C0C0C]/2 px-4 py-1.5 text-sm text-[#0C0C0C]/70"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-[#0C0C0C] font-medium uppercase tracking-widest text-sm mb-3">
                      FAQs
                    </h3>
                    <div className="space-y-2">
                      {service.faqs.map((faq) => {
                        const key = `${service.slug}-${faq.q}`
                        const isOpen = openFaq === key
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setOpenFaq(isOpen ? null : key)}
                            className="w-full text-left rounded-2xl border border-[#0C0C0C]/15 px-5 py-4 transition-colors hover:bg-[#0C0C0C]/5"
                          >
                            <span className="font-medium text-[#0C0C0C] uppercase tracking-wide text-sm">
                              {faq.q}
                            </span>
                            {isOpen ? (
                              <p className="mt-2 text-[#0C0C0C]/65 font-light leading-relaxed">
                                {faq.a}
                              </p>
                            ) : null}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <ContactButton label="let's build together" href="/contact" />
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
