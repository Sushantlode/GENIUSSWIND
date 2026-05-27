import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionTitle } from '../ui/SectionTitle'

function EnergyParticles() {
  return (
    <>
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-sky-400"
          style={{
            left: `${15 + (i * 3) % 70}%`,
            top: `${20 + (i * 7) % 60}%`,
          }}
          animate={{
            x: [0, 40 + (i % 3) * 20, 0],
            y: [0, -20 - (i % 4) * 10, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 2.5 + (i % 4) * 0.5,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}

function AirflowLines() {
  const lines = [0, 1, 2, 3, 4]
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none">
      {lines.map((i) => (
        <motion.path
          key={i}
          d={`M ${50 + i * 15} 200 Q ${150 + i * 10} ${120 + i * 20} 350 200`}
          stroke="url(#flowGradient)"
          strokeWidth={1.5 - i * 0.15}
          strokeOpacity={0.4 + i * 0.1}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.3, 0.8, 0.3] }}
          transition={{
            pathLength: { duration: 2, delay: i * 0.2 },
            opacity: { duration: 3, repeat: Infinity, delay: i * 0.3 },
          }}
        />
      ))}
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function TurbineIllustration() {
  return (
    <motion.div
      className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Outer ring */}
        <div className="absolute inset-4 rounded-full border-2 border-sky-500/30 shadow-[0_0_60px_rgba(14,165,233,0.3)]" />

        {/* Helix rings */}
        {[0, 1, 2].map((ring) => (
          <motion.div
            key={ring}
            className="absolute inset-0 rounded-full border border-dashed border-emerald-400/40"
            style={{
              inset: `${12 + ring * 16}%`,
              transform: `rotateX(${60 + ring * 15}deg)`,
            }}
            animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 8 + ring * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Center hub */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="relative"
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 h-1 w-24 origin-left -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-400/80 to-transparent"
                style={{ transform: `rotate(${i * 60}deg)` }}
              />
            ))}
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 shadow-lg shadow-sky-500/50">
              <div className="h-6 w-6 rounded-full bg-white/90" />
            </div>
          </motion.div>
        </div>

        {/* Glow core */}
        <div className="absolute inset-1/3 rounded-full bg-sky-500/20 blur-2xl" />
      </motion.div>
    </motion.div>
  )
}

export function ProductShowcase() {
  return (
    <section
      id="showcase"
      className="section-padding relative overflow-hidden bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(14,165,233,0.12)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Product Showcase"
            title="Multi-Helix Acceleration in Motion"
            subtitle="Visualize the patented airflow pathway — ambient air accelerated through helical geometry to drive continuous power generation."
          />
        </ScrollReveal>

        <div className="relative mx-auto max-w-3xl">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12 glow-sky">
            <EnergyParticles />
            <AirflowLines />
            <TurbineIllustration />

            <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center">
              {[
                { label: 'Patented', value: 'Multi-Helix' },
                { label: 'Operation', value: '24×7' },
                { label: 'Validated', value: 'FCRI' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xs uppercase tracking-wider text-slate-500">{stat.label}</p>
                  <p className="mt-1 font-display text-sm font-bold text-sky-300 sm:text-base">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
