import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'nature', 'portrait', 'wedding', 'street'];

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      category: 'nature',
    },
    {
      url: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb',
      category: 'portrait',
    },
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      category: 'wedding',
    },
    {
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
      category: 'nature',
    },
    {
      url: 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44',
      category: 'street',
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
      category: 'wedding',
    },
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio Gallery</h2>
        
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9"
            >
              <img
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-lg font-semibold capitalize">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;