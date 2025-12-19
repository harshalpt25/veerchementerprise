import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/veerchem_enterprise_final_one_.png"
                alt="Veerchem Enterprise"
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">VEERCHEM ENTERPRISE</span>
                <span className="text-yellow-400 text-xs">CHEMICAL SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed max-w-md">
              Leading chemical solvent trading company specializing in recycled and pure industrial solvents
              across India.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              <MapPin size={16} />
              <span className="text-sm font-medium">Pan-India Supply Network</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'products', 'industries', 'why-us', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-yellow-400 transition-colors capitalize"
                  >
                    {page === 'why-us' ? 'Why Choose Us' : page.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Phone size={18} className="mt-1 flex-shrink-0 text-yellow-400" />
                <a href="tel:+918849424398" className="hover:text-yellow-400 transition-colors">
                  +91-8849424398
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Mail size={18} className="mt-1 flex-shrink-0 text-yellow-400" />
                <div className="flex flex-col">
                  <a href="mailto:info@veerchementerprise.in" className="hover:text-yellow-400 transition-colors">
                    info@veerchementerprise.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-yellow-400" />
                <span className="text-sm">
                  Ahmedabad, Gujarat, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Veerchem Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
