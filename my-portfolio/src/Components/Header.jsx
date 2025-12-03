import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">R U J A S</Link>

        <nav className="menu-desktop">
          <Link to="/nosotros">About me</Link>
          <Link to="/collections">Projects</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact me</Link>
        </nav>

        {/* mobile button */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <nav className="menu-mobile">
          <Link to="/nosotros" onClick={() => setOpen(false)}>About me</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact me</Link>
          <Link to="/collections" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>

        </nav>
      )}
    </header>
  );
}
