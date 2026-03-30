/**
 * StarRating
 * Reusable star rating component.
 * Props:
 * - maxRating: number of stars (default 5)
 * - messages: optional messages for each rating
 * - color: star color
 * - size: star pixel size
 * - defaultRating: initial rating
 * - onSetRating: callback invoked with the selected rating
 */
import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

function Star({ isFull, onRate, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    height: `${size}px`,
    width: `${size}px`,
    cursor: "pointer",
  };

  return (
    <span
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      style={starStyle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={isFull ? `${color}` : "none"}
        stroke={color}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </span>
  );
}

export default function StarRating({
  maxRating = 5,
  messages = [],
  color = "#fcc419",
  size = 24,
  defaultRating = 0,
  onSetRating, //Crucial callback
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(ratingValue) {
    setRating(ratingValue);
    if (onSetRating) {
      onSetRating(ratingValue);
    }
  }

  const textStyle = {
    margin: "0px",
    color: `${color}`,
    fontSize: `${size / 1.5}px`,
  };

  const activeRating = tempRating || rating;
  const displayText =
    messages.length === maxRating
      ? activeRating > 0
        ? messages[activeRating - 1]
        : ""
      : activeRating || "";

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            isFull={tempRating ? tempRating > i : rating > i}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{displayText}</p>
    </div>
  );
}
