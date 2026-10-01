import { featured, otherProjects } from '@/lib/projects';
import { ArrowRight } from './Icons';

const rfid = featured[0];
const skill = featured.find(p => p.slug === 'skill-matrix')!;

const stats = [
  { num: '5+', label: 'Years experience' },
  { num: String(featured.length + otherProjects.length), label: 'Projects delivered' },
  { num: '6', label: 'Companies' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="status">
            <span className="status-dot" />
            Fullstack Engineer · open to new opportunities
          </div>

          <h1>
            I build systems<br />
            factories <span className="hl">actually use.</span>
          </h1>

          <p className="hero-lead">
            I&apos;m <strong>Wildan Fathur Rohman</strong>, a fullstack engineer with 5+ years building production systems
            for automotive manufacturing and FMCG: ERP, HRIS and enterprise integrations. I specialize in connecting
            <strong> RFID gates</strong>, handheld scanners and <strong>NFC readers</strong> to <strong>Laravel</strong> and
            <strong> Flutter</strong> apps, synced with <strong>Oracle JD Edwards</strong> so inventory moves without manual entry.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              See my projects <ArrowRight />
            </a>
            <a href="/cv/Wildan-Fathur-Rohman-CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Download CV
            </a>
          </div>

          <div className="stats">
            {stats.map(s => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait">
            <img src="/wildan-profile.jpg" alt="Wildan Fathur Rohman" />
          </div>
          <a href={`#${rfid.slug}`} className="float-card float-a">
            <img src={rfid.shots[1].thumb} alt="" />
            <span>RFID Warehouse System</span>
          </a>
          <a href={`#${skill.slug}`} className="float-card float-b">
            <img src={skill.shots[skill.phone ?? 0].thumb} alt="" />
            <span>NFC Skill App</span>
          </a>
          <div className="name-badge">
            <b>Wildan F. R.</b>
            <small>Laravel · Flutter · React · Python · NodeJS</small>
          </div>
        </div>
      </div>
    </section>
  );
}
