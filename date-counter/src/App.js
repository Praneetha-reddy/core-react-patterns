import { useState } from "react";

function App() {
  //Maintain state variables for both step and count.
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  //Calculate target date based on the today's date and count.
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + count);

  const handleStepForward = function () {
    setStep((prevStep) => prevStep + 1);
  };

  const handleStepBackward = function () {
    setStep((prevStep) => {
      if (prevStep > 1) return prevStep - 1;
      return prevStep;
    });
  };

  const handleCountForward = function () {
    setCount((prevCount) => prevCount + step);
  };

  const handleCountBackward = function () {
    setCount((prevCount) => prevCount - step);
  };

  return (
    <div className="container">
      <div className="step">
        <button
          className="btn"
          onClick={handleStepBackward}
          aria-label="Decrease step"
        >
          Previous
        </button>
        <div>Step: {step}</div>
        <button
          className="btn"
          onClick={handleStepForward}
          aria-label="Increase step"
        >
          Next
        </button>
      </div>
      <div className="count">
        <button
          className="btn"
          onClick={handleCountBackward}
          aria-label="Decrease count"
        >
          Previous
        </button>
        <div>Count: {count}</div>
        <button
          className="btn"
          onClick={handleCountForward}
          aria-label="Increase count"
        >
          Next
        </button>
      </div>
      <div className="message">
        <span>
          {count === 0
            ? `Today is `
            : count > 0
              ? `${count} days after today is `
              : `${count} days ago today was `}
        </span>
        <span>{targetDate.toDateString()}</span>
      </div>
    </div>
  );
}

export default App;
