import { useEffect, useState } from 'react';
import { Quiz } from '../types/types';

export type useQuizzesStoreageReturnType = [
  Quiz[],
  (q: Quiz) => void,
  (q: Quiz) => void,
  (q: Quiz[]) => void,
];

export const useQuizzesStoreage = (key: string): useQuizzesStoreageReturnType => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    //load from localStorage
    const quizzesStr = localStorage.getItem(key);
    const quizzesList: Quiz[] = quizzesStr ? JSON.parse(quizzesStr) : [];
    setQuizzes(quizzesList);
  }, []);

  useEffect(() => {
    //save to localStorage
    localStorage.setItem(key, JSON.stringify(quizzes));
  }, [quizzes]);

  const addQuizzes = (quizzes: Quiz[]) => {
    setQuizzes(quizzes);
  };

  const addQuiz = (quiz: Quiz) => {
    const sameId = quizzes.find((q) => q.id === quiz.id);
    if (typeof sameId === 'undefined') {
      const newQuizzes = [quiz, ...quizzes];
      setQuizzes(newQuizzes);
    }
  };

  const removeQuiz = (quiz: Quiz) => {
    const filterd = quizzes.filter((q) => {
      return q.id !== quiz.id;
    });
    setQuizzes([...filterd]);
  };

  return [quizzes, removeQuiz, addQuiz, addQuizzes];
};
