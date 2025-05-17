// src/components/QuizContext.tsx
import React, { createContext, useState } from "react";

export interface QuizContextType {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

// Use undefined instead of null for better TS support
export const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <QuizContext.Provider value={{ score, setScore, currentIndex, setCurrentIndex }}>
      {children}
    </QuizContext.Provider>
  );
};
