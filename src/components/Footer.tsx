import React from 'react';
import { Instagram, Facebook, Youtube, Mail, MessageCircleMore } from 'lucide-react';
import { emailId, facebookLink, instagramId, phoneNumber, youtubeChannel } from '../constant';

const Footer = () => {
  

  const sendMessage = () => {
    const url = encodeURI(`https://wa.me/${phoneNumber.replace(' ','')}?text=Hi, I would like to know more info about this page.`);
    window.open(url, '_blank');
  }

  const redirectToInstagram = () => {
    const url = encodeURI(`https://instagram.com/${instagramId}`);
    window.open(url, '_blank');
  }

  const redirectToFacebook = () => {
    const url = encodeURI(facebookLink);
    window.open(url, '_blank');
  }

  const redirectToYouTube = () => {
    const url = encodeURI(youtubeChannel);
    window.open(url, '_blank');
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">LENS MASTER</h3>
            <p className="text-gray-400">
              Capturing life's precious moments through the lens of creativity and passion.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a onClick={sendMessage} title='Reach us on Whatsapp' className="text-gray-400 hover:text-white">
                <MessageCircleMore className="w-6 h-6" />
              </a>
              <a title='Checkout our Instagram Profile' className="text-gray-400 hover:text-white">
                <Instagram onClick={redirectToInstagram} className="w-6 h-6" />
              </a>
              <a title='Checkout our Instagram Profile' className="text-gray-400 hover:text-white">
                <Facebook onClick={redirectToFacebook} className="w-6 h-6" />
              </a>
              <a title='Checkout our Youtube Channel' className="text-gray-400 hover:text-white">
                <Youtube onClick={redirectToYouTube} className="w-6 h-6" />
              </a>
              <a href={`mailto:${emailId}`} title='Send us an Email' className="text-gray-400 hover:text-white">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LENS MASTER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;