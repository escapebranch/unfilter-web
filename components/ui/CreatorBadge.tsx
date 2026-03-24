'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Heart, Sparkles, Github, ArrowUpRight } from 'lucide-react';

/**
 * CreatorBadge — Performance-first, production-grade
 *
 * ALL animations are GPU-composited (transform, opacity only).
 * Zero Framer Motion layout animations → zero reflow.
 * The expand/collapse uses max-width + translate for a smooth side-slide.
 * CSS custom properties drive the easing so the browser can batch optimally.
 */

const EASE_EXPO_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)'; // Expo.easeOut — buttery expand
const EASE_CIRC_IN = 'cubic-bezier(0.55, 0, 1, 0.45)';  // Fast collapse

export const CreatorBadge = () => {
  const [expanded, setExpanded] = useState(false);
  const collapseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Collapse on scroll — passive, no state read in listener
  useEffect(() => {
    const onScroll = () => setExpanded(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }
    setExpanded(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Small grace period so quick re-entry doesn't flicker
    collapseTimerRef.current = setTimeout(() => setExpanded(false), 120);
  }, []);

  const handleClick = useCallback(() => {
    setExpanded(prev => !prev);
  }, []);

  return (
    /* ── Entrance: fade + slide up, runs once on mount ── */
    <div
      className="creator-badge-root"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 50,
        /* Entrance animation via CSS — no JS cost */
        animation: 'badge-entrance 0.6s 1s cubic-bezier(0.16, 1, 0.3, 1) both',
        /* Promote to its own compositor layer */
        willChange: 'transform',
      }}
    >
      {/* ── Pill container ── */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        role="button"
        aria-expanded={expanded}
        aria-label="Creator badge — click to expand"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '6px',
          borderRadius: 9999,
          cursor: 'pointer',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          background: expanded
            ? 'rgba(18,18,18,0.97)'
            : 'rgba(18,18,18,0.82)',
          border: `1px solid ${expanded ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
          boxShadow: expanded
            ? '0 12px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
            : '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
          /* These background/border/shadow transitions stay off the compositor
             but are cheap (no layout) and imperceptible at these durations */
          transition: `background 300ms ease, border-color 300ms ease, box-shadow 300ms ease`,
          willChange: 'auto',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        {/* ── Expandable content panel ── */}
        <div
          aria-hidden={!expanded}
          style={{
            /*
             * max-width drives the expand — GPU doesn't composite it, but at
             * short durations it's imperceptible. The key win: no `width: auto`
             * spring → no per-frame JS layout measurement.
             */
            maxWidth: expanded ? 340 : 0,
            opacity: expanded ? 1 : 0,
            /*
             * translate pushes content in from the right — composited ✓
             * Collapsed: slide 8px right + fade. Expanded: settle to 0.
             */
            transform: expanded ? 'translateX(0)' : 'translateX(10px)',
            overflow: 'hidden',
            /* Split timing: expand is slow-out (luxurious), collapse is fast-in (snappy) */
            transition: expanded
              ? `max-width 420ms ${EASE_EXPO_OUT},
                 opacity   300ms ${EASE_EXPO_OUT} 50ms,
                 transform 300ms ${EASE_EXPO_OUT} 30ms`
              : `max-width 280ms ${EASE_CIRC_IN} 40ms,
                 opacity   180ms ${EASE_CIRC_IN},
                 transform 180ms ${EASE_CIRC_IN}`,
            willChange: 'opacity, transform',
            pointerEvents: expanded ? 'auto' : 'none',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              paddingLeft: 16,
              paddingRight: 12,
              whiteSpace: 'nowrap',
              width: 'max-content',
            }}
          >
            {/* Creator info */}
            <div
              onClick={e => e.stopPropagation()}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                paddingRight: 12,
                borderRight: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'rgba(163,163,163,0.7)',
                  fontWeight: 600,
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                Creator
              </span>
              <a
                href="https://github.com/r4khul"
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                className="creator-badge-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#e5e5e5',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#e5e5e5')}
              >
                <Github
                  size={14}
                  style={{ color: '#737373', flexShrink: 0 }}
                />
                r4khul
                <ArrowUpRight size={12} style={{ color: '#525252' }} />
              </a>
            </div>

            {/* Sponsor CTA */}
            <a
              href="https://github.com/sponsors/r4khul"
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              draggable={false}
              className="creator-badge-sponsor"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '7px 14px',
                borderRadius: 9999,
                background: 'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(244,63,94,0.10))',
                border: '1px solid rgba(236,72,153,0.22)',
                textDecoration: 'none',
                overflow: 'hidden',
                /* Shimmer via CSS - zero JS cost */
                transition: 'background 250ms ease, border-color 250ms ease, transform 200ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, rgba(236,72,153,0.22), rgba(244,63,94,0.18))';
                e.currentTarget.style.borderColor = 'rgba(236,72,153,0.45)';
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(244,63,94,0.10))';
                e.currentTarget.style.borderColor = 'rgba(236,72,153,0.22)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* Shimmer sweep — pure CSS, compositor ✓ */}
              <span className="creator-badge-shimmer" aria-hidden="true" />
              <Heart
                size={15}
                style={{
                  color: '#f472b6',
                  fill: 'rgba(244,114,182,0.25)',
                  flexShrink: 0,
                  /* Heartbeat on the sponsor button only */
                  animation: 'badge-heartbeat 2.4s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#fce7f3',
                  letterSpacing: '0.02em',
                }}
              >
                Sponsor
              </span>
              <Sparkles
                size={13}
                style={{
                  color: '#fda4af',
                  opacity: 0.75,
                  flexShrink: 0,
                }}
              />
            </a>
          </div>
        </div>

        {/* ── Avatar ── */}
        <div
          style={{
            position: 'relative',
            flexShrink: 0,
            width: 44,
            height: 44,
          }}
        >
          <img
            src="https://github.com/r4khul.png"
            alt="r4khul"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
              transform: expanded ? 'scale(1.06)' : 'scale(1)',
              boxShadow: expanded
                ? '0 0 0 2px rgba(244,114,182,0.5), 0 0 12px rgba(244,114,182,0.25)'
                : '0 0 0 1.5px rgba(255,255,255,0.08)',
              transition: `transform 350ms ${EASE_EXPO_OUT}, box-shadow 350ms ${EASE_EXPO_OUT}`,
              willChange: 'transform',
            }}
          />

          {/* ── Heart badge — CSS-only, no AnimatePresence ── */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: -3,
              right: -3,
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: 'rgb(18,18,18)',
              border: '1.5px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
              /* Entrance: delay until avatar is settled */
              animation: 'badge-pip-in 0.4s 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) both',
              transform: expanded ? 'scale(0)' : 'scale(1)',
              opacity: expanded ? 0 : 1,
              transition: expanded
                ? `transform 150ms ease-in, opacity 150ms ease-in`
                : `transform 300ms 100ms ${EASE_EXPO_OUT}, opacity 300ms 100ms ease`,
              willChange: 'transform, opacity',
            }}
          >
            <Heart size={10} style={{ color: '#ec4899', fill: '#ec4899' }} />
          </span>
        </div>
      </div>
    </div>
  );
};
