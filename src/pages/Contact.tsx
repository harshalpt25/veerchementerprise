import { Mail, Phone, MapPin, User, MessageSquare, Building2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-950 min-h-screen">
      <section className="bg-gradient-to-r from-black to-gray-900 py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Contact <span className="text-yellow-400">Us</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Get in touch for quotes, inquiries, or partnership opportunities
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-400 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <User className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Contact Person</h3>
                      <p className="text-gray-300 text-lg">Harshal Patel</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-400 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone / WhatsApp</h3>
                      <a href="tel:+918849424398" className="text-yellow-400 hover:text-yellow-300 text-lg">
                        +91-8849424398
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-400 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <a href="mailto:info@veerchementerprise.in" className="text-yellow-400 hover:text-yellow-300 block mb-1">
                        info@veerchementerprise.in
                      </a>
                      <a href="mailto:harshalpt25@gmail.com" className="text-gray-400 hover:text-yellow-400 text-sm">
                        harshalpt25@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-400 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Office Address</h3>
                      <p className="text-gray-300 leading-relaxed">
                        B-503, Amrapali Lakeview,<br />
                        Vastrapur Lake,<br />
                        Ahmedabad, Gujarat, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

              <form
  action="https://formsubmit.co/info@veerchementerprise.in"
  method="POST"
  className="bg-gray-800 border border-gray-700 rounded-lg p-8"
>

                {submitted && (
                  <div className="bg-yellow-400 text-black p-4 rounded-lg mb-6 font-semibold">
                    Thank you! We'll get back to you soon.
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all"
                      placeholder="What is your inquiry about?"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  {/* FormSubmit hidden fields */}
                  <input type="hidden" name="_subject" value="New Inquiry from Veerchem Website" />
                  <input type="hidden" name="_cc" value="harshalpt25@gmail.com" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="thank-you.html" />
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={20} />
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="text-yellow-400 mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            Veerchem Enterprise
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Your trusted partner for chemical solvent solutions across India
          </p>
          <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-6 py-3">
            <MapPin className="text-yellow-400" size={20} />
            <span className="text-gray-300">Based in Ahmedabad, Serving Pan-India</span>
          </div>
        </div>
      </section>
    </div>
  );
}
