import { Heart, X, MessageCircle } from 'lucide-react'

const profiles = [
  {
    name: 'Sofia',
    age: 25,
    bio: 'Design, ceramics, and indie coffee shops.',
    city: 'Amsterdam',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Amelia',
    age: 27,
    bio: 'Pilates, poetry, cozy film nights.',
    city: 'London',
    img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Mila',
    age: 24,
    bio: 'Street photography and ramen quests.',
    city: 'Tokyo',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function ProfileShowcase() {
  return (
    <section id="profiles" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">A clean, swipe-first flow</h2>
            <p className="mt-2 text-gray-600">Minimal UI with clear actions that stay out of the way.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
            <span className="h-2 w-2 rounded-full bg-gray-900" /> Smooth, simple, fast
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <div key={p.name} className="group relative rounded-[28px] overflow-hidden bg-white border border-gray-200 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.2)]">
              <div className="aspect-[3/4]">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/90 backdrop-blur p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-semibold">{p.name} · {p.age}</div>
                    <div className="text-xs text-gray-500">{p.city}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="h-10 w-10 grid place-items-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Pass">
                      <X className="h-5 w-5 text-gray-700" />
                    </button>
                    <button className="h-10 w-10 grid place-items-center rounded-full bg-gray-900 hover:bg-black text-white transition-colors" aria-label="Like">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="h-10 w-10 grid place-items-center rounded-full bg-white border border-gray-200 hover:border-gray-300 transition-colors" aria-label="Message">
                      <MessageCircle className="h-5 w-5 text-gray-900" />
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
