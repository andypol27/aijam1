import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { ComparisonTable } from './components/ComparisonTable'
import { ReviewsSection } from './components/ReviewsSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-background text-on-surface">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ComparisonTable />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
