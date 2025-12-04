import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Result.css";

const Result = ({ score, total, restart }) => {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 shadow result-card animate-scale" style={{ maxWidth: "450px", width: "100%" }}>

        <h2 className="text-center fw-bold mb-3">Quiz Completed 🎉</h2>

        {/* Score Box */}
        <div className="alert alert-primary text-center">
          <h4 className="mb-1">Your Score</h4>
          <h2 className="fw-bold">{score} / {total}</h2>
        </div>

        {/* Play Again Button */}
        <div className="text-center mt-3">
          <button className="btn btn-primary px-4 py-2" onClick={restart}>
            Play Again
          </button>
        </div>

      </div>
    </div>
  );
};

export default Result;
