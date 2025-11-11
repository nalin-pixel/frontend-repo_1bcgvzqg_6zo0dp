import { motion } from 'framer-motion'
import BoardingPass from './BoardingPass'

export default function RightCta() {
  return (
    <section className="relative bg-[#0a0a0b] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Join the waitlist
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 text-white/80"
            >
              Be the first to get early access. We’ll invite you as we roll out city by city.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="email" required placeholder="Enter your email" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50" />
              <button type="submit" className="inline-flex justify-center rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/20">
                Get early access
              </button>
            </motion.form>

            <p className="mt-3 text-xs text-white/60">No spam. Unsubscribe anytime.</p>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="pointer-events-none absolute -top-6 -right-6 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
            <BoardingPass className="ml-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
