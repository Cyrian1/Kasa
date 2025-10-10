import { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

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

      <div
        ref={contentRef}
        className="dropdown-content-wrapper"
        style={{ maxHeight: `${height}px` }}
      >
        <div className="dropdown-content">{content}</div>
      </div>
    </div>
  );
}
