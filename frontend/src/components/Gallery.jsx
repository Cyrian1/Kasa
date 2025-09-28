import { useEffect, useState } from "react";
import Card from "./Card";
import "./Gallery.css";

export default function Gallery() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  return (
    <div className="gallery">
      {properties.map((property) => (
        <Card
          key={property.id}
          id={property.id}
          title={property.title}
          cover={property.cover}
        />
      ))}
    </div>
  );
}
