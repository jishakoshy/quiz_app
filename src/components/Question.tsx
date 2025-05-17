import React, { useContext, useEffect, useRef } from "react";
import { QuizContext } from "./QuizContext";

interface QuestionProps {
  data: {
    question: string;
    options: string[];
    answer: string;
  };
}

const Question: React.FC<QuestionProps> = ({ data }) => {
  // Call hooks unconditionally
  const quizContext = useContext(QuizContext);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  // After hooks, do the null check and early return
  if (!quizContext) return null;

  const { currentIndex } = quizContext;

  useEffect(() => {
    nextBtnRef.current?.focus();
    console.log(`Question ${currentIndex + 1} displayed`);
  }, [currentIndex]);

  return (
    <div>
      <h2>Question {currentIndex + 1}</h2>
      <p>{data.question}</p>
      <ul>
        {data.options.map((option, idx) => (
          <li key={idx}>{option}</li>
        ))}
      </ul>
      <button ref={nextBtnRef}>Next</button>
    </div>
  );
};

export default Question;
