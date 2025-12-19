import { Building2, Target, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <section className="bg-gradient-to-r from-black to-gray-900 py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="text-yellow-400">Veerchem Enterprise</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Leading chemical solvent trading and supply company based in Ahmedabad, Gujarat
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Veerchem Enterprise is a chemical solvent trading and supply company based in Ahmedabad,
                  specializing in recycled and pure industrial solvents.
                </p>
                <p>
                  We are committed to delivering consistent quality, competitive pricing, and reliable logistics
                  support across India. Our expertise lies in providing cost-effective alternatives without
                  compromising on quality standards.
                </p>
                <p>
                  With a customer-centric approach and strong industry relationships, we have established
                  ourselves as a trusted partner for businesses seeking reliable chemical solvent solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-yellow-400 transition-all">
                <Building2 className="text-yellow-400 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">Based in Ahmedabad</h3>
                <p className="text-gray-400">Strategic location for pan-India distribution</p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-yellow-400 transition-all">
                <Target className="text-yellow-400 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">Specialized Focus</h3>
                <p className="text-gray-400">Recycled & pure industrial solvents</p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-yellow-400 transition-all">
                <Award className="text-yellow-400 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">Quality First</h3>
                <p className="text-gray-400">GC purity tested products</p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-yellow-400 transition-all">
                <Users className="text-yellow-400 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">Customer-Centric</h3>
                <p className="text-gray-400">Long-term partnership approach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-black">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-gray-400">
                Transparent business practices and honest communication with every client
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-black">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality</h3>
              <p className="text-gray-400">
                Rigorous testing and quality control to ensure consistent product standards
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-black">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Reliability</h3>
              <p className="text-gray-400">
                Dependable supply chain and on-time delivery across India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
