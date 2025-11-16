import './Navigation.css';

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Joseph Choi</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('intro')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
        </ul>
        <div className="nav-contacts">
          <a href="mailto:joseph27choi@gmail.com" className="nav-icon" title="Email" target="_blank" rel="noopener noreferrer">
            {/* Email SVG */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
          </a>
          <a href="https://github.com/joseph27choi" className="nav-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
            {/* GitHub SVG */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.18 9.18 0 012.5-.34c.85 0 1.71.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/josephchoi27-ece/" className="nav-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            {/* LinkedIn SVG */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8"/><line x1="12" y1="11" x2="12" y2="16"/><path d="M16 11v3a2 2 0 0 1-4 0v-3"/></svg>
          </a>
          <a href="https://medium.com/@choi.joseph0302" className="nav-icon" title="Medium" target="_blank" rel="noopener noreferrer">
            {/* Medium SVG */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="3"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="12" r="2"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
