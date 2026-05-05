'use client';
import { useEffect, useRef } from 'react';

const skills = [
  { name: 'Laravel / PHP / NodeJS / ExpresssJS / NestJS', level: 90, category: 'Backend' },
  { name: 'MySQL / PostgreSQL / SQLServer / Oracle / Database', level: 88, category: 'Backend' },
  { name: 'JavaScript / jQuery', level: 82, category: 'Frontend' },
  { name: 'TypeScript / API Development', level: 78, category: 'Integration' },
  { name: 'ReactJS', level: 80, category: 'Frontend' },
  { name: 'Vue JS / Inertia', level: 74, category: 'Frontend' },
  { name: 'AngularJS', level: 80, category: 'Frontend' },
  { name: 'Flutter / React Native / Mobile Apps', level: 78, category: 'Mobile' },
  { name: 'Bootstrap / CSS', level: 85, category: 'Frontend' },
  { name: 'Python', level: 75, category: 'Tools' },
  { name: 'Docker / CI/CD Pipeline', level: 70, category: 'DevOps' },
  { name: 'AJAX / REST API', level: 87, category: 'Integration' },
  { name: 'Git / Version Control', level: 80, category: 'Tools' },
];

const techStack = [
  'Laravel', 'ReactJS', 'Vue JS', 'Inertia', 'AngularJS', 'MySQL', 'PHP', 'Python', 'jQuery', 'Ajax', 'Bootstrap',
  'TypeScript', 'Flutter', 'Tailwind', 'Git', 'Docker', 'CI/CD', 'REST API', 'Telegram Bot', 'Midtrans', 'QR Code', 'NFC',
  'Laravel', 'ReactJS', 'Vue JS', 'Inertia', 'AngularJS', 'MySQL', 'PHP', 'Python', 'jQuery', 'Ajax', 'Bootstrap',
  'TypeScript', 'Flutter', 'Tailwind', 'Git', 'Docker', 'CI/CD', 'REST API', 'Telegram Bot', 'Midtrans', 'QR Code', 'NFC',
];

function SkillBar({ name, level, category, delay }: { name: string; level: number; category: string; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && fillRef.current) {
        setTimeout(() => {
          if (fillRef.current) {
            fillRef.current.style.transition = 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            fillRef.current.style.width = level + '%';
          }
        }, delay);
      }
    }, { threshold: 0.3 });
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={barRef} style={{ marginBottom: '20px' }}>
      <div className="skill-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div className="skill-label" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500 }}>{name}</span>
          <span className="tag" style={{ fontSize: '10px' }}>{category}</span>
        </div>
        <span className="font-mono" style={{ fontSize: '12px', color: 'var(--accent)' }}>{level}%</span>
      </div>
      <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden', position: 'relative' }}>
        <div
          ref={fillRef}
          style={{
            height: '100%', width: '0%',
            background: `linear-gradient(90deg, var(--accent), var(--accent-dim))`,
            borderRadius: '2px',
            position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
            width: '8px', height: '8px', borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 8px var(--accent)',
          }} />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="responsive-section" style={{ padding: '120px 40px', background: 'var(--surface)', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-line" />
        <p className="font-mono" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '16px', textTransform: 'uppercase' }}>
          02 / Skills
        </p>
        <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '64px', letterSpacing: '-0.02em' }}>
          Tools &amp;{' '}
          <span style={{ color: 'var(--accent)' }}>Technologies</span>
        </h2>

        <div className="two-column skills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          {/* Skill bars */}
          <div>
            <h3 className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '32px' }}>
              Proficiency
            </h3>
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 100} />
            ))}
          </div>

          {/* Right - highlights */}
          <div>
            <h3 className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '32px' }}>
              What I Build
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: 'ERP', title: 'ERP & Enterprise Systems', desc: 'Web-based warehouse management, inventory, and manufacturing systems' },
                { icon: 'HR', title: 'HRIS & HR Portals', desc: 'Employee management, payroll, approval workflows, attendance systems' },
                { icon: 'QA', title: 'QA Skill Matrix & Inspection Dashboards', desc: 'Flutter NFC skill scans, Laravel 13 APIs, inspector scoring, and OK/NG monitoring' },
                { icon: 'API', title: 'E-Commerce & APIs', desc: 'Online stores with shipping API integration (Raja Ongkir, Midtrans)' },
                { icon: 'SEC', title: 'Security & Monitoring', desc: 'Crack/unlicensed software detection with Python agents + Laravel backend' },
              ].map(item => (
                <div key={item.title} style={{
                  padding: '20px', background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px', transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(245,166,35,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span className="font-mono" style={{ fontSize: '11px', color: 'var(--accent)', width: '32px', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{item.title}</div>
                      <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech marquee */}
        <div style={{ marginTop: '80px', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '20px 0', position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px',
            background: 'linear-gradient(90deg, var(--surface), transparent)', zIndex: 2,
          }} />
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px',
            background: 'linear-gradient(-90deg, var(--surface), transparent)', zIndex: 2,
          }} />
          <div className="marquee-inner">
            {techStack.map((t, i) => (
              <span key={i} className="font-mono" style={{
                fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em',
                padding: '0 24px', whiteSpace: 'nowrap',
              }}>
                {t} <span style={{ color: 'var(--accent)', margin: '0 8px' }}>*</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
