import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import aboutBanner from "../assets/About_banner.png";
import "../components/About.css";

export default function About() {
  return (
    <>
      <Banner image={aboutBanner} text="" /> {/* bannière sans texte */}
      <div className="about-dropdowns">
        <Dropdown
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Dropdown
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Service"
          content="La disponibilité et la réactivité de nos équipes assurent une expérience de location optimale. Nous mettons tout en œuvre pour satisfaire nos utilisateurs."
        />
        <Dropdown
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Chaque logement répond aux critères de sécurité établis par nos services. Les hôtes et les voyageurs sont également évalués pour garantir la confiance."
        />
      </div>
    </>
  );
}
