export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="desktop-nav">
          <h2 className="nav-head">Berat.</h2>

          <div className="nav-list">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
        <div className="mobile-menu">
          <h2 className="nav-head">Berat.</h2>
          <div className="nav-list">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
