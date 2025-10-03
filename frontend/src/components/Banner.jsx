import bannerImage from "../assets/Home_banner.png";
import "./Banner.css";

export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner-img" />
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  );
}
