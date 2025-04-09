
import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { metadata } = siteData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-psdj-charcoal text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <h2 className="font-kessler text-3xl">PSDJ</h2>
              <p className="text-xs uppercase tracking-widest text-psdj-accent mt-1">Interior Architecture</p>
            </div>
            <p className="text-sm text-gray-300 mb-6 max-w-xs">
              Award-winning interior architecture for high-end residential and commercial spaces.
            </p>
            <div className="flex space-x-4">
              <a 
                href={metadata.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-psdj-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={metadata.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-psdj-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Site Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-psdj-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-300 hover:text-psdj-accent transition-colors">Our Work</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-psdj-accent transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-psdj-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-psdj-accent" />
                <span className="text-gray-300">{metadata.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-psdj-accent" />
                <a href={`tel:${metadata.contact.phone}`} className="text-gray-300 hover:text-psdj-accent transition-colors">
                  {metadata.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-psdj-accent" />
                <a href={`mailto:${metadata.contact.email}`} className="text-gray-300 hover:text-psdj-accent transition-colors">
                  {metadata.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for the latest projects and design inspiration.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 text-white px-4 py-2 focus:outline-none flex-grow"
                aria-label="Email for newsletter"
              />
              <button
                type="button"
                className="bg-psdj-accent px-4 py-2 text-white font-medium hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} PSDJ Interior Architecture. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-psdj-accent transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-psdj-accent transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-psdj-accent transition-colors">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
