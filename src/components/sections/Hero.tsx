import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { CTAButton } from '../ui/CTAButton'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster=""
      >
        <source src={`${import.meta.env.BASE_URL}hero-video.mp4`} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/40 via-transparent to-emerald-950/30" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-sky-400/60"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-28 text-center sm:px-8 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          FCRI Tested & Validated
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Next-Generation
          <br />
          <span className="text-gradient">Wind Energy System</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl md:text-2xl"
        >
          Patented Multi-Helix Wind Acceleration Technology
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mx-auto mt-4 max-w-xl text-sm text-slate-400 sm:text-base"
        >
          Compact · Scalable · High Output · Investor-grade clean energy innovation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <CTAButton href="#how-it-works" variant="primary" icon={ArrowRight}>
            Explore Technology
          </CTAButton>
          <CTAButton href="#contact" variant="secondary">
            Partner With Us
          </CTAButton>
        </motion.div>
      </div>

      <motion.a
        href="#how-it-works"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-400 transition-colors hover:text-white"
        aria-label="Scroll to content"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.a>
    </section>
  )
}
