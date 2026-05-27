import { motion } from 'framer-motion'
import { Phone, Globe, MapPin, Mail, ArrowRight } from 'lucide-react'
import { CTAButton } from '../ui/CTAButton'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionTitle } from '../ui/SectionTitle'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8380078231',
    href: 'tel:+918380078231',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.setuai.com',
    href: 'https://www.setuai.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '1073, Bhosale Mystiqa, Pune – 411016, India',
    href: 'https://maps.google.com/?q=Bhosale+Mystiqa+Pune',
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-slate-950 to-slate-950" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Partnership"
            title="Power the Future of Energy With Us"
            subtitle="Partner with Geniuss Wind Power to deploy next-generation distributed wind technology at scale."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 sm:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-white">
              Geniuss Wind Power Pvt. Ltd.
            </h3>
            <p className="mt-3 text-slate-400">
              Investor-grade clean energy technology — compact, scalable, and FCRI validated.
            </p>

            <ul className="mt-8 space-y-6">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.icon === Globe ? '_blank' : undefined}
                    rel={item.icon === Globe ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4 transition-colors hover:text-white"
                  >
                    <div className="rounded-xl border border-sky-500/20 bg-sky-500/10 p-3 text-sky-400 transition-colors group-hover:border-emerald-500/30 group-hover:text-emerald-400">
                      <item.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-1 text-base text-slate-200 group-hover:text-white">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <CTAButton href="mailto:info@setuai.com" variant="primary" icon={Mail}>
                Get in Touch
              </CTAButton>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 sm:p-10"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const data = new FormData(form)
              const name = data.get('name')
              const email = data.get('email')
              const message = data.get('message')
              window.location.href = `mailto:info@setuai.com?subject=Partnership Inquiry from ${name}&body=${encodeURIComponent(String(message))}%0A%0AFrom: ${email}`
            }}
          >
            <p className="mb-6 font-display text-lg font-semibold text-white">
              Partner with us to power the future of energy
            </p>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-400">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30"
                  placeholder="Tell us about your project or partnership interest..."
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 py-4 font-semibold text-white shadow-lg shadow-sky-500/25"
            >
              Send Partnership Inquiry
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
