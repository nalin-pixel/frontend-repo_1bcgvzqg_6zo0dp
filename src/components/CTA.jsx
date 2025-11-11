export default function CTA() {
  return (
    <section id="cta" className="relative bg-[#0a0a0b] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-orange-500/20 via-pink-500/10 to-purple-500/20 p-8 sm:p-10">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to find your travel companion?</h3>
            <p className="mt-2 text-white/80">Join the community and start matching in minutes.</p>

            <form className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
              <input type="email" required placeholder="Enter your email" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50" />
              <button type="submit" className="inline-flex justify-center rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/20">
                Get early access
              </button>
            </form>

            <p className="mt-3 text-xs text-white/60">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
