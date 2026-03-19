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

export const GithubStarChip = ({ repo = 'escapebranch/unfilter', className = '' }: Props) => {
  const [stars, setStars] = useState<number | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    fetch(`https://api.github.com/repos/${repo}`)
      .then((r) => {
        if (!r.ok) throw new Error('bad');
        return r.json();
      })
      .then((data) => {
        if (!mounted) return;
        if (typeof data.stargazers_count === 'number') setStars(data.stargazers_count);
        else setError(true);
      })
      .catch(() => {
        if (!mounted) return;
        setError(true);
      });

    return () => {
      mounted = false;
    };
  }, [repo]);

  return (
    <span className={`inline-flex items-center gap-2 text-sm text-graphite-200 bg-graphite-900/40 border border-graphite-800 px-2 py-1 rounded-full ${className}`}>
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="text-steel-300">
        <path d="M12 .587l3.668 7.431L24 9.587l-6 5.847L19.335 24 12 20.011 4.665 24 6 15.434 0 9.587l8.332-1.569z" />
      </svg>
      <span className="font-medium">{stars === null ? (error ? 'n/a' : '...') : formatNumber(stars)}</span>
    </span>
  );
};

export default GithubStarChip;
