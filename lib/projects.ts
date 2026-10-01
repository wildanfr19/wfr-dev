import { gallery, type Shot } from './gallery';

export type FeaturedProject = {
  slug: string;
  title: string;
  company: string;
  year: string;
  category: string;
  status?: string;
  summary: string;
  points: string[];
  tech: string[];
  shots: Shot[];
  /** index of a portrait screenshot shown floating over the cover */
  phone?: number;
};

export type Project = {
  title: string;
  category: string;
  year: string;
  desc: string;
  highlight: string;
  tech: string[];
};

export const featured: FeaturedProject[] = [
  {
    slug: 'rfid-warehouse',
    title: 'RFID Warehouse Automation (RMT System)',
    company: 'PT Chemco Harapan Nusantara',
    year: '2026',
    category: 'Manufacturing Logistics',
    summary:
      'End-to-end RFID warehouse automation platform integrated with Oracle JD Edwards. When materials pass the RFID gate, Inventory Transfer and Inventory Receipt records are generated automatically, eliminating manual data entry from warehouse to assembly.',
    points: [
      'Flutter handheld app: NFC card login, RFID lorry tag scan, rack QR validation and quantity checks per kanban',
      'Python middleware for the RFID gate hardware that posts Inventory Transfer & Receipt to Oracle JD Edwards',
      'Laravel backend and admin console: live picking and gate KPIs, kanban IT/IR monitoring, user activity log, printable transfer documents',
      'Assembly-to-Delivery booking flow with part card and packaging RFID scans',
    ],
    tech: ['Laravel', 'Flutter', 'Python', 'Oracle JD Edwards', 'MySQL', 'RFID', 'NFC', 'QR Code', 'REST API'],
    shots: gallery['rfid-warehouse'],
    phone: 15,
  },
  {
    slug: 'inspection-room',
    title: 'Inspection Room Dashboard',
    company: 'PT Chemco Harapan Nusantara · QA Department',
    year: '2026',
    category: 'Quality Assurance',
    summary:
      'Replaced paper forms in the QA inspection room with a real-time web app. Production registers parts sent from casting and machining, QA tracks checking progress per machine and shift, and results are recorded as OK/NG.',
    points: [
      'Start and complete check flow with OK/NG result, NG type and a full action log',
      'Automatic WhatsApp notifications to the sending department leader and a shift summary to the QA manager',
      'Dashboard with multi-filter KPIs, resume per machine and daily and monthly charts',
      'Role-based access (admin, operator, viewer) using the existing employee database login',
    ],
    tech: ['Laravel 13', 'PHP 8.3', 'MySQL', 'Bootstrap 5', 'ApexCharts', 'DataTables', 'WhatsApp API'],
    shots: gallery['inspection-room'],
  },
  {
    slug: 'incoming-qa',
    title: 'Incoming QA Inspection',
    company: 'PT Chemco Harapan Nusantara · QA Incoming Section',
    year: '2026',
    category: 'Quality Assurance',
    summary:
      'Incoming QA inspection app that replaced paper-based checks of supplier deliveries. Every arrival is checked and recorded as OK/NG, giving QC teams daily dashboards and a supplier-level audit trail.',
    points: [
      'Record each supplier arrival and its check result: visual or dimension check, mill sheet, qty OK and NG',
      'Problem NG log per supplier and part with level (function, dimension, visual), sort result and photos',
      'Corrective analysis from the supplier; closed problems are locked to keep the audit trail intact',
      'Dashboard with today’s arrivals, pending checks, open problems, and OK/NG per part and supplier',
    ],
    tech: ['Laravel', 'React'],
    shots: gallery['incoming-qa'],
  },
  {
    slug: 'calibration',
    title: 'Calibration Control Dashboard',
    company: 'PT Chemco Harapan Nusantara · QA Department',
    year: '2026',
    category: 'Quality Assurance',
    summary:
      'Makes sure every measuring instrument is calibrated on time, and records who performed and who approved each calibration. Covers internal calibration done by QA and external calibration handled by suppliers.',
    points: [
      'Internal 8-step and external 10-step workflows, including PP, PO, shipping and certificate upload',
      'Segregation of duties: the person who calibrates can never approve their own result',
      'Green, yellow and red status rules with the next calibration date calculated by the system',
      'Daily automatic reminders and four Excel reports: due date, plan vs actual and supplier performance',
    ],
    tech: ['Laravel', 'React', 'MySQL', 'Role-based Access', 'Charts', 'Excel Export'],
    shots: gallery['calibration'],
  },
  {
    slug: 'skill-matrix',
    title: 'QA Skill Matrix with NFC',
    company: 'PT Chemco Harapan Nusantara · QA Department',
    year: '2026',
    category: 'Quality Assurance',
    summary:
      'NFC-based skill matrix app. Scanning an employee ID card instantly shows their competency profile and training history, eliminating manual spreadsheet lookups for HR and production teams.',
    points: [
      'NFC card scan on Flutter and web display, with auto-reset for a shared kiosk',
      'Scoring for inspector requirements, basic training quality and skill quality per part',
      'Skill level evaluation from L0 to L4 with pass/fail status',
      'Admin web for skill, knowledge and training score input',
    ],
    tech: ['Laravel 13', 'Flutter', 'MySQL', 'REST API', 'NFC'],
    shots: gallery['skill-matrix'],
    phone: 12,
  },
  {
    slug: 'robot-problem',
    title: 'Robot Downtime Tracking System',
    company: 'PT Chemco Harapan Nusantara',
    year: '2026',
    category: 'Manufacturing Monitoring',
    summary:
      'Production downtime tracking for eight robot automation lines, replacing spreadsheet-based logging. Downtime data streams into Power BI so maintenance teams can analyze trends and prioritize repairs.',
    points: [
      'Operators log problems per line and machine with stop and restart times; lost time is calculated automatically',
      'Shift detected automatically from the input time, including overnight shifts',
      'Production vs daily target with a daily pivot per line and problem summary by type',
      'Admin dashboard with records, charts and master data for lines, shifts, machines and problem types',
    ],
    tech: ['Flutter', 'Laravel', 'Power BI', 'MySQL', 'DataTables'],
    shots: gallery['robot-problem'],
  },
  {
    slug: 'control-room',
    title: 'Plant Control Room Dashboard',
    company: 'PT Chemco Harapan Nusantara',
    year: '2026',
    category: 'Manufacturing Monitoring',
    summary:
      'Real-time control room dashboard that gives every department a single source of truth, with live process updates without page refreshes, replacing manual per-shift reporting.',
    points: [
      'Production, delivery, quality, safety, cost, maintenance, dies warnings and energy on one screen',
      'Live updates over WebSocket, with Power BI sources for quality and energy',
      'CCTV AI event feed for the Karawang and Cikarang plants',
      'Live escalation board sorted by priority, with period and line filters',
    ],
    tech: ['Laravel', 'Inertia.js', 'React', 'TypeScript', 'WebSocket', 'Power BI'],
    shots: gallery['control-room'],
  },
];

