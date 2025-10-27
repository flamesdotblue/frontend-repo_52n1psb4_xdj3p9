import { Heart } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/65 border-b border-gray-200/60">
      <div className="mx-auto max-w-6xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-grid h-9 w-9 place-items-center rounded-2xl bg-gray-900 text-white shadow-sm">
            <Heart className="h-5 w-5" />
          </span>
          <span className="text-base sm:text-lg font-semibold tracking-tight">Twin Vibes</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#profiles" className="hover:text-gray-900">Explore</a>
          <a href="#features" className="hover:text-gray-900">Features</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Log in</button>
          <button className="px-4 py-2 text-sm font-medium rounded-full bg-gray-900 text-white hover:bg-black">Get the app</button>
        </div>
      </div>
    </header>
  )
}
