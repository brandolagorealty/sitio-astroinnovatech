import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SalesLetter from './components/SalesLetter';
import HealthSalesLetter from './components/HealthSalesLetter';
import RetailSalesLetter from './components/RetailSalesLetter';
import HomeSalesLetter from './components/HomeSalesLetter';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Simple Router
  const renderRoute = () => {
    switch (currentPath) {
      case '/control-total': return <SalesLetter />;
      case '/salud-critica': return <HealthSalesLetter />;
      case '/facturacion-impecable': return <RetailSalesLetter />;
      case '/residencia-elite': return <HomeSalesLetter />;
      default: return (
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <Features />
            <Pricing />
            <Contact />
          </main>
          <Footer />
        </div>
      );
    }
  };

  return renderRoute();
};

export default App;
