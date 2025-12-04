import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Quiz.css";

const Quiz = ({ questions, setShowResult, score, setScore, goHome }) => {
  const limitedQuestions = questions.slice(0, 20);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(20);

  const question = limitedQuestions[index];

  // SIMPLE TIMER (NO ANIMATION)
  useEffect(() => {
    if (time === 0) {
      handleTimeout();
      return;
    }

    const timer = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const handleTimeout = () => {
    setSelected("timeout");
    setTimeout(() => next(), 600);
  };

  const selectAnswer = (optionNumber) => {
    if (selected !== null) return;

    setSelected(optionNumber);

    if (optionNumber === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const next = () => {
    if (index === limitedQuestions.length - 1) {
      setShowResult(true);
      return;
    }

    setIndex(index + 1);
    setSelected(null);
    setTime(20); // reset timer for next question
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">

      <div className="card p-4 shadow quiz-card" style={{ maxWidth: "400px", width: "100%" }}>

        {/* Question */}
        <h4 className="mb-2">
          {index + 1}. {question.question}
        </h4>

        {/* PLAIN TIMER (TEXT ONLY) */}
        <p className="fw-bold text-primary">
          ⏳ Time left: {time}s
        </p>

        {/* Options */}
        <ul className="list-group">
          {[1, 2, 3, 4].map((num) => {
            const option = question[`option${num}`];

            let className = "list-group-item list-group-item-action mb-2";
            if (selected !== null) {
              if (num === question.answer) className += " correct";
              else if (num === selected) className += " wrong";
            }

            return (
              <li
                key={num}
                className={className}
                onClick={() => selectAnswer(num)}
                style={{ cursor: "pointer" }}
              >
                {option}
              </li>
            );
          })}
        </ul>

        {/* Next Button */}
        <button
          className="btn btn-primary mt-3"
          onClick={next}
          disabled={selected === null}
        >
          Next →
        </button>

        <p className="text-center mt-3 fw-bold">
          {index + 1} / {limitedQuestions.length}
        </p>

        {/* Back Button */}
        <button className="btn btn-outline-secondary mb-3" onClick={goHome}>
          ← Back to Home
        </button>

      </div>
    </div>
  );
};

export default Quiz;
