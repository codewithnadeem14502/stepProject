import { useState } from "react";
import "./App.css";
import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  function handlerNextClick() {
    if (step < 3) setStep(step + 1);
  }
  function handlerPrevClick() {
    if (step > 1) setStep(step - 1);
  }
  return (
    <>
      <div className="step">
        <h1>Dynamic Component</h1>
      </div>
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <p className="message">{messages[step - 1]} </p>

        <div className="buttons">
          <button
            style={{ background: "#7850f2", color: "#FFF" }}
            onClick={handlerPrevClick}
          >
            prev
          </button>
          <button
            style={{ background: "#7850f2", color: "#FFF" }}
            onClick={handlerNextClick}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
