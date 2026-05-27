import {
  Factory,
  Building2,
  Network,
  Mountain,
  Zap,
  GraduationCap,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionTitle } from '../ui/SectionTitle'

const applications = [
  {
    icon: Factory,
    title: 'Industrial Parks',
    description: 'On-site clean power for manufacturing clusters and SEZs.',
    gradient: 'from-sky-500/20 to-blue-600/10',
  },
  {
    icon: Building2,
    title: 'Smart Cities',
    description: 'Distributed energy nodes for urban sustainability mandates.',
    gradient: 'from-cyan-500/20 to-sky-600/10',
  },
  {
    icon: Network,
    title: 'Microgrids',
    description: 'Resilient islanded power for campuses and remote communities.',
    gradient: 'from-emerald-500/20 to-teal-600/10',
  },
  {
    icon: Mountain,
    title: 'Remote Infrastructure',
    description: 'Reliable generation where grid extension is impractical.',
    gradient: 'from-indigo-500/20 to-sky-600/10',
  },
  {
    icon: Zap,
    title: 'Utility-Scale Distributed',
    description: 'Aggregated capacity for utility-scale distributed portfolios.',
    gradient: 'from-sky-500/20 to-emerald-600/10',
  },
  {
    icon: GraduationCap,
    title: 'Commercial Campuses',
    description: 'Corporate parks, IT campuses, and institutional facilities.',
    gradient: 'from-teal-500/20 to-cyan-600/10',
  },
]

export function Applications() {
  return (
    <section
      id="applications"
      className="section-padding bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Applications"
            title="Powering Every Scale of Infrastructure"
            subtitle="From a single commercial campus to utility-scale distributed portfolios — Geniuss Wind adapts to your energy strategy."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, i) => (
            <motion.article
              key={app.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${app.gradient} p-6 backdrop-blur-sm sm:p-8`}
            >
              <div className="absolute inset-0 bg-slate-950/40 transition-opacity group-hover:opacity-20" />
              <div className="relative">
                <app.icon
                  className="mb-4 h-10 w-10 text-sky-300 transition-colors group-hover:text-emerald-300"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-xl font-semibold text-white">{app.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{app.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
