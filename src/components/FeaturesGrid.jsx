import { Sparkles, Shield, MessageCircle, Wand2 } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Intent-based matching',
    desc: 'We surface people who want the same thing as you. Effortless, aligned, and clear.',
  },
  {
    icon: MessageCircle,
    title: 'Conversation cues',
    desc: 'Elegant prompts and icebreakers that keep chats natural and fun.',
  },
  {
    icon: Shield,
    title: 'Privacy first',
    desc: 'You control who sees you. Transparent settings and frictionless safety tools.',
  },
  {
    icon: Wand2,
    title: 'Calm design',
    desc: 'A clean, modern interface that stays out of the way and lets you connect.',
  },
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Designed for real connection</h2>
          <p className="mt-3 text-gray-600">Thoughtful details, smooth interactions, and a vibe that feels fresh and intentional.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-sky-500 text-white grid place-items-center shadow-md shadow-fuchsia-500/30">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
