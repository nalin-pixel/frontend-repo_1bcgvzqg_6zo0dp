import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] md:min-h-[92vh] w-full overflow-hidden bg-[#0a0a0b]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/30 to-[#0a0a0b] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Find your perfect travel companion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-white/80"
          >
            Match with like‑minded explorers by destination, dates, and interests. Safer, smarter, and more fun travel starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a href="#cta" className="inline-flex justify-center rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/20">
              Start matching
            </a>
            <a href="#how" className="inline-flex justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 hover:bg-white/10">
              How it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {["Verified profiles", "Shared itineraries", "Smart matching", "Safety first"].map((t) => (
              <div key={t} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                {t}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
