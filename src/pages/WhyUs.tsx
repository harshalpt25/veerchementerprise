import { Award, DollarSign, Package, Truck, Handshake, FlaskConical } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Consistent Quality',
      description: 'Recycled solvents tested with GC purity analysis',
      details: [
        'Advanced GC testing for every batch',
        'Stringent quality control protocols',
        'Consistent purity standards maintained',
        'Regular laboratory analysis and documentation'
      ]
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Cost-effective alternatives to fresh solvents',
      details: [
        'Market-competitive rates',
        'Volume-based pricing options',
        'Cost savings without compromising quality',
        'Transparent pricing structure'
      ]
    },
    {
      icon: Package,
      title: 'Flexible Packaging',
      description: 'As per customer requirement',
      details: [
        'Customizable packaging sizes',
        'Standard drums and containers available',
        'Bulk supply options',
        'Safe and compliant packaging materials'
      ]
    },
    {
      icon: Truck,
      title: 'On-Time Delivery',
      description: 'Strong logistics network across India',
      details: [
        'Pan-India distribution network',
        'Reliable transportation partnerships',
        'Order tracking and updates',
        'Timely delivery commitments'
      ]
    },
    {
      icon: Handshake,
      title: 'Customer-Centric',
      description: 'Long-term partnership approach',
      details: [
        'Dedicated customer support',
        'Flexible payment terms',
        'Technical consultation available',
        'Building lasting business relationships'
      ]
    },
    {
      icon: FlaskConical,
      title: 'Technical Expertise',
      description: 'In-depth knowledge of chemical solvents',
      details: [
        'Expert product recommendations',
        'Application-specific guidance',
        'Sample testing support',
        'Quality documentation provided'
      ]
    }
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      <section className="bg-gradient-to-r from-black to-gray-900 py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-yellow-400">Veerchem Enterprise</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner for quality chemical solvents with unmatched service and reliability
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-yellow-400 transition-all group"
                >
                  <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-black" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-yellow-400 font-medium mb-6">{reason.description}</p>

                  <ul className="space-y-3">
                    {reason.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-400 flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              Our Commitment to Excellence
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
                <p className="text-gray-300 font-medium">Quality Tested</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2">24/7</div>
                <p className="text-gray-300 font-medium">Customer Support</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2">Pan-India</div>
                <p className="text-gray-300 font-medium">Supply Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the Veerchem Difference
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Partner with us for reliable, cost-effective, and quality chemical solvent solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all">
              Request a Quote
            </button>
            <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
