import { useState } from 'react'
import { Menu, X, Plane, Users2 } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-pink-500">
              <Plane className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight">Companion</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#stories" className="hover:text-white transition-colors">Stories</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="text-sm text-white/80 hover:text-white">Log in</a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/20">
              <Users2 className="h-4 w-4" />
              Find a companion
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:hidden">
            <div className="px-4 py-3 space-y-2 text-white/80">
              <a href="#features" className="block py-2">Features</a>
              <a href="#how" className="block py-2">How it works</a>
              <a href="#stories" className="block py-2">Stories</a>
              <a href="#cta" className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white">
                <Users2 className="h-4 w-4" />
                Find a companion
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
