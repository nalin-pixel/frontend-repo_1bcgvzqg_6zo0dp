import { motion } from 'framer-motion'
import { Plane } from 'lucide-react'

export default function CenterCta() {
  return (
    <section className="relative bg-[#0a0a0b] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Take off with the right companion</h3>
          <p className="mt-3 text-white/80">Drop your email and we’ll send your invite as soon as your routes open.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 mx-auto grid max-w-xl grid-cols-1 sm:grid-cols-[1fr_auto] gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <Plane className="size-4 text-white/40" />
            </div>
            <input type="email" required placeholder="you@domain.com" className="w-full rounded-xl border border-white/10 bg-white/10 pl-10 pr-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50" />
          </div>
          <button type="submit" className="inline-flex justify-center rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/20">
            Get invite
          </button>
        </motion.form>
      </div>
    </section>
  )
}
