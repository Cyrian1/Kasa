import "./Rating.css";

export default function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <span
          key={star}
          className={star <= rating ? "star filled" : "star"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
