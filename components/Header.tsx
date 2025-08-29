
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="text-2xl font-bold text-white">Spark</span>
          </div>
          <nav>
            <button className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-colors duration-300 text-sm font-semibold">
              Sign In
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
