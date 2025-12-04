import React, { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [category, setCategory] = useState(null);
  const [start, setStart] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  // ⬅️ Back to home function
  const goHome = () => {
    setStart(false);
    setShowResult(false);
    setScore(0);
    setCategory(null);
  };

  const restart = () => {
    setStart(false);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div>
      {/* HOME PAGE */}
      {!start && !showResult && (
        <Home
          setCategory={setCategory}
          startQuiz={() => setStart(true)}
        />
      )}

      {/* QUIZ PAGE */}
      {start && !showResult && (
        <Quiz
          questions={category}
          setShowResult={setShowResult}
          score={score}
          setScore={setScore}
          goHome={goHome}     // ⬅️ FIXED
        />
      )}

      {/* RESULT PAGE */}
      {showResult && (
        <Result
          score={score}
          total={20}
          restart={restart}
        />
      )}
    </div>
  );
}
export default App;
