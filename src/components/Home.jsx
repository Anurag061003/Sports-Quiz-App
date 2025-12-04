import React from "react";
import { cricketQuiz } from "../assets/cricket";
import { tennisQuiz } from "../assets/tennis";
import { ufcQuiz } from "../assets/ufc";
import "./Home.css";

const Home = ({ setCategory, startQuiz }) => {
  return (
    <div className="container d-flex justify-content-center mt-5">
  <div className="card p-5 shadow-lg rounded-4 home-animation w-100" style={{ maxWidth: "800px" }}>
        <h1 className="text-center fw-bold mb-3">Sports Quiz</h1>
        <p className="text-center text-secondary mb-4">Select a Category</p>

        {/* Category Buttons */}
        <div className="d-grid gap-3">

          <button
            className="btn btn-primary py-2"
            onClick={() => {
              setCategory(cricketQuiz);
              startQuiz();
            }}
          >
            🏏 Cricket
          </button>

          <button
            className="btn btn-success py-2"
            onClick={() => {
              setCategory(tennisQuiz);
              startQuiz();
            }}
          >
            🎾 Tennis
          </button>

          <button
            className="btn btn-danger py-2"
            onClick={() => {
              setCategory(ufcQuiz);
              startQuiz();
            }}
          >
            🥊 UFC
          </button>

          <button
            className="btn btn-warning py-2"
            onClick={() => {
              const mixed = [...cricketQuiz, ...tennisQuiz, ...ufcQuiz];
              setCategory(mixed.sort(() => Math.random() - 0.5));
              startQuiz();
            }}
          >
            🔥 Mixed
          </button>

        </div>
      </div>
    </div>
  );
};

export default Home;
