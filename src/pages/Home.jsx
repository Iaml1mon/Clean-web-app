import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-20 py-10">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-blue-600/10 z-0"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-blue-900 mb-6">
              Professional Cleaning Services for Your Home
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Experience the difference with ClassyWash. We deliver spotless results and exceptional service, every time.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Book a Cleaning
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Why Choose ClassyWash?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-blue-600 text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-600">
              Our professional team delivers exceptional cleaning results using premium products and techniques.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-blue-600 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3">Trusted Service</h3>
            <p className="text-gray-600">
              Fully insured and background-checked professionals you can trust in your home.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-blue-600 text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-3">100% Satisfaction</h3>
            <p className="text-gray-600">
              We're not happy unless you're happy. Satisfaction guaranteed on every clean.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for a Cleaner Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your first cleaning service today and experience the ClassyWash difference.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 