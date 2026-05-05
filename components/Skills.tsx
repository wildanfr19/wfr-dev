'use client';

const skillGroups = [
  {
    title: 'Backend Engineering',
    desc: 'Build maintainable application logic, APIs, business workflows, and internal systems.',
    items: ['Laravel', 'PHP', 'Yii', 'NodeJS', 'ExpressJS', 'NestJS', 'Python'],
  },
  {
    title: 'Frontend & UI',
    desc: 'Create responsive interfaces for dashboards, portals, admin panels, and operational tools.',
    items: ['ReactJS', 'Vue JS', 'Inertia', 'AngularJS', 'TypeScript', 'JavaScript', 'jQuery'],
  },
  {
    title: 'Mobile Development',
    desc: 'Develop cross-platform mobile apps for internal operations and customer-facing workflows.',
    items: ['Flutter', 'React Native', 'REST API Integration', 'NFC Scan', 'QR Code'],
  },
  {
    title: 'Database & Integration',
    desc: 'Design schemas, optimize queries, migrate data, and connect systems through APIs.',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle', 'REST API', 'AJAX', 'Data Migration'],
  },
  {
    title: 'DevOps & Delivery',
    desc: 'Support deployment, collaboration, code versioning, and delivery pipelines.',
    items: ['Git', 'GitHub', 'Azure Git', 'Docker', 'CI/CD Pipeline', 'Jira', 'Trello'],
  },
  {
    title: 'Business Systems',
    desc: 'Understand operational needs and translate them into practical business applications.',
    items: ['ERP', 'HRIS', 'Asset Management', 'QA Monitoring', 'Approval Workflow', 'Reporting'],
  },
];

const buildAreas = [
  { code: 'ERP', title: 'ERP & Enterprise Systems', desc: 'Warehouse, inventory, vendor performance, manufacturing, and internal operation modules.' },
  { code: 'HR', title: 'HRIS & HR Portals', desc: 'Leave, payroll completion, approval matrix, employee reporting, medroom visit, and HR workflows.' },
  { code: 'QA', title: 'QA Systems', desc: 'Skill matrix, Flutter NFC scan, inspection room dashboard, OK/NG summaries, and shift monitoring.' },
  { code: 'OPS', title: 'Monitoring & Support', desc: 'Crack software detection, IT borrow request, asset transfer notification, and production support.' },
];

const techStack = [
  'Laravel', 'ReactJS', 'Vue JS', 'Inertia', 'AngularJS', 'MySQL', 'PHP', 'Python', 'jQuery', 'Ajax', 'Bootstrap',
  'TypeScript', 'Flutter', 'React Native', 'Tailwind', 'Git', 'Docker', 'CI/CD', 'REST API', 'Telegram Bot', 'Midtrans', 'QR Code', 'NFC',
  'Laravel', 'ReactJS', 'Vue JS', 'Inertia', 'AngularJS', 'MySQL', 'PHP', 'Python', 'jQuery', 'Ajax', 'Bootstrap',
  'TypeScript', 'Flutter', 'React Native', 'Tailwind', 'Git', 'Docker', 'CI/CD', 'REST API', 'Telegram Bot', 'Midtrans', 'QR Code', 'NFC',
];

export default function Skills() {
  return (
    <section id="skills" className="responsive-section" style={{ padding: '120px 40px', background: 'var(--surface)', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-line" />
        <p className="font-mono" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '16px', textTransform: 'uppercase' }}>
          02 / Skills
        </p>
        <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
          Technical<br />
          <span style={{ color: 'var(--accent)' }}>Capabilities</span>
        </h2>
        <p style={{ maxWidth: '680px', fontSize: '15px', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '56px' }}>
          A practical skill set shaped by building and supporting production systems across enterprise web, mobile, ERP, HRIS, QA, and internal operations.
        </p>

        <div className="skills-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '56px' }}>
          {skillGroups.map(group => (
            <div key={group.title} className="project-card skill-card" style={{ padding: '24px', borderRadius: '2px' }}>
              <h3 className="font-display" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '10px' }}>
                {group.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '18px' }}>
                {group.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="build-area-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {buildAreas.map(area => (
            <div key={area.title} style={{ padding: '20px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '2px' }}>
              <span className="font-mono" style={{ fontSize: '11px', color: 'var(--accent)', display: 'block', marginBottom: '12px' }}>
                {area.code}
              </span>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>
                {area.title}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
                {area.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '80px', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '20px 0', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(90deg, var(--surface), transparent)', zIndex: 2 }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(-90deg, var(--surface), transparent)', zIndex: 2 }} />
          <div className="marquee-inner">
            {techStack.map((t, i) => (
              <span key={i} className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', padding: '0 24px', whiteSpace: 'nowrap' }}>
                {t} <span style={{ color: 'var(--accent)', margin: '0 8px' }}>*</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
