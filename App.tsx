
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Gallery from './components/Gallery.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <Gallery />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;