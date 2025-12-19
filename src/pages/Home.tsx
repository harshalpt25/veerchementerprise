import { ArrowRight, MapPin, Truck, Shield, TrendingUp } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-gray-950">
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(250, 204, 21) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Strength in Every{' '}
              <span className="text-yellow-400">Molecule</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Reliable Source for Recycled & Pure Solvents Across India
            </p>
            <p className="text-lg text-gray-400 mb-10">
              Premium chemical solutions delivered with precision and consistency
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="group bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all flex items-center gap-2 shadow-lg hover:shadow-yellow-400/50"
              >
                View Products
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="group bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all"
              >
                Get Quote
              </button>
            </div>

            <div className="mt-16 flex items-center justify-center gap-2 text-yellow-400">
              <MapPin size={24} />
              <span className="text-lg font-medium">Pan-India Supply Network</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-yellow-400 transition-all group">
              <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Quality Assured</h3>
              <p className="text-gray-400">
                GC purity analysis for all recycled solvents ensuring consistent quality standards
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-yellow-400 transition-all group">
              <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Reliable Delivery</h3>
              <p className="text-gray-400">
                Strong logistics network ensuring on-time delivery across all regions of India
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-yellow-400 transition-all group">
              <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Cost-Effective</h3>
              <p className="text-gray-400">
                Competitive pricing with flexible packaging options tailored to your requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Trusted by Industries Across India
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Serving pharmaceutical, paints, dyes, adhesives, printing, and industrial sectors with excellence
          </p>
          <button
            onClick={() => onNavigate('industries')}
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all inline-flex items-center gap-2"
          >
            Explore Industries We Serve
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
