import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">
              Gasthof Ritter St. Georg
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Experience traditional German hospitality in our charming hotel and restaurant. 
              A perfect blend of comfort, elegance, and authentic cuisine.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-gold" />
                <div>
                  <p>Hauptstraße 123</p>
                  <p>12345 Musterstadt</p>
                  <p>Germany</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold" />
                <span>+49 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold" />
                <span>info@ritter-stgeorg.de</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold">Opening Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 text-gold" />
                <div className="space-y-1">
                  <p><strong>Restaurant:</strong></p>
                  <p>Mon-Sun: 12:00 - 22:00</p>
                  <p><strong>Reception:</strong></p>
                  <p>24/7 Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link 
                to="/rooms" 
                className="block hover:text-gold transition-smooth"
              >
                Our Rooms
              </Link>
              <Link 
                to="/restaurant" 
                className="block hover:text-gold transition-smooth"
              >
                Restaurant Menu
              </Link>
              <Link 
                to="/events" 
                className="block hover:text-gold transition-smooth"
              >
                Events & Celebrations
              </Link>
              <Link 
                to="/gallery" 
                className="block hover:text-gold transition-smooth"
              >
                Photo Gallery
              </Link>
              <Link 
                to="/contact" 
                className="block hover:text-gold transition-smooth"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p>&copy; 2024 Gasthof Ritter St. Georg. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-gold transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/imprint" className="hover:text-gold transition-smooth">
                Imprint
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;