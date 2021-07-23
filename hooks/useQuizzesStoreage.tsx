import { useEffect, useState } from 'react';
import { Quiz } from '../types/types';

export const useQuizzesStoreage = (
  initialQuizzes: Quiz[],
  key: string,
): [Quiz[], (q: Quiz) => void, (q: Quiz) => void, (q: Quiz[]) => void] => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(initialQuizzes);

  useEffect(() => {
    const quizzesStr = localStorage.getItem(key);
    const quizzesList: Quiz[] = quizzesStr ? JSON.parse(quizzesStr) : [];
    setQuizzes(quizzesList);
  }, []);

  useEffect(() => {
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
