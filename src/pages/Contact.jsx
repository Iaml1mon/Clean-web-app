const Contact = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Get in touch with us for a free quote or any questions about our services.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="regular">Regular Cleaning</option>
                  <option value="builders">Builders Cleaning</option>
                  <option value="pressure">Pressure Washing</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  placeholder="Tell us about your cleaning needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Address</h3>
                <p className="text-gray-600">123 Clean Street<br />City, State 12345</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Email</h3>
                <p className="text-gray-600">info@classywash.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 8am - 6pm<br />
                  Saturday: 9am - 4pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 