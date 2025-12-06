import React from 'react';
import Link from '@/lib/router-shim';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">
              SpiceCraft<span className="text-primary">.</span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Experience the authentic taste of traditional spices blended with modern culinary artistry. Fresh ingredients, served with love.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/menu" className="text-gray-300 hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span className="text-gray-300">123 Culinary Avenue, Food District, Mumbai, 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="text-gray-300">hello@spicecraft.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="text-primary shrink-0 mt-1" size={18} />
                <div>
                  <span className="block text-white font-medium">Mon - Fri</span>
                  <span className="text-gray-400 text-sm">11:00 AM - 11:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-primary shrink-0 mt-1" size={18} />
                <div>
                  <span className="block text-white font-medium">Sat - Sun</span>
                  <span className="text-gray-400 text-sm">11:00 AM - 12:00 AM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} SpiceCraft Kitchen. All rights reserved.
          </p>
          <Link href="/admin" className="text-gray-500 hover:text-primary text-sm flex items-center gap-1 transition-colors">
            <Shield size={14} /> Owner Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;