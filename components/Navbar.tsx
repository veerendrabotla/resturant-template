'use client';

import React, { useState } from 'react';
import Link, { usePathname } from '@/lib/router-shim';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Order', href: '/order' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-serif font-bold text-secondary group-hover:text-primary transition-colors">
              SpiceCraft
              <span className="text-primary group-hover:text-secondary transition-colors">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary font-bold" : "text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/order"
              className="bg-primary hover:bg-orange-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 text-sm"
            >
              Order Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg animate-fade-in">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-6 py-3 text-base font-medium transition-colors hover:bg-gray-50",
                  pathname === link.href ? "text-primary border-l-4 border-primary" : "text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 py-4 mt-2 border-t border-gray-100">
              <Link
                href="/order"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-bold w-full"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;