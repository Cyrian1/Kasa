import logo from "../assets/Logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa logo" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
