import { useState } from 'react'
import Cursor        from './components/Cursor'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import FeaturedWorks from './components/FeaturedWorks'
import Gallery       from './components/Gallery'
import About         from './components/About'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import Lightbox      from './components/Lightbox'

export default function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null)

  return (
    <>
      {/* Custom cursor (desktop only, hidden on mobile via CSS) */}
      <Cursor />

      {/* Sticky navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <FeaturedWorks onSelect={setSelectedArtwork} />
        <Gallery       onSelect={setSelectedArtwork} />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Lightbox overlay — receives the currently selected artwork */}
      <Lightbox
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </>
  )
}
