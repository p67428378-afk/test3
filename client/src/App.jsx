import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreditCardOffersPage from './pages/CreditCardOffersPage';
import ApplicationPage from './pages/ApplicationPage';

function App() {
  return (
    <div className="bg-surface-container-low text-on-surface min-h-screen">
      <header className="h-navbar-height w-full sticky top-0 z-50 bg-surface border-b border-outline-variant shadow-sm">
        <nav className="flex justify-between items-center px-margin-desktop max-w-container-max-width mx-auto h-full">
          <div className="font-headline-md text-headline-md text-primary cursor-pointer">Golden Bank</div>
          <div className="hidden md:flex items-center gap-stack-lg">
            <a className="font-body-md text-body-md text-primary border-b-2 border-primary pb-1 transition-colors" href="#">Credit Cards</a>
            <a className="font-body-md text-body-md text-on-secondary-container hover:text-primary-container transition-colors" href="#">Help</a>
          </div>
          <button className="px-6 py-2 bg-primary text-on-primary rounded-full font-label-md hover:opacity-90 transition-opacity active:opacity-80">
            Login
          </button>
        </nav>
      </header>
      <main className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern pointer-events-none"></div>
        <Routes>
          <Route path="/" element={<CreditCardOffersPage />} />
          <Route path="/apply/:cardId" element={<ApplicationPage />} />
        </Routes>
      </main>
      <footer className="w-full py-stack-lg bg-surface-container-low border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-container-max-width mx-auto gap-stack-md">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-headline-sm text-headline-sm text-secondary">Golden Bank</div>
            <p className="font-body-sm text-body-sm text-secondary opacity-80">© 2024 Golden Bank. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="font-body-sm text-body-sm text-secondary hover:underline decoration-primary transition-all duration-200" href="#">Privacy Policy</a>
            <a className="font-body-sm text-body-sm text-secondary hover:underline decoration-primary transition-all duration-200" href="#">Terms of Service</a>
            <a className="font-body-sm text-body-sm text-secondary hover:underline decoration-primary transition-all duration-200" href="#">Security</a>
            <a className="font-body-sm text-body-sm text-secondary hover:underline decoration-primary transition-all duration-200" href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
