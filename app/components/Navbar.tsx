"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="nav-head">Berat Arif G.</h2>

        {/* Desktop Menu */}
        <div className="nav-list desktop">
          <a className="nav-link" href="#about">Hakkımda</a>
          <a className="nav-link" href="#abilities">Yetenekler</a>
          <a className="nav-link" href="#projects">Projeler</a>
          <a className="nav-link" href="#contact">İletişim</a>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          Hakkımda
        </a>
        <a href="#abilities" onClick={() => setMenuOpen(false)}>
          Yetenekler
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projeler
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          İletişim
        </a>
      </div>
    </nav>
  );
}
