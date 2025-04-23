import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ClassyWash</h3>
            <p className="text-blue-200">
              Professional cleaning services for homes and businesses. Quality and reliability you can trust.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-blue-200 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-blue-200">Regular Cleaning</li>
              <li className="text-blue-200">Builders Cleaning</li>
              <li className="text-blue-200">Pressure Washing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-blue-200">📱 (555) 123-4567</li>
              <li className="text-blue-200">📧 info@classywash.com</li>
              <li className="text-blue-200">📍 123 Clean Street</li>
              <li className="text-blue-200">Monday - Sunday: 8am - 6pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} ClassyWash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 