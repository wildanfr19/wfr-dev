import Reveal from './Reveal';

const groups = [
  { code: 'BE', title: 'Backend', desc: 'Application logic, REST APIs and business workflows.', items: ['PHP', 'Laravel', 'CodeIgniter', 'Python', 'Node.js', 'Express.js', 'REST API Design'] },
  { code: 'FE', title: 'Frontend', desc: 'Dashboards, portals, admin consoles and operational tools.', items: ['React', 'TypeScript', 'Inertia.js', 'Vue.js', 'AngularJS', 'JavaScript', 'jQuery', 'Blade', 'Tailwind CSS', 'Bootstrap'] },
  { code: 'MO', title: 'Mobile', desc: 'Apps for Android handhelds and enterprise devices on the shop floor.', items: ['Flutter', 'Android Handheld', 'Enterprise Devices'] },
  { code: 'DB', title: 'Databases', desc: 'Schema design, query optimization and data migration.', items: ['PostgreSQL', 'MySQL', 'Oracle', 'Oracle JD Edwards', 'SQL Server'] },
  { code: 'IO', title: 'Integration & IoT', desc: 'Connecting hardware, ERP and analytics to applications.', items: ['WebSocket', 'RFID', 'NFC', 'ERP Integration', 'Power BI', 'Third-Party APIs'] },
  { code: 'OP', title: 'Tools & Delivery', desc: 'Git-based workflows, code reviews and ticket-driven delivery.', items: ['Microservices', 'Git', 'GitHub', 'Azure Repos', 'Docker', 'CI/CD', 'Jira', 'Trello', 'Code Review', 'UAT', 'Technical Docs'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Toolbox</div>
            <h2 className="section-title">Skills & <em>stack</em></h2>
          </div>
          <p className="section-lead">
            Comfortable owning the full lifecycle: requirements with business users, development, deployment,
            monitoring, backups and ongoing maintenance.
          </p>
        </Reveal>

        <div className="skills-grid">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 80}>
              <div className="skill">
                <div className="skill-icon">{g.code}</div>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <div className="tags">
                  {g.items.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
