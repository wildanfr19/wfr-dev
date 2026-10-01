type P = { className?: string };
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, viewBox: '0 0 24 24', 'aria-hidden': true };

export const ArrowRight = (p: P) => <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const ChevronLeft = (p: P) => <svg {...base} {...p}><path d="M15 18l-6-6 6-6" /></svg>;
export const ChevronRight = (p: P) => <svg {...base} {...p}><path d="M9 18l6-6-6-6" /></svg>;
export const Close = (p: P) => <svg {...base} {...p}><path d="M18 6L6 18M6 6l12 12" /></svg>;
export const Menu = (p: P) => <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
export const Images = (p: P) => <svg {...base} {...p}><rect x="3" y="5" width="14" height="14" rx="2" /><path d="M7 3h12a2 2 0 0 1 2 2v12" /><path d="M3 15l4-4 4 4 2-2 4 4" /></svg>;
export const Expand = (p: P) => <svg {...base} {...p}><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>;
export const Mail = (p: P) => <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>;
