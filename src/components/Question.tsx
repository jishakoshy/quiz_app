import React, { useContext, useEffect, useRef, useState } from "react";
import { QuizContext } from "./QuizContext";
import '../styles/Quiz.css';

interface QuestionProps {
  data: {
    question: string;
    options: string[];
    answer: string;
  };
}

const Question: React.FC<QuestionProps> = ({ data }) => {
  const quizContext = useContext(QuizContext);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    if (quizContext) {
      nextBtnRef.current?.focus();
    }
  }, [quizContext?.currentIndex]);

  if (!quizContext) return null;

  const { currentIndex, setCurrentIndex, setScore } = quizContext;

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === data.answer) {
      setScore((prev) => prev + 1);
    }
    setSelectedOption(null); // Reset for next question
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="quiz-container">
      <h2>Question {currentIndex + 1}</h2>
      <p>{data.question}</p>
      <ul>
        {data.options.map((option, idx) => (
          <li key={idx}>
            <button
              onClick={() => handleOptionClick(option)}
              style={{
                backgroundColor:
                  selectedOption === option ? "#007bff" : "#e7f3ff",
                color: selectedOption === option ? "white" : "#007bff",
                borderColor: "#007bff",
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <button
        ref={nextBtnRef}
        className="next-btn"
        onClick={handleNext}
        disabled={!selectedOption} // Disable "Next" until an option is selected
      >
        Next
      </button>
    </div>
  );
};

export default Question;
