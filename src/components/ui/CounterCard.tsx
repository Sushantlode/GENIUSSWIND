import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter'

interface CounterCardProps {
  icon: LucideIcon
  value: number
  suffix?: string
  prefix?: string
  label: string
  description: string
  rangeLabel?: string
  index?: number
}

export function CounterCard({
  icon: Icon,
  value,
  suffix = '%',
  prefix = '',
  label,
  description,
  rangeLabel,
  index = 0,
}: CounterCardProps) {
  const { ref, inView } = useInView(0.3)
  const count = useAnimatedCounter({ end: value, enabled: inView })

  return (
    <motion.article
      ref={ref as React.RefObject<HTMLElement>}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="glass-strong group relative overflow-hidden rounded-2xl p-6 text-center sm:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
      <Icon className="mx-auto mb-4 h-8 w-8 text-emerald-400" strokeWidth={1.5} />
      <div className="font-display text-4xl font-bold text-white sm:text-5xl">
        {rangeLabel ? (
          <span className="text-gradient">{rangeLabel}</span>
        ) : (
          <>
            {prefix}
            <span className="text-gradient">{count}</span>
            {suffix}
          </>
        )}
      </div>
      <p className="mt-2 font-semibold text-sky-200">{label}</p>
      <p className="mt-3 text-sm text-slate-400">{description}</p>
    </motion.article>
  )
}
