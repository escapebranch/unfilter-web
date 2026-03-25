'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  icon: ReactNode;
  iconClassName: string;
};

const footerLinks: FooterLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/escapebranch/unfilter',
    external: true,
    iconClassName: 'text-steel-300',
    icon: (
      <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    label: 'Releases',
    href: 'https://github.com/escapebranch/unfilter/releases',
    external: true,
    iconClassName: 'text-cyan-muted',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    ),
  },
  {
    label: 'Privacy Policy',
    href: '/privacy',
    iconClassName: 'text-steel-300',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 3s7 3 7 8c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10 0-5 7-8 7-8z" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    label: 'Terms',
    href: '/terms',
    iconClassName: 'text-cyan-muted',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M7 3h8l4 4v14H7z" />
        <path d="M15 3v4h4" />
        <path d="M10 13h6" />
      </svg>
    ),
  },
  {
    label: 'Play Store',
    href: 'https://play.google.com/store/apps/details?id=com.escapebranch.unfilter',
    external: true,
    iconClassName: 'text-amber-muted',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="m3 2 12 10L3 22V2zm14.5 8.5 3.5 1.5-3.5 1.5-2.2-1.5 2.2-1.5z" />
      </svg>
    ),
  },
  {
    label: 'Issues',
    href: 'https://github.com/escapebranch/unfilter/issues',
    external: true,
    iconClassName: 'text-amber-muted',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5" />
        <circle cx="12" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'License',
    href: 'https://github.com/escapebranch/unfilter/blob/main/LICENSE',
    external: true,
    iconClassName: 'text-steel-300',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </svg>
    ),
  },
];

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
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-graphite-200">UnFilter</span>
            <span className="text-[10px] text-graphite-500">peel back the icon</span>
            <span className="text-[10px] text-graphite-500">see stack</span>
          </div>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer noopener' : undefined}
              className="group inline-flex items-center gap-2 rounded-full border border-graphite-800 bg-graphite-900/40 px-3 py-1.5 text-graphite-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-graphite-700 hover:bg-graphite-800/70 hover:text-graphite-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-400/40"
            >
              <span className={`transition-colors duration-200 ${link.iconClassName} group-hover:text-graphite-100`}>
                {link.icon}
              </span>
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
        </div>
        
        {/* Copyright */}
        <span className="text-xs text-graphite-600 tracking-wide">
          2026 Unfilter. MIT Licensed.
        </span>
      </div>
    </footer>
  );
};
