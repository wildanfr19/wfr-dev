'use client';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'E-Learning PT Trimitra Chitrahasta',
    category: 'Enterprise',
    desc: 'A web-based e-learning platform for HRD employee evaluation. Supports multiple departments, quiz/pre-test/post-test management, material upload (video & PPT), and scoring reports.',
    tech: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap', 'AJAX'],
    highlight: 'Quiz system with automated scoring & printable reports',
    year: '2023',
  },
  {
    id: 2,
    num: '02',
    title: 'TMS - Manufacturing ERP (Web)',
    category: 'ERP Migration',
    desc: 'Migrated a desktop Foxpro ERP to a full web-based system for a manufacturing company. Built 18+ warehouse modules including inventory, subcon management, vendor performance, and stock cards.',
    tech: ['Laravel', 'MySQL', 'JavaScript', 'AJAX', 'Bootstrap'],
    highlight: '18 warehouse modules + vendor performance scoring',
    year: '2023',
  },
  {
    id: 3,
    num: '03',
    title: 'E-Raport + Telegram Bot',
    category: 'Education',
    desc: 'Thesis project (2020). A web-based school report card system for SMPN 2 Lemahabang with Telegram Bot API integration for student grade notifications.',
    tech: ['Laravel', 'MySQL', 'Telegram Bot API', 'Bootstrap', 'JavaScript'],
    highlight: 'Real-time grade notification via Telegram Bot',
    year: '2020',
  },
  {
    id: 4,
    num: '04',
    title: 'HC Portal Nabati - HRIS',
    category: 'HRIS',
    desc: 'Integrated HRIS portal for Nabati Group. Developed 11 modules including leave management, payroll completion, approval matrix, org chart, mass employee profile update (8 tables), and email notifications.',
    tech: ['Laravel', 'AngularJS', 'MySQL', 'AJAX', 'Excel Export'],
    highlight: '11 HR modules + mass bulk data operations',
    year: '2024',
  },
  {
    id: 5,
    num: '05',
    title: 'Web Portal PT Indonesia Thai Summit Auto',
    category: 'Enterprise Portal',
    desc: 'Company portal for PT Indonesia Thai Summit Auto that acts as a central hub for internal applications, company information, news, login access, and user productivity tools.',
    tech: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap', 'AJAX'],
    highlight: 'Internal company portal as a launcher for ITSA apps',
    year: '2025',
  },
  {
    id: 6,
    num: '06',
    title: 'IT Borrow Request - QR Code System',
    category: 'Asset Management',
    desc: 'An IT asset borrowing system with QR code integration. Users request items, get a QR code, and IT scans it via webcam to confirm borrow/return. Tracks overdue items with history logs.',
    tech: ['Laravel', 'MySQL', 'jQuery', 'QR Code', 'Webcam Scanner'],
    highlight: 'Webcam QR scanner for borrow/return flow',
    year: '2025',
  },
  {
    id: 7,
    num: '07',
    title: 'Travel Ticket Booking Website',
    category: 'Travel',
    desc: 'A web-based travel ticket booking application built as a personal practice project. Includes travel package browsing, booking flow, and simple admin management for tourism ticket orders.',
    tech: ['Laravel', 'Bootstrap', 'jQuery', 'JavaScript', 'MySQL'],
    highlight: 'Tourism ticket booking flow with Laravel',
    year: '2022',
  },
  {
    id: 8,
    num: '08',
    title: 'MoontoN - Streaming Platform',
    category: 'Personal Project',
    desc: 'A Netflix-inspired movie streaming website built while learning ReactJS. Features subscription tiers (Basic/Premium), Midtrans payment gateway integration, and admin movie management.',
    tech: ['Laravel', 'ReactJS', 'Midtrans', 'MySQL'],
    highlight: 'Midtrans payment + subscription tier management',
    year: '2022',
  },
  {
    id: 9,
    num: '09',
    title: 'E-Commerce - Raja Ongkir API',
    category: 'E-Commerce',
    desc: 'A mobile phone e-commerce platform with real-time shipping cost calculation via Raja Ongkir API. Features cart, checkout, user registration, and multi-courier support.',
    tech: ['Laravel', 'jQuery', 'Bulma CSS', 'AJAX', 'Raja Ongkir API'],
    highlight: 'Real-time shipping calculation with Raja Ongkir',
    year: '2022',
  },
  {
    id: 10,
    num: '10',
    title: 'Document Action Request - ITSA',
    category: 'Document Workflow',
    desc: 'Document revision request module for ITSA users. Supports create, edit, detail views, approval tracking, and a 3-step approval matrix from department head to system development and manager approval.',
    tech: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap', 'AJAX'],
    highlight: '3-level document approval workflow with tracking',
    year: '2025',
  },
  {
    id: 11,
    num: '11',
    title: 'Digital Assets Registration & Transfer Notification',
    category: 'Asset Management',
    desc: 'Asset registration and transfer notification module for ITSA. Handles digital asset registration, department approval, accounting approval, and a long transfer notification approval chain.',
    tech: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap', 'AJAX'],
    highlight: 'Asset registration + multi-level transfer approval',
    year: '2025',
  },
  {
    id: 12,
    num: '12',
    title: 'Crack & Unlicensed Software Detection System',
    category: 'Security Monitoring',
    desc: 'Monitoring system to detect cracked or unlicensed software on user PCs. Laravel records detection logs in real time, while a Python client agent runs on each computer and reports app name, PC name, IP, MAC address, file location, and detection time.',
    tech: ['Python', 'Laravel', 'MySQL', 'Client Agent', 'Excel Export'],
    highlight: 'Python endpoint agent + real-time Laravel detection logs',
    year: '2025',
  },
  {
    id: 13,
    num: '13',
    title: 'PPM Dies Monitoring - ITSA',
    category: 'Manufacturing Monitoring',
    desc: 'Preventive maintenance monitoring system for dies at PT Indonesia Thai Summit Auto. Built to help users track PPM activities, monitor dies condition, and manage maintenance records in a web dashboard.',
    tech: ['Laravel', 'Inertia React JS', 'MySQL', 'REST API'],
    highlight: 'Dies preventive maintenance tracking with Inertia React',
    year: '2026',
  },
  {
    id: 14,
    num: '14',
    title: 'Medroom Visit - ITSA',
    category: 'HRIS',
    desc: 'Medroom visit system for PT Indonesia Thai Summit Auto used by nurse HR users to record employee visits, sick employee handling, visit history, and medical room administration.',
    tech: ['Laravel', 'Inertia Vue JS', 'MySQL', 'REST API'],
    highlight: 'Employee medroom visit records for nurse HR workflows',
    year: '2026',
  },
  {
    id: 15,
    num: '15',
    title: 'QA Skill Matrix - NFC Monitoring Apps',
    category: 'QA Systems',
    desc: 'Skill matrix application for the QA department with a Laravel 13 backend and Flutter frontend. After scanning an employee card via NFC, the app displays employee data, skill maps, inspector requirements, basic training quality, and skill quality scoring.',
    tech: ['Laravel 13', 'Flutter', 'MySQL', 'REST API', 'NFC'],
    highlight: 'Flutter NFC scan + Laravel 13 QA skill scoring backend',
    year: '2026',
  },
  {
    id: 16,
    num: '16',
    title: 'Inspection Room Dashboard - QA Department',
    category: 'QA Systems',
    desc: 'Real-time inspection dashboard for daily QA checking. Built to monitor inspection queues, machine progress, shift-based filtering, PIC tracking, and OK/NG results in one operational view.',
    tech: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap', 'AJAX'],
    highlight: 'Live checking status, shift filters, and OK/NG summaries',
    year: '2026',
  },
];

