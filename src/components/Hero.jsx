import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Plane, Sparkles, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0a0a0b]">
      {/* Immersive 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient scrim for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/40 to-[#0a0a0b]" />

      {/* Curved route path with animated plane following it */}
      <motion.svg
        aria-hidden
        viewBox="0 0 1200 300"
        className="absolute left-1/2 top-28 h-[180px] -translate-x-1/2 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1.2 }}
      >
        <defs>
          <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <path
          id="routePath"
          d="M 50 220 C 250 80, 500 80, 750 180 S 1100 220, 1150 120"
          fill="none"
          stroke="url(#route)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="[stroke-dasharray:6_10]"
        />
        {/* Glowing blur under the route */}
        <path
          d="M 50 220 C 250 80, 500 80, 750 180 S 1100 220, 1150 120"
          fill="none"
          stroke="url(#route)"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.12"
          filter="url(#blur)"
        />
      </motion.svg>

      {/* Animated plane dot following the path (approximation with keyframes) */}
      <motion.div
        className="pointer-events-none absolute top-28 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className="relative"
          animate={{ x: [ -540, -240, 60, 360, 560 ], y: [ 120, 10, 40, -10, 70 ], rotate: [ -10, -2, 4, 8, 14 ] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute -inset-6 rounded-full bg-orange-500/15 blur-2xl" />
          <Plane className="size-7 text-white drop-shadow-[0_0_12px_rgba(251,146,60,0.5)]" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-4xl">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="text-balance text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Match with the right person for the exact trip you want
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="mt-4 text-lg sm:text-xl text-white/80"
            >
              Tell us where and when, we’ll surface compatible travel companions with aligned vibe, budget, and plans.
            </motion.p>
          </motion.div>

          {/* Floating badges for social proof and safety */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.div whileHover={{ y: -2 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80">
              <Sparkles className="size-4 text-orange-400" />
              <span>Smart matching</span>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80">
              <Users className="size-4 text-pink-400" />
              <span>Verified profiles</span>
            </motion.div>
          </div>

          {/* Primary actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="#how" className="inline-flex justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 hover:bg-white/10">
              See the flow
            </a>
            <a href="#footer-cta" className="inline-flex justify-center rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/20">
              Join the waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
