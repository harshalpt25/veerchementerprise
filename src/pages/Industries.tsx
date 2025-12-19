import { Pill, Droplet, Palette, Layers, Printer, Factory } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Pill,
      name: 'Pharmaceutical Manufacturing',
      description: 'High-purity solvents for API synthesis, extraction processes, and laboratory applications',
      applications: ['API Synthesis', 'Extraction', 'Purification', 'Analytical Testing']
    },
    {
      icon: Droplet,
      name: 'Paints & Coatings',
      description: 'Quality solvents for formulation, thinning, and surface preparation applications',
      applications: ['Paint Thinning', 'Coating Formulation', 'Surface Cleaning', 'Viscosity Control']
    },
    {
      icon: Palette,
      name: 'Dyes & Pigments',
      description: 'Specialized solvents for dye dissolution, dispersion, and color formulation',
      applications: ['Dye Dissolution', 'Color Mixing', 'Pigment Dispersion', 'Textile Processing']
    },
    {
      icon: Layers,
      name: 'Adhesives & Resins',
      description: 'Reliable solvents for adhesive formulation and resin processing',
      applications: ['Adhesive Manufacturing', 'Resin Dilution', 'Viscosity Adjustment', 'Cleanup']
    },
    {
      icon: Printer,
      name: 'Printing Inks',
      description: 'Premium ink reducers and solvents for printing industry applications',
      applications: ['Ink Reduction', 'Viscosity Control', 'Equipment Cleaning', 'Formulation']
    },
    {
      icon: Factory,
      name: 'General Industrial Cleaning',
      description: 'Effective cleaning solvents for industrial equipment and surface degreasing',
      applications: ['Equipment Cleaning', 'Degreasing', 'Parts Washing', 'Surface Preparation']
    }
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      <section className="bg-gradient-to-r from-black to-gray-900 py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Industries <span className="text-yellow-400">We Serve</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Providing chemical solvent solutions across diverse industrial sectors throughout India
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-yellow-400 transition-all group"
                >
                  <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-black" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>

                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-sm font-semibold text-yellow-400 mb-3">Key Applications:</p>
                    <ul className="space-y-2">
                      {industry.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-gray-400 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Industry Not Listed?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            We work with various industrial sectors. Contact us to discuss your specific solvent requirements.
          </p>
          <div className="inline-block bg-gray-800 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg mb-4">
              Custom solutions available for specialized industrial applications
            </p>
            <p className="text-yellow-400 font-semibold text-xl">
              Let's discuss your requirements
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
