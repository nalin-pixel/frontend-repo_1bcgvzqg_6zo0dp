import { Compass, CheckCircle2, MessageSquareHeart } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Compass,
      title: 'Tell us your trip',
      desc: 'Pick destination, dates and interests. We’ll do the rest.'
    },
    {
      icon: MessageSquareHeart,
      title: 'Match & chat',
      desc: 'See compatible companions, review profiles and start talking.'
    },
    {
      icon: CheckCircle2,
      title: 'Travel together',
      desc: 'Build shared plans, stay safe, and split costs fairly.'
    }
  ]

  return (
    <section id="how" className="bg-[#0b0c0f] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
        <p className="mt-2 max-w-2xl text-white/70">Three simple steps to find great people to explore with.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 text-white/80">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <Icon className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{idx + 1}. {title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
