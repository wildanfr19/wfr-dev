'use client';

const experiences = [
  {
    company: 'PT Chemco Harapan Nusantara',
    role: 'Fullstack Engineer',
    period: 'April 2026 - Present',
    points: [
      'Developed and maintained full-stack web applications using Laravel, Yii, PHP, and Python across backend logic and frontend integration.',
      'Built and maintained cross-platform mobile applications using React Native and Flutter for internal or customer-facing use cases.',
      'Designed and managed relational databases including MySQL and PostgreSQL, covering schema design, query optimization, and data migration.',
      'Delivered end-to-end features from requirement analysis to production deployment across web and mobile platforms.',
      'Ensured code quality, application performance, and system reliability across multiple product lines.',
    ],
  },
  {
    company: 'PT Indonesia Thai Summit Auto',
    role: 'IT Staff (Programmer & Support)',
    period: 'April 2025 - April 2026',
    points: [
      'Developed and maintained web-based applications to support business operations.',
      'Provided technical support, user training, software and hardware request handling.',
      'Improved and optimized existing systems for better performance and smoother operations.',
    ],
  },
  {
    company: 'PT Pinus Merah Abadi',
    role: 'Fullstack Developer',
    period: 'Feb 2024 - April 2025',
    points: [
      'Designed and developed web applications using PHP MVC and AngularJS.',
      'Built and optimized MySQL databases and integrated RESTful APIs.',
      'Conducted unit, integration, and end-to-end testing to ensure system quality.',
      'Collaborated using Git and Trello for version control and project management.',
      'Delivered new features based on user feedback and business needs.',
    ],
  },
  {
    company: 'PT 360 Teknologi Indonesia',
    role: 'PHP Developer',
    period: 'Dec 2022 - May 2023',
    points: [
      'Checked and verified queries that were still using Oracle.',
      'Debugged and fixed Laravel query controllers, models, and views.',
      'Improved stored procedure queries from Oracle Query to Laravel Query Builder.',
      'Committed, pushed, and merged fixed code to the development branch on GitHub.',
      'Created daily work timesheets.',
    ],
  },
  {
    company: 'PT Trimitra Chitrahasta',
    role: 'IT Staff (Programmer)',
    period: '2020 - 2022',
    points: [
      'Designed and built applications according to company needs.',
      'Maintained, debugged, and documented in-house applications.',
      'Conducted UAT, presented applications to users, and supported production systems.',
      'Supported software and hardware issues using Azure Git and Jira for delivery workflows.',
    ],
  },
  {
    company: 'PT Inti Ganda Perdana',
    role: 'IT Programmer Internship',
    period: 'Jul 2019 - Jan 2020',
    points: [
      'Assisted in developing ERP sub-modules using Laravel, Ajax, and jQuery.',
      'Worked with Oracle and PostgreSQL databases.',
      'Supported ERP spare parts data entry.',
    ],
  },
];

const education = [
  {
    degree: 'S1 Teknik Informatika',
    school: 'STMIK Dharma Negara Bandung',
    period: '2018 - 2020',
    detail: 'GPA 3.32',
  },
  {
    degree: 'D2 Application Development Professional',
    school: 'Telecom PDC Karawang',
    period: '2016 - 2018',
    detail: 'GPA 3.16',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="responsive-section" style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
      <div className="section-line" />
      <p className="font-mono" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '16px', textTransform: 'uppercase' }}>
        03 / CV
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '32px', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: '56px' }}>
        <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1 }}>
          Work Experience<br />
          <span style={{ color: 'var(--accent)' }}>& Education</span>
        </h2>
        <p style={{ maxWidth: '420px', fontSize: '14px', lineHeight: 1.8, color: 'var(--muted)' }}>
          A summary of professional experience, production responsibilities, and formal education behind the portfolio projects.
        </p>
      </div>

      <div className="experience-layout" style={{ display: 'grid', gridTemplateColumns: '1.5fr 0.8fr', gap: '40px', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {experiences.map((item, index) => (
            <article key={item.company} className="experience-card" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px', padding: '24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '2px', position: 'relative' }}>
              <div>
                <div className="font-display" style={{ fontSize: '40px', fontWeight: 800, lineHeight: 1, color: 'var(--border)' }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="font-mono" style={{ fontSize: '11px', color: 'var(--accent)', marginTop: '12px', lineHeight: 1.5 }}>
                  {item.period}
                </div>
              </div>
              <div>
                <h3 className="font-display" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
                  {item.company}
                </h3>
                <div className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                  {item.role}
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none' }}>
                  {item.points.map(point => (
                    <li key={point} style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--muted)', display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>*</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ padding: '24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '2px' }}>
            <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 700, marginBottom: '22px' }}>
              Education
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {education.map(item => (
                <div key={item.degree} style={{ paddingBottom: '18px', borderBottom: '1px solid var(--border)' }}>
                  <div className="font-mono" style={{ fontSize: '11px', color: 'var(--accent)', marginBottom: '8px' }}>
                    {item.period}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
                    {item.degree}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
                    {item.school}
                  </div>
                  <span className="tag" style={{ marginTop: '10px' }}>{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '24px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '2px' }}>
            <div className="font-mono" style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Current Focus
            </div>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8 }}>
              Full-stack web and mobile engineering, database optimization, ERP and HRIS workflows, internal operation systems, and production application support.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
