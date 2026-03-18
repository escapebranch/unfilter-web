'use client';

import { Layers } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 lg:py-16 px-6 sm:px-8 lg:px-16 border-t border-graphite-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-graphite-800 flex items-center justify-center">
            <Layers className="w-5 h-5 text-steel-400" />
          </div>
          <span className="text-lg font-semibold text-graphite-200">Unfilter</span>
        </div>
        
        {/* Links */}
        <div className="flex items-center gap-8 lg:gap-10 text-sm text-graphite-500">
          <a href="#" className="hover:text-graphite-300 transition-colors">GitHub</a>
          <a href="#" className="hover:text-graphite-300 transition-colors">Play Store</a>
          <a href="#" className="hover:text-graphite-300 transition-colors">Issues</a>
          <a href="#" className="hover:text-graphite-300 transition-colors">License</a>
        </div>
        
        {/* Copyright */}
        <span className="text-xs text-graphite-600 tracking-wide">
          © 2024 Unfilter. MIT Licensed.
        </span>
      </div>
    </footer>
  );
};
