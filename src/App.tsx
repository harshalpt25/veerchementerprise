import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Industries from './pages/Industries';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Veerchem Enterprise - Chemical Solvent Trading & Supply',
      about: 'About Us - Veerchem Enterprise',
      products: 'Our Products - Veerchem Enterprise',
      industries: 'Industries We Serve - Veerchem Enterprise',
      'why-us': 'Why Choose Us - Veerchem Enterprise',
      contact: 'Contact Us - Veerchem Enterprise',
    };

    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products onNavigate={setCurrentPage} />;
      case 'industries':
        return <Industries />;
      case 'why-us':
        return <WhyUs />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
