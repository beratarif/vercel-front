export default function Navbar(){
  return(
    <nav className="navbar">
      <div className="nav-container">
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
    </nav>
  )
}