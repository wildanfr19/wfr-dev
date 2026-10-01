export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Wildan Fathur Rohman · Fullstack Engineer</span>
        <a href="#" className="nav-link">Back to top ↑</a>
      </div>
    </footer>
  );
}
