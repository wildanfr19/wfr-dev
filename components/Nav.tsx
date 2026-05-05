'use client';
import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
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

  return (
    <nav
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
      <div className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
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
        className="md:hidden"
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
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(7,11,20,0.98)', zIndex: 99,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px'
        }}>
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
