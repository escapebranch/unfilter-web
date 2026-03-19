"use client";

import React, { useEffect, useState } from 'react';

interface Props {
  repo?: string;
  className?: string;
}

function formatNumber(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
  return String(n);
}

export const GithubStars = ({ repo = 'escapebranch/unfilter', className = '' }: Props) => {
  const [stars, setStars] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const url = `https://api.github.com/repos/${repo}`;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`Status ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (!mounted) return;
        if (typeof data.stargazers_count === 'number') setStars(data.stargazers_count);
        else setError('n/a');
      })
      .catch(() => {
        if (!mounted) return;
        setError('n/a');
      });

    return () => {
      mounted = false;
    };
  }, [repo]);

  return (
    <a
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noreferrer noopener"
      className={`inline-flex items-center gap-2 text-sm text-graphite-300 bg-graphite-900/40 border border-graphite-800 px-3 py-1 rounded-full ${className}`}
    >
      <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" className="text-steel-400">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      <span className="font-medium text-graphite-100">{stars === null ? (error ? 'n/a' : '...') : formatNumber(stars)}</span>
    </a>
  );
};

export default GithubStars;
