import { useState } from 'react';
import { Quiz } from '../types/types';

export const useQuizzesStoreage = (
  initialQuizzes: Quiz[],
  key: string,
): [Quiz[], (q: Quiz) => void, (q: Quiz) => void, (q: Quiz[]) => void] => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(() => {
    try {
      const quizzesStr = localStorage.getItem(key);
      const quizzesList: Quiz[] = quizzesStr ? JSON.parse(quizzesStr) : [];
      if (quizzesList.length > 0) {
        return quizzesList;
      }
      localStorage.setItem(key, JSON.stringify(initialQuizzes));
      return initialQuizzes;
    } catch (e) {
      console.log(e);
      return [];
    }
  });

  const addQuizzes = (quizzes: Quiz[]) => {
    setQuizzes(quizzes);
    localStorage.setItem(key, JSON.stringify(quizzes));
  };

  const addQuiz = (quiz: Quiz) => {

    const sameId = quizzes.find((q) => q.id === quiz.id);
    if(typeof sameId === 'undefined'){
        const newQuizzes = [quiz, ...quizzes]; 
        setQuizzes(newQuizzes);
        localStorage.setItem(key, JSON.stringify(newQuizzes));
    }
  };

  const removeQuiz = (quiz: Quiz) => {
    const filterd = quizzes.filter((q) => {
      return q.id !== quiz.id;
    });
    localStorage.setItem(key, JSON.stringify(filterd));
    setQuizzes([...filterd]);
  };

  return [quizzes, removeQuiz, addQuiz, addQuizzes];
};
