import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1); // defining state variable

  const handlePrevious = function () {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  };

  const handleNext = function () {
    if (step < 3) setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <div className="message">
        Step{step}: {messages[step - 1]}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
