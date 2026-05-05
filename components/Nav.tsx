'use client';
import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav
      className="site-nav"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '16px 40px' : '24px 40px',
        background: scrolled ? 'rgba(7,11,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
    >
      <a href="#" style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'var(--accent)', letterSpacing: '0.05em', textDecoration: 'none' }}>
        WFR<span style={{ color: 'var(--muted)' }}>.dev</span>
      </a>

      {/* Desktop nav */}
      <div className="desktop-nav" style={{ gap: '32px', alignItems: 'center' }}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link hover-underline" style={{ textDecoration: 'none' }}>
            {l.label}
          </a>
        ))}
        <a href="mailto:fathurrohmanwildan136@gmail.com" className="btn-primary" style={{ padding: '8px 20px' }}>
          Hire Me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="mobile-menu-button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 'none', cursor: 'none', padding: '8px' }}
      >
        <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ height: '1.5px', background: open ? 'var(--accent)' : 'var(--text)', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none', display: 'block' }} />
          <span style={{ height: '1.5px', background: 'var(--text)', opacity: open ? 0 : 1, transition: 'all 0.3s', display: 'block' }} />
          <span style={{ height: '1.5px', background: open ? 'var(--accent)' : 'var(--text)', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none', display: 'block' }} />
        </div>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'var(--bg)', zIndex: 1000,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px'
        }}>
          <button
            className="mobile-menu-close"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed',
              top: '22px',
              right: '22px',
              width: '44px',
              height: '44px',
              border: '1px solid var(--border)',
              background: 'var(--surface)',
              color: 'var(--accent)',
              fontSize: '28px',
              lineHeight: 1,
              cursor: 'none',
            }}
          >
            x
          </button>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: 700, color: 'var(--text)', textDecoration: 'none', letterSpacing: '0.05em' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
