import { motion } from 'framer-motion'
import { Plane, QrCode } from 'lucide-react'

export default function BoardingPass({ className = '' }) {
  return (
    <motion.div
      whileHover={{ rotateX: 6, rotateY: -6, y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className={`relative w-full max-w-sm select-none ${className}`}
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-orange-500/60 via-pink-500/60 to-purple-500/60 blur" />
      <div className="relative rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden">
        <div className="flex items-start gap-4 p-5">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60">Boarding Pass</p>
                <h4 className="mt-1 text-lg font-semibold text-white">TRVL Companion</h4>
              </div>
              <Plane className="size-6 text-orange-400" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-white">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/50">From</p>
                <p className="text-base font-medium">SFO</p>
                <p className="text-xs text-white/60">San Francisco</p>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ x: -10 }}
                  animate={{ x: [ -10, 10, -10 ] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center gap-2"
                >
                  <div className="h-[2px] w-10 bg-white/20" />
                  <Plane className="size-4 text-orange-400" />
                  <div className="h-[2px] w-10 bg-white/20" />
                </motion.div>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider text-white/50">To</p>
                <p className="text-base font-medium">CDG</p>
                <p className="text-xs text-white/60">Paris</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4 text-white/80">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/50">Date</p>
                <p className="text-sm">12 Dec</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/50">Time</p>
                <p className="text-sm">08:45</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/50">Seat</p>
                <p className="text-sm">14A</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/50">Gate</p>
                <p className="text-sm">C3</p>
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-between h-full">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <QrCode className="size-16 text-white/30" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
          <div className="flex items-center justify-between px-5 py-3 border-t border-white/10">
            <p className="text-xs text-white/60">Passenger: <span className="text-white">You + Match</span></p>
            <p className="text-xs text-white/60">Booking: <span className="text-white">TRVL-8421</span></p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
