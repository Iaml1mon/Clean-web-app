const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'ClassyWash has been cleaning my home for over a year now, and I couldn\'t be happier with their service. The team is always professional, thorough, and pays attention to every detail.',
      image: '👩',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'As a restaurant owner, cleanliness is crucial. ClassyWash provides exceptional cleaning services that help maintain our high standards. Their team is reliable and thorough.',
      image: '👨',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Real Estate Agent',
      content: 'I regularly recommend ClassyWash to my clients for move-in/move-out cleaning. They consistently deliver outstanding results that exceed expectations.',
      image: '👩',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Property Manager',
      content: 'Managing multiple properties requires a reliable cleaning service. ClassyWash has proven to be an excellent partner, delivering consistent quality across all our properties.',
      image: '👨',
      rating: 5
    },
    {
      name: 'Lisa Anderson',
      role: 'Homeowner',
      content: 'The attention to detail is amazing! They clean areas I didn\'t even think about. My home has never looked better. Highly recommend their deep cleaning service.',
      image: '👩',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Office Manager',
      content: 'Our office space requires regular maintenance, and ClassyWash has been exceptional. Their team is professional, efficient, and always goes the extra mile.',
      image: '👨',
      rating: 5
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Ready to Experience Our Service?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our satisfied customers and discover the ClassyWash difference.
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book a Cleaning
            </a>
            <a
              href="/services"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 