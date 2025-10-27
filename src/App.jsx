import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProfileShowcase from './components/ProfileShowcase'
import FeaturesGrid from './components/FeaturesGrid'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProfileShowcase />
        <FeaturesGrid />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-gray-600">
          <span>© {new Date().getFullYear()} VibeMeet</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
