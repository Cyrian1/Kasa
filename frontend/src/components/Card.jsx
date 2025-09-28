import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/properties/${id}`} className="card">
      <img src={cover} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
    </Link>
  );
}
