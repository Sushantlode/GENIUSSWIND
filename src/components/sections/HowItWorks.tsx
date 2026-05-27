import { Wind, Zap, RotateCw, BatteryCharging } from 'lucide-react'
import { FlowStep } from '../ui/FlowStep'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionTitle } from '../ui/SectionTitle'

const steps = [
  {
    icon: Wind,
    title: 'Air Intake',
    description: 'Ambient air is captured through an optimized intake system designed for maximum flow efficiency.',
  },
  {
    icon: Zap,
    title: 'Acceleration',
    description: 'Patented multi-helix geometry accelerates airflow to high velocity before reaching the turbine.',
  },
  {
    icon: RotateCw,
    title: 'Turbine',
    description: 'High-velocity accelerated air drives the turbine at optimal RPM for consistent power generation.',
  },
  {
    icon: BatteryCharging,
    title: 'Power Output',
    description: 'Continuous electricity generation with 24×7 operation — grid-ready and microgrid compatible.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-950 via-sky-950/20 to-slate-950"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionTitle
            eyebrow="How It Works"
            title="From Air to Electricity in Four Steps"
            subtitle="Our patented multi-helix acceleration pathway transforms ambient wind into high-velocity power — a breakthrough in distributed clean energy."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <FlowStep
              key={step.title}
              step={i + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={i === steps.length - 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
