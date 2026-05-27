import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface FlowStepProps {
  step: number
  icon: LucideIcon
  title: string
  description: string
  isLast?: boolean
  index?: number
}

export function FlowStep({
  step,
  icon: Icon,
  title,
  description,
  isLast = false,
  index = 0,
}: FlowStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative flex flex-col items-center"
    >
      <motion.div
        whileHover={{ scale: 1.08, rotate: 2 }}
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/20 to-emerald-500/10 shadow-lg shadow-sky-500/10 transition-shadow group-hover:glow-sky sm:h-24 sm:w-24"
      >
        <Icon className="h-9 w-9 text-sky-300 transition-colors group-hover:text-emerald-300" strokeWidth={1.5} />
        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
          {step}
        </span>
      </motion.div>
      <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 max-w-[200px] text-center text-sm leading-relaxed text-slate-400">
        {description}
      </p>
      {!isLast && (
        <div className="absolute left-[calc(50%+48px)] top-10 hidden h-0.5 w-[calc(100%-96px)] bg-gradient-to-r from-sky-500/50 to-emerald-500/30 lg:block" />
      )}
    </motion.div>
  )
}
