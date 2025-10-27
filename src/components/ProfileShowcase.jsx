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
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Explore nearby vibes</h2>
            <p className="mt-2 text-gray-600">Swipe through clean, elegant profile cards designed for focus.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
            <div className="h-2 w-2 rounded-full bg-fuchsia-500" /> Live now
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <div key={p.name} className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
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
                    <button className="h-10 w-10 grid place-items-center rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 transition-colors text-white shadow-lg shadow-fuchsia-500/30" aria-label="Like">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="h-10 w-10 grid place-items-center rounded-full bg-gray-900 hover:bg-gray-800 transition-colors text-white" aria-label="Message">
                      <MessageCircle className="h-5 w-5" />
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
