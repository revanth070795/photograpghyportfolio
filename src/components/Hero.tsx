import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Capturing Life's Beautiful Moments</h1>
        <p className="text-xl md:text-2xl mb-8">Professional Photography & Videography</p>
        <a
          href="#gallery"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          View Gallery
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#gallery"> <ChevronDown className="w-8 h-8 text-white" /> </a>
      </div>
    </section>
  );
};

export default Hero;