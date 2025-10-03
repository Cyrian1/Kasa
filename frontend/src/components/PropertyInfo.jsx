import Tag from "./Tag";
import "./PropertyInfo.css";

export default function PropertyInfo({ title, location, tags }) {
  return (
    <div className="property-info">
      <h1>{title}</h1>
      <p className="location">{location}</p>
      <div className="tags">
        {tags.map((tag, i) => (
          <Tag key={i} label={tag} />
        ))}
      </div>
    </div>
  );
}
