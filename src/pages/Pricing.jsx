import { Link } from 'react-router-dom';

const Pricing = () => {
  const packages = [
    {
      name: 'Basic Clean',
      price: 129,
      frequency: 'per clean',
      features: [
        'Up to 2 bedrooms',
        'Living room & dining area',
        '1 bathroom',
        'Kitchen cleaning',
        'Dusting & vacuuming',
        'Basic sanitization'
      ],
      recommended: false
    },
    {
      name: 'Premium Clean',
      price: 199,
      frequency: 'per clean',
      features: [
        'Up to 4 bedrooms',
        'All living areas',
        'Up to 2 bathrooms',
        'Deep kitchen cleaning',
        'Window cleaning',
        'Advanced sanitization',
        'Carpet steam cleaning'
      ],
      recommended: true
    },
    {
      name: 'Deep Clean',
      price: 299,
      frequency: 'per clean',
      features: [
        'Any house size',
        'All rooms and areas',
        'All bathrooms',
        'Deep cleaning all surfaces',
        'Window & blind cleaning',
        'Premium sanitization',
        'Carpet & upholstery cleaning',
        'Outdoor area cleaning'
      ],
      recommended: false
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Choose the perfect cleaning package for your needs. All prices include equipment and cleaning supplies.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden ${
                pkg.recommended
                  ? 'bg-blue-600 text-white transform scale-105 shadow-xl'
                  : 'bg-white text-gray-900 shadow-lg'
              }`}
            >
              <div className="p-8">
                {pkg.recommended && (
                  <div className="text-blue-200 text-sm font-semibold mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-4 ${pkg.recommended ? 'text-white' : 'text-blue-900'}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">${pkg.price}</span>
                  <span className={`ml-2 ${pkg.recommended ? 'text-blue-200' : 'text-gray-600'}`}>
                    {pkg.frequency}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className={`mr-2 ${pkg.recommended ? 'text-blue-200' : 'text-blue-600'}`}>
                        ✓
                      </span>
                      <span className={pkg.recommended ? 'text-blue-100' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    pkg.recommended
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Need a custom cleaning solution? Contact us for a personalized quote.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 