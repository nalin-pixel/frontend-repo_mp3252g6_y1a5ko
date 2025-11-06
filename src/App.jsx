import React from 'react';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0c10] text-white antialiased selection:bg-blue-500/30 selection:text-white">
      <Hero />
      <Plans />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
