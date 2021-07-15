import { useQuery, gql } from '@apollo/client';
import { NextPage } from 'next';
import React from 'react';

const QUERY = gql`
  query {
    quizzes {
      quizNumber
      id
      title
    }
  }
`;

interface Quiz {
  id: string;
  quizNumber: number;
  title: string;
  choices: [Choice];
  srcExam: string;
}

interface Choice {
  index: string;
  body: string;
}

const QuizList = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>`index Error! ${error.message}`</div>;

  return (
    <div>
      <hr />
      {data.quizzes.map((quiz: Quiz) => (
        <li key={quiz.id}>
          {quiz.id}
          {quiz.quizNumber}
          {quiz.title}
        </li>
      ))}
    </div>
  );
};

export default QuizList;
