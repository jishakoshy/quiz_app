import React, { useContext } from 'react';
import { QuizContext } from './QuizContext';
import Question from './Question';

const questions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Tool"],
    answer: "Library"
  },
  {
    question: "Who maintains React?",
    options: ["Google", "Microsoft", "Facebook", "Twitter"],
    answer: "Facebook"
  }
];

const Quiz: React.FC = () => {
  const quizContext = useContext(QuizContext);
  if (!quizContext) return null;

  const { currentIndex, score } = quizContext;

  return (
    <>
      {currentIndex < questions.length ? (
        <Question data={questions[currentIndex]} />
      ) : (
        <div className="quiz-container">
          <h2>Quiz Over! ✅</h2>
          <p>Your Score: <strong>{score}</strong> / {questions.length}</p>
        </div>
      )}
    </>
  );
};

export default Quiz;


