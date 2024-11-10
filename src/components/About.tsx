import React from 'react';
import { Camera, Film, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-8">
              With over a decade of experience in photography and videography, I've had the privilege
              of capturing countless precious moments and telling compelling visual stories. My passion
              lies in finding beauty in every frame and creating timeless memories for my clients.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Camera className="w-6 h-6 text-gray-900 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Photography Excellence</h3>
                  <p className="text-gray-600">Specializing in portrait, wedding, and landscape photography</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Film className="w-6 h-6 text-gray-900 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Cinematic Videography</h3>
                  <p className="text-gray-600">Creating compelling visual stories through motion pictures</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Award className="w-6 h-6 text-gray-900 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Award Winning</h3>
                  <p className="text-gray-600">Recognized for exceptional creativity and technical expertise</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
                alt="Photographer at work"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-900">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;