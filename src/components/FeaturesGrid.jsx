import { Sparkles, Shield, MessageCircle, Wand2 } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Aligned matching',
    desc: 'Meet people who want the same thing as you. Clear, simple, honest.',
  },
  {
    icon: MessageCircle,
    title: 'Natural conversations',
    desc: 'Thoughtful cues that help chats feel easy and real.',
  },
  {
    icon: Shield,
    title: 'Privacy first',
    desc: 'You decide what to share and with who — always transparent.',
  },
  {
    icon: Wand2,
    title: 'Calm interface',
    desc: 'A minimal look that lets personalities do the talking.',
  },
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">Designed to feel effortless</h2>
          <p className="mt-3 text-gray-600">Straightforward structure, clear actions, and a modern, friendly vibe.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-gray-900 text-white grid place-items-center shadow-sm">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
