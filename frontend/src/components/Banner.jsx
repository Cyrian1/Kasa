import bannerImage from "../assets/Home_banner.png";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Paysage" className="banner-img" />
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}
