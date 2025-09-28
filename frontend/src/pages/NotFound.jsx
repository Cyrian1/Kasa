import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../components/NotFound.css";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="notfound">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n’existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </>
  );
}
