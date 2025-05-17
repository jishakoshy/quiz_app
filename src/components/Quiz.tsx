import React, { useContext } from 'react';
import { QuizContext } from './QuizContext'; // ✅ since it's in the same folder
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

  // ✅ Proper type-check to avoid TS2339 error
  if (!quizContext) return null;

  const { currentIndex } = quizContext;

  return (
    <>
      {currentIndex < questions.length ? (
        <Question data={questions[currentIndex]} />
      ) : (
        <h2>Quiz Over! ✅</h2>
      )}
    </>
  );
};

export default Quiz;
