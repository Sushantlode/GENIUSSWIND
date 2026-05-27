import { ShieldCheck, Wrench, Calendar, Cpu, Radio, Plug } from 'lucide-react'
import { FeatureCard } from '../ui/FeatureCard'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionTitle } from '../ui/SectionTitle'

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'FCRI Tested & Validated System',
    description:
      'Independently tested and validated by Fluid Control Research Institute — the gold standard for fluid dynamics certification in India.',
  },
  {
    icon: Wrench,
    title: 'Minimal Maintenance',
    description:
      'Robust mechanical design with fewer moving parts exposed to environmental wear — lower OPEX over the system lifetime.',
  },
  {
    icon: Calendar,
    title: 'Tested Lifespan: 20–25 Years',
    description:
      'Engineered for decades of continuous operation with validated durability under accelerated lifecycle testing.',
  },
  {
    icon: Cpu,
    title: 'SCADA + PLC + IoT Integration',
    description:
      'Full industrial automation stack with programmable logic control and IoT-ready architecture for smart operations.',
  },
  {
    icon: Radio,
    title: 'Real-Time Remote Monitoring',
    description:
      'Live performance dashboards, alerts, and predictive analytics accessible from anywhere in the world.',
  },
  {
    icon: Plug,
    title: 'Grid & Microgrid Compatible',
    description:
      'Seamlessly integrates with utility grids, behind-the-meter installations, and islanded microgrid configurations.',
  },
]

export function Reliability() {
  return (
    <section
      id="reliability"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/30 via-slate-950 to-emerald-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.08)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Reliability & Integration"
            title="Built for Trust. Designed for Scale."
            subtitle="Enterprise-grade reliability with the integration depth that infrastructure investors demand."
          />
        </ScrollReveal>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          {['FCRI Certified', 'SCADA Ready', 'IoT Enabled', 'Grid Compatible'].map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-sky-300"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item, i) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
