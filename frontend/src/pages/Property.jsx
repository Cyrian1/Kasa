import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import PropertyInfo from "../components/PropertyInfo";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown";
import "../components/Property.css";

export default function Property() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => {
        if (!res.ok) {
          navigate("/404"); // si l’ID n’existe pas
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) setProperty(data);
      })
      .catch(() => navigate("/404"));
  }, [id, navigate]);

  if (!property) return null; // évite l'affichage temporaire

  return (
    <>
      <Carousel pictures={property.pictures} />
      <div className="property-content">
        <div className="property-left">
          <PropertyInfo
            title={property.title}
            location={property.location}
            tags={property.tags}
          />
        </div>
        <div className="property-right">
          <Host host={property.host} />
          <Rating rating={property.rating} />
        </div>
      </div>
      <div className="dropdowns">
        <Dropdown title="Description" content={property.description} />
        <Dropdown
          title="Équipements"
          content={
            <ul>
              {property.equipments.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </>
  );
}
