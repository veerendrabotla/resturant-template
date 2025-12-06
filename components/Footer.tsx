import React from 'react';
import Link from '@/lib/router-shim';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-black">
              SpiceCraft<span className="text-primary">.</span>
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 font-medium">
              Experience the authentic taste of traditional spices blended with modern culinary artistry. Fresh ingredients, served with love.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-black">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-primary transition-colors font-medium">Home</Link></li>
              <li><Link href="/menu" className="text-gray-600 hover:text-primary transition-colors font-medium">Our Menu</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link href="/gallery" className="text-gray-600 hover:text-primary transition-colors font-medium">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-black">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span className="text-gray-700 font-medium">123 Culinary Avenue, Food District, Mumbai, 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-gray-700 font-medium">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="text-gray-700 font-medium">hello@spicecraft.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-black">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="text-primary shrink-0 mt-1" size={18} />
                <div>
                  <span className="block text-gray-900 font-bold">Mon - Fri</span>
                  <span className="text-gray-600 text-sm font-medium">11:00 AM - 11:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-primary shrink-0 mt-1" size={18} />
                <div>
                  <span className="block text-gray-900 font-bold">Sat - Sun</span>
                  <span className="text-gray-600 text-sm font-medium">11:00 AM - 12:00 AM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left font-medium">
            © {new Date().getFullYear()} SpiceCraft Kitchen. All rights reserved.
          </p>
          <Link href="/admin" className="text-gray-500 hover:text-primary text-sm flex items-center gap-1 transition-colors font-medium">
            <Shield size={14} /> Owner Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;