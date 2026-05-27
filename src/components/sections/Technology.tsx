import { motion } from 'framer-motion'
import {
  AirVent,
  Orbit,
  Gauge,
  Power,
  Settings,
  Fan,
  Clock,
} from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionTitle } from '../ui/SectionTitle'

const processCards = [
  {
    icon: AirVent,
    title: 'Ambient Air Intake System',
    description: 'Engineered intake captures ambient air with minimal losses for consistent feed to the acceleration chamber.',
  },
  {
    icon: Orbit,
    title: 'Multi-Helix Airflow Acceleration',
    description: 'Patented helical geometry multiplies wind velocity through controlled vortex dynamics — our core IP.',
  },
  {
    icon: Gauge,
    title: 'High-Velocity Turbine Drive',
    description: 'Accelerated airflow imparts maximum kinetic energy to the turbine rotor for peak conversion efficiency.',
  },
  {
    icon: Power,
    title: 'Continuous Electricity Generation',
    description: 'Uninterrupted power output with blower-assisted operation independent of ambient wind variability.',
  },
]

const specCards = [
  {
    icon: Settings,
    title: 'Startup Input',
    value: '60 HP / ~44.7 kW',
    description: 'Initial blower power requirement for system acceleration',
  },
  {
    icon: Fan,
    title: 'Airflow Generation',
    value: 'Blower-Based',
    description: 'Controlled high-velocity airflow independent of ambient conditions',
  },
  {
    icon: Clock,
    title: 'Operation Mode',
    value: '24×7 Continuous',
    description: 'Round-the-clock electricity generation capability',
  },
]

export function Technology() {
  return (
    <section
      id="technology"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Technology & Specifications"
            title="Precision Engineering Meets Patented Innovation"
            subtitle="Every component is designed for reliability, efficiency, and seamless integration into modern energy infrastructure."
          />
        </ScrollReveal>

        <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {processCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong group flex gap-5 rounded-2xl p-6 sm:p-8"
            >
              <div className="shrink-0 rounded-xl border border-sky-500/20 bg-sky-500/10 p-3 text-sky-400 transition-colors group-hover:text-emerald-400">
                <card.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{card.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {specCards.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass rounded-2xl border border-emerald-500/20 p-6 text-center"
            >
              <spec.icon className="mx-auto mb-3 h-7 w-7 text-emerald-400" strokeWidth={1.5} />
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {spec.title}
              </p>
              <p className="mt-2 font-display text-xl font-bold text-white">{spec.value}</p>
              <p className="mt-2 text-sm text-slate-400">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
