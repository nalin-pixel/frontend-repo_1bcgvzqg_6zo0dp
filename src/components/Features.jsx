import { ShieldCheck, Users, Calendar, MapPin, Sparkles } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Users,
      title: 'Smart matching',
      desc: 'Meet travelers who share your destination, dates, and interests.'
    },
    {
      icon: Calendar,
      title: 'Plan together',
      desc: 'Share itineraries, split costs, and coordinate schedules easily.'
    },
    {
      icon: ShieldCheck,
      title: 'Verified & safe',
      desc: 'ID checks, ratings, and safety tools keep companionship trustworthy.'
    },
    {
      icon: MapPin,
      title: 'Global community',
      desc: 'From city breaks to treks—find companions in 190+ countries.'
    }
  ]

  return (
    <section id="features" className="relative bg-[#0a0a0b] py-20">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Sparkles className="h-3.5 w-3.5 text-orange-400" />
          Built for modern explorers
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Everything you need to travel together
        </h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Designed around safety, compatibility and seamless trip planning.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
              <Icon className="h-6 w-6 mb-3 text-orange-400" />
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
