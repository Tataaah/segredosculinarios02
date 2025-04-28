import React from 'react';
import Countdown from './components/Countdown';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PurchaseNotification from './components/PurchaseNotification';

function App() {
  return (
    <div className="font-sans">
      <Countdown initialMinutes={30} initialSeconds={0} />
      <Hero />
      <Benefits />
      <Gallery />
      <Pricing />
      <Guarantee />
      <Testimonials />
      <FAQ />
      <Footer />
      <PurchaseNotification />
    </div>
  );
}

export default App;