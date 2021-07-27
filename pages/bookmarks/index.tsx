import React from 'react';
import { Navbar } from '../../components/navbar';
import { QuizList } from '../../components/quizList';
import { useQuizzesStoreage } from '../../hooks/useQuizzesStoreage';

const KEY = 'QUIZ_BOOKMARK';

const BookmarkPage = () => {
  const [quizzes, ,] = useQuizzesStoreage(KEY);

  return (
    <div>
      <Navbar />
      <div>
        <QuizList quizzesProp={quizzes} />
      </div>
    </div>
  );
};

export default BookmarkPage;
