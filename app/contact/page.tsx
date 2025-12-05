import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pb-20 pt-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Contact Us" subtitle="Get in Touch" center />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Culinary Avenue, Food District,<br />
                    Mumbai, Maharashtra, 400001
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-1">+91 98765 43210</p>
                  <p className="text-gray-500 text-sm">Mon-Sun: 11am - 11pm</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Email Us</h3>
                  <p className="text-gray-600">hello@spicecraft.com</p>
                  <p className="text-gray-600">catering@spicecraft.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Working Hours</h3>
                  <div className="grid grid-cols-2 gap-x-8 text-gray-600">
                    <span>Monday - Friday</span>
                    <span>11:00 AM - 11:00 PM</span>
                    <span>Saturday - Sunday</span>
                    <span>11:00 AM - 12:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.732410298813!2d72.8255!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1626343564996!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={true}
              loading="lazy"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}