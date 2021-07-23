import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Navbar } from '../../components/navbar';
import { QuizList } from '../../components/quizList';
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

const QuizListPage = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>`index Error! ${error.message}`</div>;

  return (
    <div>
      <Navbar />
      <div>
        <QuizList quizzesProp={data.quizzes} storageKey={KEY} />
      </div>
    </div>
  );
};

export default QuizListPage;
