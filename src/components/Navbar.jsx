import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            ClassyWash
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link to="/services" className="hover:text-blue-200 transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="hover:text-blue-200 transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">
              About
            </Link>
            <Link to="/testimonials" className="hover:text-blue-200 transition-colors">
              Testimonials
            </Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </div>
          
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 