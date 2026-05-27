import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface CTAButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: LucideIcon
  className?: string
}

export function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300'

  const variants = {
    primary:
      'bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:brightness-110',
    secondary:
      'glass text-white hover:border-sky-400/50 hover:bg-white/10',
    ghost: 'text-sky-300 hover:text-white hover:bg-white/5',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {content}
    </motion.button>
  )
}
