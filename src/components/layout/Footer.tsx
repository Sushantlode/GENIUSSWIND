import { Wind } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20">
            <Wind className="h-4 w-4 text-sky-400" />
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-white">Geniuss Wind Power</p>
            <p className="text-xs text-slate-500">Pvt. Ltd. · Pune, India</p>
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 sm:text-right">
          © {new Date().getFullYear()} Geniuss Wind Power Pvt. Ltd. All rights reserved.
          <br />
          <span className="text-sky-500/80">FCRI Tested & Validated Technology</span>
        </p>
      </div>
    </footer>
  )
}
