import React from 'react';
import { QuizProvider } from './components/QuizContext'; // ✅ correct path
import Quiz from './components/Quiz';

const App: React.FC = () => {
  return (
    <QuizProvider>
      <div className="App">
        <h1>Simple Quiz App</h1>
        <Quiz />
      </div>
    </QuizProvider>
  );
};

export default App;
