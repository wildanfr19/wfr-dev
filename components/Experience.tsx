import Reveal from './Reveal';

const experiences = [
  {
    company: 'PT Chemco Harapan Nusantara',
    org: 'Automotive Components Manufacturer · Multi-Plant Operations',
    role: 'Fullstack Engineer',
    period: 'Apr 2026 – Present',
    tech: ['React', 'TypeScript', 'Laravel', 'Flutter', 'Python', 'Node.js', 'Inertia.js', 'WebSocket', 'Oracle JD Edwards', 'Power BI', 'RFID', 'NFC'],
    points: [
      'Designed and delivered an end-to-end RFID warehouse automation platform: a Flutter handheld app, Laravel backend and admin console, and Python middleware for RFID gate hardware. Integrated with Oracle JD Edwards to automatically generate Inventory Transfer and Inventory Receipt records when materials pass the gate, eliminating manual data entry from warehouse to assembly.',
      'Built a real-time control room dashboard with Laravel, Inertia.js, React, TypeScript and WebSocket, giving departments a single source of truth with live process updates and replacing manual per-shift reporting.',
      'Developed a production downtime tracking system with Flutter and Laravel, streaming robot downtime data into Power BI to replace spreadsheet logging and help maintenance teams prioritize repairs.',
      'Developed an NFC-based skill matrix app with Flutter and Laravel: scanning an ID card instantly shows an employee’s competency profile and training history.',
      'Built an incoming QA inspection app with OK/NG tracking and daily dashboards, replacing paper inspections and giving QC teams a supplier-level audit trail.',
      'Managed the operational lifecycle of deployed apps (server specification, scheduled backups, monitoring, troubleshooting) with internal targets of ≥99% availability, <30-minute ticket response and zero critical defects.',
    ],
  },
  {
    company: 'PT Indonesia Thai Summit Auto',
    org: 'Automotive Stamping & Parts Manufacturer',
    role: 'Fullstack Developer',
    period: 'Apr 2025 – Apr 2026',
    tech: ['Node.js', 'Express.js', 'Laravel', 'Vue.js', 'Python', 'React', 'MySQL', 'SQL Server', 'REST API'],
    points: [
      'Architected and developed ITSA Portal, a central internal platform combining Document Action Request and Asset Management, replacing paper forms and spreadsheets.',
      'Developed an unlicensed software detection system: a Python scanning agent on company workstations reporting to a Laravel dashboard, automating license-compliance audits that used to be done manually every quarter.',
      'Developed a dies monitoring system so maintenance can schedule preventive servicing before failures affect production lines.',
      'Delivered a medical-room visit tracking app with Laravel and Vue.js for the company clinic.',
      'Provided application support, hardware and software troubleshooting, and end-user training for released systems.',
    ],
  },
  {
    company: 'PT Pinus Merah Abadi (Nabati Group)',
    org: 'Major Indonesian FMCG Manufacturer · HR Platform for Multiple Business Units',
    role: 'Fullstack Developer',
    period: 'Feb 2024 – Apr 2025',
    tech: ['PHP', 'AngularJS', 'JavaScript', 'MySQL', 'REST API', 'Git'],
    points: [
      'Developed 11 HRIS modules for the Nabati Group HC Portal using the company’s proprietary PHP MVC framework and AngularJS.',
      'Built employee self-service for attendance, leave requests and payroll information, reducing routine requests to HR administrators.',
      'Ran requirements-gathering sessions with HR stakeholders and translated them into technical specifications.',
      'Designed and optimized MySQL schemas and REST APIs connecting portal modules; ran unit, integration and end-to-end tests before each release.',
    ],
  },
  {
    company: 'PT 360 Teknologi Indonesia',
    org: 'Software Consultancy · ERP Migration Project for Indomaret',
    role: 'Fullstack Developer',
    period: 'Dec 2022 – May 2023',
    tech: ['Laravel', 'Oracle', 'PostgreSQL', 'React', 'Git', 'GitHub'],
    points: [
      'Supported a full ERP database migration from Oracle to PostgreSQL, refactoring Laravel models, controllers and views for the new schema.',
      'Converted Oracle-specific stored procedures and queries to Laravel Query Builder and PostgreSQL, reducing vendor lock-in.',
      'Validated migrated queries against the legacy system before cutover, contributing to an on-schedule migration with zero production downtime.',
    ],
  },
  {
    company: 'PT Trimitra Chitrahasta',
    org: 'Automotive Components Manufacturer · In-House ERP Development',
    role: 'IT Programmer',
    period: 'Oct 2020 – Oct 2022',
    tech: ['Laravel', 'jQuery', 'AJAX', 'MySQL', 'Oracle', 'PostgreSQL', 'Azure Repos', 'Jira'],
    points: [
      'Developed 18 warehouse modules in the company ERP covering inventory management, goods movement and warehouse reporting.',
      'Contributed to migrating a legacy FoxPro/VB.NET desktop ERP to a web platform, removing per-machine installation.',
      'Led UAT sessions and system demos with end users before go-live.',
      'Built an employee suggestion system and an internal e-learning platform for HR training.',
    ],
  },
  {
    company: 'PT Inti Ganda Perdana',
    org: 'Internship',
    role: 'IT Programmer — Internship',
    period: 'Jul 2019 – Jan 2020',
    tech: [],
    points: [
      'Supported Portal IGP development: relational database design, REST API integration, and unit, integration and end-to-end testing.',
    ],
  },
];

const education = [
  { degree: 'Bachelor’s Degree (S1), Informatics Engineering', school: 'STMIK Dharma Negara Bandung', period: '2020 – 2022 · GPA 3.32 / 4.00' },
  { degree: 'Diploma (D2), Professional Application Development', school: 'Telecom PDC Karawang', period: '2018 – 2020 · GPA 3.16 / 4.00' },
];

const facts = [
  { label: 'Location', value: 'Indonesia' },
  { label: 'Industries', value: 'Automotive, FMCG, IT consulting' },
  { label: 'Specialty', value: 'RFID, NFC & ERP integration' },
  { label: 'Phone', value: '+62 896 5232 5523' },
  { label: 'Email', value: 'fathurrohmanwildan136@gmail.com' },
];

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Career</div>
            <h2 className="section-title">Experience & <em>education</em></h2>
          </div>
          <p className="section-lead">
            5+ years building and maintaining production systems for automotive manufacturing, FMCG and IT consulting.
          </p>
        </Reveal>

        <div className="exp-layout">
          <div className="timeline">
            {experiences.map((job, i) => (
              <Reveal key={job.company}>
                <article className={`job ${i === 0 ? 'current' : ''}`}>
                  <div className="job-head">
                    <h3>{job.company}</h3>
                    <span className="job-period">{job.period}</span>
                  </div>
                  <div className="job-org">{job.org}</div>
                  <div className="job-role">{job.role}</div>
                  <ul>
                    {job.points.map(p => <li key={p}>{p}</li>)}
                  </ul>
                  {job.tech.length > 0 && (
                    <div className="tags job-tech">
                      {job.tech.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <aside className="aside">
            <div className="panel">
              <h3>Education</h3>
              {education.map(e => (
                <div key={e.degree} className="edu">
                  <b>{e.degree}</b>
                  <span>{e.school}</span>
                  <small>{e.period}</small>
                </div>
              ))}
            </div>
            <div className="panel">
              <h3>Quick facts</h3>
              <div className="facts">
                {facts.map(f => (
                  <div key={f.label} className="fact">
                    <span>{f.label}</span>
                    <span>{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <a href="/cv/Wildan-Fathur-Rohman-CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download full CV (PDF)
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
