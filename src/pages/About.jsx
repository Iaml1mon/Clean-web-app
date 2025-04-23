const About = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for perfection in every cleaning task, ensuring your space sparkles every time.',
      icon: '⭐'
    },
    {
      title: 'Reliability',
      description: 'Count on us to show up on time and deliver consistent, high-quality results.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty in all our dealings.',
      icon: '🎯'
    },
    {
      title: 'Eco-Friendly',
      description: 'Using environmentally conscious cleaning products and methods.',
      icon: '🌱'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            About ClassyWash
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're more than just a cleaning service - we're your partner in maintaining a clean, healthy, and comfortable environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Our Story
            </h2>
            <div className="prose text-gray-600">
              <p className="mb-4">
                Founded in 2020, ClassyWash began with a simple mission: to provide exceptional cleaning services that make a real difference in people's lives. We understood that a clean space is more than just aesthetics - it's about creating a healthy, comfortable environment where people can thrive.
              </p>
              <p className="mb-4">
                What started as a small local operation has grown into a trusted cleaning service provider, thanks to our unwavering commitment to quality and customer satisfaction. Our team of dedicated professionals brings years of experience and a passion for excellence to every job.
              </p>
              <p>
                Today, we serve hundreds of satisfied customers, maintaining the same level of personalized service and attention to detail that we started with. Our success is built on the trust we've earned from our clients and the relationships we've built in our community.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Why Choose Us
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Experienced Team</h3>
                  <p className="text-gray-600">Our cleaning professionals are thoroughly trained and experienced.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Quality Guaranteed</h3>
                  <p className="text-gray-600">We're not satisfied until you're satisfied with our service.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Insured & Bonded</h3>
                  <p className="text-gray-600">Your property is fully protected while in our care.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Eco-Friendly Products</h3>
                  <p className="text-gray-600">We use environmentally safe cleaning products.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Ready to Experience the ClassyWash Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our growing family of satisfied customers and discover why we're the most trusted name in cleaning services.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 