export const otherProjects: Project[] = [
  {
    title: 'ITSA Portal',
    category: 'Enterprise',
    year: '2025',
    desc: 'Centralized internal platform for PT Indonesia Thai Summit Auto that brings Document Action Request and Asset Management into one system, replacing paper forms and spreadsheets.',
    highlight: 'One portal for internal apps and approvals',
    tech: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Document Action Request',
    category: 'Workflow',
    year: '2025',
    desc: 'ITSA Portal module for document revision requests, with a 3-step approval matrix from department head to system development and manager.',
    highlight: '3-level approval with tracking',
    tech: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Asset Registration & Transfer',
    category: 'Workflow',
    year: '2025',
    desc: 'ITSA Portal asset management module: digital asset registration, department and accounting approval, and a multi-level transfer approval chain.',
    highlight: 'Multi-level transfer approval',
    tech: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Unlicensed Software Detection',
    category: 'IT & Security',
    year: '2025',
    desc: 'Python scanning agent deployed across company workstations, reporting cracked or unlicensed software to a Laravel dashboard. Automated license-compliance audits that used to be done manually every quarter.',
    highlight: 'Python endpoint agent with real-time detection logs',
    tech: ['Python', 'Laravel', 'MySQL', 'Excel Export'],
  },
  {
    title: 'Dies Monitoring',
    category: 'Manufacturing',
    year: '2026',
    desc: 'Tracks the condition and performance of production dies so the maintenance team can schedule preventive servicing before failures affect production lines.',
    highlight: 'Preventive maintenance before failures hit the line',
    tech: ['Laravel', 'Inertia.js', 'React', 'MySQL'],
  },
  {
    title: 'Medical Room Visit Tracking',
    category: 'HRIS',
    year: '2026',
    desc: 'Records and monitors employee visits to the company clinic, including sick employee handling and visit history for nurses and HR.',
    highlight: 'Clinic visit records for nurse and HR workflows',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
  },
  {
    title: 'IT Borrow Request with QR Code',
    category: 'IT & Security',
    year: '2025',
    desc: 'IT asset borrowing system. Users request items and receive a QR code that IT scans with a webcam to confirm borrowing and returns, with overdue tracking and history.',
    highlight: 'Webcam QR scanner for borrow and return',
    tech: ['Laravel', 'MySQL', 'jQuery', 'QR Code'],
  },
  {
    title: 'HC Portal Nabati (HRIS)',
    category: 'HRIS',
    year: '2024',
    desc: '11 HRIS modules for the Nabati Group HC Portal, including employee self-service for attendance, leave requests and payroll information across multiple business units.',
    highlight: '11 HR modules with employee self-service',
    tech: ['PHP MVC', 'AngularJS', 'MySQL', 'REST API'],
  },
  {
    title: 'ERP Migration Oracle → PostgreSQL',
    category: 'Enterprise',
    year: '2023',
    desc: 'ERP database migration for Indomaret at PT 360 Teknologi Indonesia. Refactored Laravel code and converted Oracle stored procedures to Query Builder and PostgreSQL, with zero production downtime.',
    highlight: 'On-schedule cutover with zero downtime',
    tech: ['Laravel', 'Oracle', 'PostgreSQL', 'Git'],
  },
  {
    title: 'Web ERP Warehouse Modules',
    category: 'Enterprise',
    year: '2022',
    desc: 'Migrated a legacy FoxPro/VB.NET desktop ERP to the web at PT Trimitra Chitrahasta. Built 18 warehouse modules covering inventory management, goods movement and reporting.',
    highlight: '18 warehouse modules, no per-machine install',
    tech: ['Laravel', 'jQuery', 'AJAX', 'MySQL'],
  },
  {
    title: 'Employee Suggestion System',
    category: 'Enterprise',
    year: '2022',
    desc: 'Structured system for submitting, tracking and following up on improvement proposals, replacing an untracked physical suggestion box.',
    highlight: 'Every proposal tracked to follow-up',
    tech: ['Laravel', 'jQuery', 'MySQL'],
  },
  {
    title: 'E-Learning Platform',
    category: 'Enterprise',
    year: '2022',
    desc: 'Internal e-learning for HR training at PT Trimitra Chitrahasta: self-paced materials, quizzes, pre and post tests, and scoring reports.',
    highlight: 'Self-paced training with automated scoring',
    tech: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'MoontoN Streaming Platform',
    category: 'Personal',
    year: '2022',
    desc: 'Netflix-inspired streaming site built while learning React, with Basic and Premium subscriptions, Midtrans payments and movie management.',
    highlight: 'Midtrans payment and subscription tiers',
    tech: ['Laravel', 'React', 'Midtrans', 'MySQL'],
  },
  {
    title: 'E-Commerce with Raja Ongkir',
    category: 'Personal',
    year: '2022',
    desc: 'Mobile phone store with real-time shipping cost from the Raja Ongkir API, cart, checkout and multi-courier support.',
    highlight: 'Real-time shipping calculation',
    tech: ['Laravel', 'jQuery', 'Bulma', 'Raja Ongkir API'],
  },
  {
    title: 'Travel Ticket Booking',
    category: 'Personal',
    year: '2022',
    desc: 'Tourism ticket booking with package browsing, booking flow and simple admin management.',
    highlight: 'End-to-end booking flow',
    tech: ['Laravel', 'Bootstrap', 'jQuery', 'MySQL'],
  },
  {
    title: 'E-Raport with Telegram Bot',
    category: 'Personal',
    year: '2020',
    desc: 'Final project: school report card system for SMPN 2 Lemahabang that sends grades to students through a Telegram bot.',
    highlight: 'Grade notifications via Telegram',
    tech: ['Laravel', 'MySQL', 'Telegram Bot API'],
  },
];
