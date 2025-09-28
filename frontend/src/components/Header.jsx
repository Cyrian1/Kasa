import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="logo" />
      <nav>
        <NavLink
          to="/"
          end   // <-- indispensable pour que "Accueil" soit actif uniquement sur /
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}
