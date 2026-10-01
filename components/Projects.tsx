'use client';
import { useState } from 'react';
import { featured, otherProjects, type FeaturedProject } from '@/lib/projects';
import { Expand, Images } from './Icons';
import Lightbox from './Lightbox';
import Reveal from './Reveal';

const categories = ['All', ...Array.from(new Set(otherProjects.map(p => p.category)))];

function Feature({ project, num, reverse, onOpen }: { project: FeaturedProject; num: number; reverse: boolean; onOpen: (i: number) => void }) {
  const { shots, phone } = project;
  const hasPhone = phone !== undefined;
  const count = shots.length;
  const thumbIdx = shots.map((_, i) => i).filter(i => i !== 0 && i !== phone).slice(0, hasPhone ? 3 : 4);
  const shown = 1 + thumbIdx.length + (hasPhone ? 1 : 0);
  const more = count - shown;

  return (
    <article id={project.slug} className={`feature ${reverse ? 'reverse' : ''}`}>
      <div className="feature-media">
        <div className="media-wrap">
          <button className="cover" onClick={() => onOpen(0)} aria-label={`Open ${project.title} gallery`}>
            <div className="cover-bar"><i /><i /><i /></div>
            <div className="cover-img">
              <img src={shots[0].src} alt={shots[0].caption} loading="lazy" />
            </div>
            <span className="cover-hint"><Expand /> {count > 1 ? `View ${count} screenshots` : 'View full size'}</span>
          </button>
          {hasPhone && (
            <button className="phone" onClick={() => onOpen(phone)} aria-label={shots[phone].caption}>
              <img src={shots[phone].thumb} alt={shots[phone].caption} loading="lazy" />
            </button>
          )}
        </div>

        {thumbIdx.length > 0 && (
          <div className={`thumbs ${hasPhone ? 'has-phone' : ''}`}>
            {thumbIdx.map((i, k) => (
              <button key={i} className="thumb" onClick={() => onOpen(i)} aria-label={shots[i].caption}>
                <img src={shots[i].thumb} alt="" loading="lazy" />
                {k === thumbIdx.length - 1 && more > 0 && <span className="thumb-more">+{more}</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="feature-body">
        <div className="feature-meta">
          <span className="feature-num">{String(num).padStart(2, '0')}</span>
          <span className="chip">{project.category}</span>
          <span className="tag">{project.year}</span>
          {project.status && <span className="chip chip-warm">{project.status}</span>}
        </div>
        <h3>{project.title}</h3>
        <div className="feature-company">{project.company}</div>
        <p className="feature-summary">{project.summary}</p>
        <ul className="feature-points">
          {project.points.map(p => <li key={p}>{p}</li>)}
        </ul>
        <div className="tags">
          {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <button className="btn btn-primary" onClick={() => onOpen(0)}>
          <Images /> {count > 1 ? `View ${count} screenshots` : 'View screenshot'}
        </button>
      </div>
    </article>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<{ project: FeaturedProject; index: number } | null>(null);
  const [filter, setFilter] = useState('All');
  const list = filter === 'All' ? otherProjects : otherProjects.filter(p => p.category === filter);
  const totalShots = featured.reduce((n, p) => n + p.shots.length, 0);

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Selected work</div>
            <h2 className="section-title">Projects in <em>production</em></h2>
          </div>
          <p className="section-lead">
            Real systems running in factories and offices. Click any image to browse {totalShots}+ screenshots
            of the web dashboards, mobile apps and the operators using them.
          </p>
        </Reveal>

        <div className="featured-list">
          {featured.map((p, i) => (
            <Reveal key={p.slug}>
              <Feature project={p} num={i + 1} reverse={i % 2 === 1} onOpen={index => setOpen({ project: p, index })} />
            </Reveal>
          ))}
        </div>

        <Reveal className="subhead">
          <div>
            <h3>More projects</h3>
            <p>Enterprise modules, HRIS, internal tools and personal builds.</p>
          </div>
          <div className="filters">
            {categories.map(c => (
              <button key={c} className={`filter ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="card-grid">
          {list.map(p => (
            <article key={p.title} className="card">
              <div className="card-top">
                <span className="chip">{p.category}</span>
                <span className="card-year">{p.year}</span>
              </div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <div className="card-hl">→ {p.highlight}</div>
              <div className="tags">
                {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && (
        <Lightbox
          title={open.project.title}
          shots={open.project.shots}
          index={open.index}
          onIndex={index => setOpen({ ...open, index })}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
