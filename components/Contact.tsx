'use client';
import { useState } from 'react';
import Reveal from './Reveal';

const EMAIL = 'fathurrohmanwildan136@gmail.com';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wildan-fathur-rohman-96151a176/' },
  { label: 'GitHub', href: 'https://github.com/wildanfr19' },
  { label: 'WhatsApp', href: 'https://wa.me/6289652325523' },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <div>
              <div className="eyebrow">Contact</div>
              <h2>Let&apos;s build something useful together.</h2>
              <p>
                Open to full-time roles and freelance projects in web, mobile and manufacturing systems.
              </p>
            </div>
            <div className="contact-actions">
              <button className="email-box" onClick={copy}>
                <span>
                  <small>Email</small>
                  <b>{EMAIL}</b>
                </span>
                <em>{copied ? 'Copied!' : 'Click to copy'}</em>
              </button>
              <div className="socials">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
