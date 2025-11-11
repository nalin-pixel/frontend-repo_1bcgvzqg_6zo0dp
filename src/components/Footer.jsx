import { motion } from 'framer-motion'
import { Send, Rocket, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer-cta" className="relative bg-[#0a0a0b] pt-20">
      {/* Layered gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA Panel */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">Board your next adventure with the right crew</h3>
              <p className="mt-3 text-white/80">Join the early access list to get matched as new routes open.</p>

              <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                    <Mail className="h-4 w-4 text-white/40" />
                  </div>
                  <input type="email" required placeholder="you@domain.com" className="w-full rounded-xl border border-white/10 bg-white/10 pl-10 pr-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50" />
                </div>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/20">
                  <Send className="h-4 w-4" /> Join waitlist
                </button>
              </form>

              <p className="mt-3 text-xs text-white/60">No spam. Unsubscribe anytime.</p>
            </div>

            {/* Animated card stack */}
            <div className="relative h-[220px] lg:h-full">
              <motion.div
                initial={{ rotate: -8, y: 20, opacity: 0 }}
                whileInView={{ rotate: -8, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute left-8 top-4 h-40 w-64 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm"
              />
              <motion.div
                initial={{ rotate: 6, y: 20, opacity: 0 }}
                whileInView={{ rotate: 6, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="absolute left-24 top-16 h-40 w-64 rounded-2xl border border-white/10 bg-gradient-to-tr from-orange-500/20 to-pink-500/20"
              />
              <motion.div
                initial={{ rotate: -2, y: 20, opacity: 0 }}
                whileInView={{ rotate: -2, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute left-40 top-6 h-40 w-64 rounded-2xl border border-white/10 bg-white/[0.06] flex items-center justify-center"
              >
                <Rocket className="h-8 w-8 text-white/80" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Companion. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
