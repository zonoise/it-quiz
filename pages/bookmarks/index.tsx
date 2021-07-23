import React from 'react';
import { Navbar } from '../../components/navbar';
import { QuizList } from '../../components/quizList';

const KEY = 'QUIZ_BOOKMARK';

const BookmarkPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <QuizList quizzesProp={[]} storageKey={KEY} />
      </div>
    </div>
  );
};

export default BookmarkPage;
