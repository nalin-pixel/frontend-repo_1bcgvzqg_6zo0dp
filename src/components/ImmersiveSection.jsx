import { motion } from 'framer-motion'
import { MapPinned, Users, ShieldCheck } from 'lucide-react'
import BoardingPass from './BoardingPass'

export default function ImmersiveSection() {
  return (
    <section className="relative bg-[#0a0a0b] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Travel together, safer and smarter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 text-white/80"
            >
              Our platform pairs you with compatible companions using intent, dates, and vibe — then helps you plan, split, and go with confidence.
            </motion.p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{ icon: MapPinned, label: 'Match by destination' }, { icon: Users, label: 'Verified community' }, { icon: ShieldCheck, label: 'Safety controls' }].map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 flex items-center gap-2"
                >
                  <Icon className="size-4 text-orange-400" />
                  <span className="text-sm">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <BoardingPass className="mx-auto" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.7, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
