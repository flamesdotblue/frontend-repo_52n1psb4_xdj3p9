import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background aura */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-gray-900/10 to-gray-900/0 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-gray-900/10 to-gray-900/0 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Dating, done simply
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              A calmer way to meet people you actually vibe with
            </h1>
            <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-xl">
              Clean design. Honest profiles. Thoughtful matching. Less noise, more real connection.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#profiles" className="px-5 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-black">Start exploring</a>
              <a href="#features" className="px-5 py-3 rounded-full bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300">See features</a>
            </div>
            <div className="mt-6 text-xs text-gray-500">No ads. No pressure. Be yourself.</div>
          </div>

          {/* Visual stack */}
          <div className="relative h-[460px] sm:h-[540px]">
            <div className="absolute inset-0 rounded-[32px] bg-white border border-gray-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]" />
            <div className="absolute inset-0 p-4 sm:p-6 grid grid-cols-3 gap-3">
              <div className="space-y-3">
                <ProfileCard name="Maya" age={26} city="Lisbon" img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" vibe="Art & rooftop sunsets" />
                <ProfileCard name="Zoe" age={24} city="Berlin" img="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop" vibe="Tech talks & vinyl" />
              </div>
              <div className="space-y-3 pt-10">
                <ProfileCard name="Ava" age={27} city="London" img="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" vibe="Yoga & matcha walks" />
                <ProfileCard name="Elle" age={25} city="Paris" img="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop" vibe="Museums & pastries" />
              </div>
              <div className="space-y-3 pt-20">
                <ProfileCard name="Noa" age={28} city="Copenhagen" img="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=800&auto=format&fit=crop" vibe="Cycling & natural wine" />
                <ProfileCard name="Isla" age={23} city="Barcelona" img="https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=800&auto=format&fit=crop" vibe="Beach days & film" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProfileCard({ name, age, city, img, vibe }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[3/4] overflow-hidden">
        <img src={img} alt={`${name} in ${city}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="absolute inset-x-2 bottom-2 rounded-xl bg-white/90 backdrop-blur px-3 py-2 text-sm">
        <div className="flex items-center justify-between">
          <div className="font-medium">{name} · {age}</div>
          <div className="text-xs text-gray-500">{city}</div>
        </div>
        <div className="mt-1 text-xs text-gray-600 line-clamp-1">{vibe}</div>
      </div>
    </div>
  )
}
