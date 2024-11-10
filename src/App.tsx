import React, { useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-gray-900" />
              <span className="font-bold text-xl">LENS MASTER</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-gray-600">Home</a>
              <a href="#gallery" className="text-gray-900 hover:text-gray-600">Gallery</a>
              <a href="#about" className="text-gray-900 hover:text-gray-600">About</a>
              <a href="#contact" className="text-gray-900 hover:text-gray-600">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-gray-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;