const categories = ['All', 'Enterprise', 'ERP Migration', 'HRIS', 'QA Systems', 'Manufacturing Monitoring', 'Education', 'E-Commerce', 'Travel', 'Personal Project', 'Asset Management', 'Enterprise Portal', 'Document Workflow', 'Security Monitoring'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="responsive-section" style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-line" />
        <p className="font-mono" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '16px', textTransform: 'uppercase' }}>
          03 / Projects
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Selected<br />
            <span style={{ color: 'var(--accent)' }}>Work</span>
          </h2>
          <div className="project-filters" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['All', 'Enterprise', 'ERP Migration', 'HRIS', 'QA Systems', 'Manufacturing Monitoring', 'Asset Management', 'Security Monitoring'].map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="font-mono"
                style={{
                  fontSize: '11px', padding: '6px 14px', letterSpacing: '0.08em',
                  border: `1px solid ${activeFilter === f ? 'var(--accent)' : 'var(--border)'}`,
                  color: activeFilter === f ? 'var(--accent)' : 'var(--muted)',
                  background: activeFilter === f ? 'rgba(245,166,35,0.08)' : 'transparent',
                  cursor: 'none', transition: 'all 0.2s', textTransform: 'uppercase',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {filtered.map((p, i) => (
            <div key={p.id} className="project-card" style={{ padding: '32px', borderRadius: '2px', opacity: 0, animation: `fadeIn 0.5s ease ${i * 0.1}s forwards` }}
              onAnimationEnd={(e) => { (e.target as HTMLElement).style.opacity = '1'; }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em' }}>
                  {p.year}
                </span>
                <span className="tag" style={{ fontSize: '10px' }}>{p.category}</span>
              </div>

              {/* Number + Title */}
              <div style={{ marginBottom: '16px' }}>
                <div className="font-display" style={{ fontSize: '48px', fontWeight: 800, color: 'var(--border)', lineHeight: 1, marginBottom: '8px' }}>
                  {p.num}
                </div>
                <h3 className="font-display" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '20px' }}>
                {p.desc}
              </p>

              {/* Highlight */}
              <div style={{
                padding: '10px 14px', background: 'rgba(245,166,35,0.06)',
                border: '1px solid rgba(245,166,35,0.15)',
                borderRadius: '2px', marginBottom: '20px',
              }}>
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--accent)' }}>
                  * {p.highlight}
                </span>
              </div>

              {/* Tech */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {p.tech.map(t => (
                  <span key={t} className="tag" style={{ fontSize: '10px' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
