import { Beaker, Package, CheckCircle } from 'lucide-react';

interface ProductsProps {
  onNavigate: (page: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  const products = [
    { name: 'Isopropyl Alcohol (IPA)', category: 'Alcohols' },
    { name: 'Acetone', category: 'Ketones' },
    { name: 'Toluene', category: 'Aromatic Hydrocarbons' },
    { name: 'Ethyl Acetate', category: 'Esters' },
    { name: 'Dimethylformamide (DMF)', category: 'Amides' },
    { name: 'Tetrahydrofuran (THF)', category: 'Ethers' },
    { name: 'Acetonitrile (ACN)', category: 'Nitriles' },
    { name: 'Paint Thinner / Mix Solvent', category: 'Thinners' },
    { name: 'Ink Reducer', category: 'Specialty Solvents' },
    { name: 'NBA', category: 'Specialty Solvents' },
    { name: 'MIBK', category: 'Ketones' },
    { name: 'PU Thinner (Sample-Based Manufacturing)', category: 'Thinners' },
    { name: 'Propionic Acid', category: 'Acids' },
    { name: 'Acetic Acid', category: 'Acids' },
    { name: 'Mix Xylene', category: 'Aromatic Hydrocarbons' },
    { name: 'Ortho Xylene', category: 'Aromatic Hydrocarbons' },
    { name: 'N Heptane', category: 'Aliphatic Hydrocarbons' },
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      <section className="bg-gradient-to-r from-black to-gray-900 py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Products</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive range of recycled and pure industrial solvents for diverse applications
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg text-center">
              <Beaker className="text-yellow-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">GC Tested</h3>
              <p className="text-gray-400">Quality assured through purity analysis</p>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg text-center">
              <Package className="text-yellow-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Flexible Packaging</h3>
              <p className="text-gray-400">Available as per customer requirement</p>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg text-center">
              <CheckCircle className="text-yellow-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Consistent Supply</h3>
              <p className="text-gray-400">Reliable inventory management</p>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-black">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-yellow-400 uppercase tracking-wider">
                      Product Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-yellow-400 uppercase tracking-wider">
                      Category
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {products.map((product, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-700 transition-colors"
                    >
                      <td className="px-6 py-4 text-white font-medium">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 text-gray-400">
                        {product.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-yellow-400 border-l-4 border-yellow-600 p-6 rounded-r-lg">
            <p className="text-black font-semibold text-lg">
              Packaging options available as per customer requirement
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg mb-6">
              Need a specific solvent or custom formulation?
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
