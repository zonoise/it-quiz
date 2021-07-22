import { useQuery, gql } from '@apollo/client';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/navbar';
import { useQuizzesStoreage } from '../../hooks/useQuizzesStoreage';
import { Quiz } from '../../types/types';

const QUERY = gql`
  query {
    quizzes {
      quizNumber
      id
      title
    }
  }
`;

const KEY = 'QUIZ_CURRENT';

const QuizList: React.FC<{ quizzesProp: Quiz[] }> = ({ quizzesProp }) => {
  // const [quizzes, setQuizzes] = useState<Quiz[]>(quizzesProp);

  const [quizzes, removeQuiz, addQuiz, addQuizzes] = useQuizzesStoreage(quizzesProp, KEY);

  return (
    <div>
      {quizzes.map((quiz: Quiz) => (
        <div key={quiz.id}>
          {quiz.quizNumber}
          {quiz.title}
          <Link href={`/quizzes/${encodeURIComponent(quiz.id)}`} passHref>
            <button className="w-16 bg-yellow-300 rounded-xl">{quiz.quizNumber}</button>
          </Link>
          <button
            onClick={() => {
              removeQuiz(quiz);
            }}
          >
            button
          </button>
        </div>
      ))}
    </div>
  );
};

const QuizListPage = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>`index Error! ${error.message}`</div>;

  return (
    <div>
      <Navbar />
      <div>
        <QuizList quizzesProp={data.quizzes} />
      </div>
    </div>
  );
};

export default QuizListPage;
