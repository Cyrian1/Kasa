import { useState } from "react";
import "./Dropdown.css";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={`chevron ${isOpen ? "down" : "up"}`} />
      </button>

      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
}
