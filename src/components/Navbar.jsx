import { Heart } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-rose-500 to-orange-400 grid place-items-center shadow-lg shadow-rose-500/30">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight">VibeMeet</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
          <a href="#profiles" className="hover:text-gray-900 transition-colors">Explore</a>
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Log in</button>
          <button className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-gray-900 hover:bg-gray-800 shadow-lg shadow-gray-900/20">Get the app</button>
        </div>
      </div>
    </header>
  )
}
