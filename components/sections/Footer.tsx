'use client';

import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="py-12 lg:py-16 px-6 sm:px-8 lg:px-16 border-t border-graphite-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-graphite-800 flex items-center justify-center p-2">
            <Image
              src="/images/black-unfilter-bg-white.png"
              alt="Unfilter Logo"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-lg font-semibold text-graphite-200">Unfilter</span>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap gap-6 lg:gap-8 text-sm">
          <a href="https://github.com/your-repo/unfilter" className="text-graphite-400 hover:text-graphite-200 transition-colors">
            GitHub
          </a>
          <a href="#" className="text-graphite-400 hover:text-graphite-200 transition-colors">
            Documentation
          </a>
          <a href="#" className="text-graphite-400 hover:text-graphite-200 transition-colors">
            Releases
          </a>
          <a href="/privacy" className="text-graphite-400 hover:text-graphite-200 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-graphite-400 hover:text-graphite-200 transition-colors">
            Play Store
          </a>
          <a href="#" className="text-graphite-400 hover:text-graphite-200 transition-colors">
            Issues
          </a>
          <a href="#" className="text-graphite-400 hover:text-graphite-200 transition-colors">
            License
          </a>
        </div>
        
        {/* Copyright */}
        <span className="text-xs text-graphite-600 tracking-wide">
          2024 Unfilter. MIT Licensed.
        </span>
      </div>
    </footer>
  );
};
