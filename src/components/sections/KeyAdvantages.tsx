import { Layers, Maximize2, Wind, Clock } from 'lucide-react'
import { CounterCard } from '../ui/CounterCard'
import { FeatureCard } from '../ui/FeatureCard'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionTitle } from '../ui/SectionTitle'

const advantages = [
  {
    icon: Maximize2,
    title: '90% Lower Land Requirement',
    description:
      'Compact footprint enables deployment where traditional wind farms cannot — industrial zones, campuses, and urban peripheries.',
  },
  {
    icon: Layers,
    title: 'Modular & Scalable Architecture',
    description:
      'Stack and scale capacity incrementally. Start with a single unit and expand as demand grows without massive capital outlay.',
  },
  {
    icon: Wind,
    title: 'Optimized for Low Wind Conditions',
    description:
      'Blower-assisted acceleration ensures reliable performance even when ambient wind speeds are below conventional turbine thresholds.',
  },
  {
    icon: Clock,
    title: 'Rapid Deployment & Installation',
    description:
      'Pre-engineered modular units deploy in weeks, not years — dramatically reducing time-to-power for your project.',
  },
]

export function KeyAdvantages() {
  return (
    <section
      id="advantages"
      className="section-padding relative bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Key Advantages"
            title="Engineered for the Real World"
            subtitle="Quantifiable benefits that redefine what distributed wind energy can deliver."
          />
        </ScrollReveal>

        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <CounterCard
            icon={Maximize2}
            value={90}
            suffix="%"
            label="Lower Land Requirement"
            description="vs. conventional wind farms"
            index={0}
          />
          <CounterCard
            icon={Layers}
            value={50}
            rangeLabel="40–60%"
            label="Modular Scale Range"
            description="Flexible capacity expansion"
            index={1}
          />
          <CounterCard
            icon={Wind}
            value={24}
            suffix="/7"
            label="Continuous Operation"
            description="Blower-assisted 24×7 generation"
            index={2}
          />
          <CounterCard
            icon={Clock}
            value={30}
            prefix="<"
            suffix=" days"
            label="Rapid Deployment"
            description="From delivery to power online"
            index={3}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {advantages.map((item, i) => (
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
