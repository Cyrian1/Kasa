import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <img src={logo} alt="Logo Kasa" className="logo" />

        {/* Navigation */}
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
