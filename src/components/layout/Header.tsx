import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, Wind } from 'lucide-react'
import { useState } from 'react'
import { CTAButton } from '../ui/CTAButton'

const navLinks = [
  { label: 'Technology', href: '#how-it-works' },
  { label: 'Advantages', href: '#advantages' },
  { label: 'Specifications', href: '#technology' },
  { label: 'Applications', href: '#applications' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-950/80 py-3 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#" className="group flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 shadow-lg shadow-sky-500/30">
            <Wind className="h-5 w-5 text-white" strokeWidth={2} />
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-sm font-bold tracking-wide text-white">
              Geniuss Wind
            </span>
            <span className="block text-[10px] uppercase tracking-[0.15em] text-sky-400">
              Power Pvt. Ltd.
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton href="#contact" variant="primary">
            Partner With Us
          </CTAButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-white/10 bg-slate-950/95 px-5 py-6 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate-200"
              >
                {link.label}
              </a>
            ))}
            <CTAButton href="#contact" variant="primary" className="mt-2 w-full">
              Partner With Us
            </CTAButton>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}
