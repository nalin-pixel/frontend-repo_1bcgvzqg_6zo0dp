import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass, MessageSquareHeart, CheckCircle2, Shield, Wand2, CalendarRange } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: Compass,
      title: 'Set your route',
      desc: 'Choose destination, dates, vibe, and budget.'
    },
    {
      id: 2,
      icon: MessageSquareHeart,
      title: 'Get compatible matches',
      desc: 'We surface verified profiles that align with your preferences.'
    },
    {
      id: 3,
      icon: CheckCircle2,
      title: 'Lock plans together',
      desc: 'Chat, co-create an itinerary, and split costs fairly.'
    }
  ]

  const [active, setActive] = useState(1)

  return (
    <section id="how" className="relative bg-[#0b0c0f] py-24">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-2 text-white/70">Tap through the steps to preview the experience.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8">
          {/* Interactive step cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {steps.map(({ id, icon: Icon, title, desc }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`text-left rounded-2xl border px-5 py-5 transition-all ${active === id ? 'border-orange-400/40 bg-white/[0.07]' : 'border-white/10 bg-white/[0.04] hover:bg-white/[0.06]'} `}
              >
                <div className="flex items-center gap-3">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${active === id ? 'bg-gradient-to-tr from-orange-500/30 to-pink-500/30' : 'bg-white/5'} `}>
                    <Icon className={`h-5 w-5 ${active === id ? 'text-orange-300' : 'text-white/60'}`} />
                  </div>
                  <div>
                    <p className={`text-base font-semibold ${active === id ? 'text-white' : 'text-white/90'}`}>{title}</p>
                    <p className="text-sm text-white/60">{desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Animated preview panel unique per step */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 min-h-[300px]">
            <AnimatePresence mode="wait">
              {active === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <div className="grid grid-cols-3 gap-4">
                    {['Paris','Bali','Kyoto','Reykjavík','Lisbon','Cusco'].map((city, i) => (
                      <motion.div key={city} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 * i }} className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="h-24 rounded-md bg-gradient-to-br from-orange-500/20 to-pink-500/20" />
                        <p className="mt-3 text-sm text-white">{city}</p>
                        <p className="text-xs text-white/60">+ flexible dates</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-white/70 text-sm">
                    <CalendarRange className="h-4 w-4 text-orange-300" />
                    Pick a window, not a single date. We’ll expand your options.
                  </div>
                </motion.div>
              )}

              {active === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[1,2,3,4].map((i) => (
                      <motion.div key={i} whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-orange-500/40 to-pink-500/40" />
                          <div>
                            <p className="text-white">Traveler {i}</p>
                            <p className="text-xs text-white/60">Budget • Foodie • Early riser</p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
                          <Shield className="h-4 w-4 text-green-400/80" /> Verified • 12 trips
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
                    <Wand2 className="h-4 w-4 text-orange-300" /> Smart rank by compatibility
                  </div>
                </motion.div>
              )}

              {active === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <div className="grid sm:grid-cols-3 gap-4">
                    {['Flights','Stays','Activities'].map((t, i) => (
                      <motion.div key={t} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i }} className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold text-white">{t}</p>
                        <div className="mt-3 h-24 rounded-md bg-[linear-gradient(120deg,rgba(251,146,60,0.2),rgba(236,72,153,0.2))]" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10">Suggest plan</button>
                    <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-2 text-sm font-semibold text-white">Split costs</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
