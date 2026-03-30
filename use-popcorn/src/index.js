import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// function TestStarRating() {
//   let [rating, setRating] = useState(0);
//   let handleRating = function (ratingValue) {
//     setRating(ratingValue);
//   };
//   return (
//     <>
//       <StarRating onSetRating={handleRating} />
//       <p>
//         {rating > 0 ? `This movie has been rated ${rating}` : "Rate this movie"}
//       </p>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={10} size={36} />
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <TestStarRating /> */}
    <App />
  </React.StrictMode>,
);
