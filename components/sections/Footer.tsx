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
          <div className="flex items-center gap-3">
            <a href="https://github.com/escapebranch/unfilter" className="text-graphite-400 hover:text-graphite-200 transition-colors">
              GitHub
            </a>
            <div className="hidden sm:block">
              <a href="https://github.com/escapebranch/unfilter" target="_blank" rel="noreferrer noopener" className="inline-block -mt-0.5">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-steel-400">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </div>
          <a href="https://github.com/escapebranch/unfilter/releases" className="text-graphite-400 hover:text-graphite-200 transition-colors">
            Releases
          </a>
          <a href="/privacy" className="text-graphite-400 hover:text-graphite-200 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-graphite-400 hover:text-graphite-200 transition-colors">
            Terms
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.escapebranch.unfilter" target="_blank" rel="noreferrer noopener" className="flex items-center gap-2 text-graphite-400 hover:text-graphite-200 transition-colors">
            <span>Play Store</span>
          </a>
          <a href="https://github.com/escapebranch/unfilter/issues" className="text-graphite-400 hover:text-graphite-200 transition-colors">
            Issues
          </a>
          <a href="https://github.com/escapebranch/unfilter/blob/main/LICENSE" className="text-graphite-400 hover:text-graphite-200 transition-colors">
            License
          </a>
        </div>
        
        {/* Copyright */}
        <span className="text-xs text-graphite-600 tracking-wide">
          2026 Unfilter. MIT Licensed.
        </span>
      </div>
    </footer>
  );
};
