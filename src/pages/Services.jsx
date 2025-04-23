import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Regular Cleaning',
      description: 'Our comprehensive regular cleaning service keeps your home spotless and fresh. Perfect for maintaining a clean and healthy living environment.',
      features: [
        'Deep dusting and vacuuming',
        'Kitchen and bathroom sanitization',
        'Floor cleaning and mopping',
        'Surface wiping and disinfection',
        'Bed making and light organizing'
      ],
      icon: '🏠'
    },
    {
      title: 'Builders Cleaning',
      description: 'Post-construction cleanup service that removes all building debris, dust, and marks. Get your newly renovated space ready for use.',
      features: [
        'Construction dust removal',
        'Paint splash cleanup',
        'Window and frame cleaning',
        'Floor deep cleaning',
        'Fixture and fitting cleaning'
      ],
      icon: '🏗️'
    },
    {
      title: 'Pressure Washing',
      description: 'High-powered pressure washing service that removes tough dirt, grime, and stains from exterior surfaces.',
      features: [
        'Driveway and pathway cleaning',
        'Deck and patio restoration',
        'House exterior washing',
        'Fence and wall cleaning',
        'Mold and mildew removal'
      ],
      icon: '💦'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          We offer professional cleaning services tailored to your needs. Choose from our range of specialized cleaning solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 