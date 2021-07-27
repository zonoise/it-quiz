import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Navbar } from '../../components/navbar';
import { QuizList } from '../../components/quizList';
export const QUIZZES_QUERY = gql`
  query {
    quizzes {
      quizNumber
      id
      title
    }
  }
`;

const QuizListPage = () => {
  const { loading, error, data } = useQuery(QUIZZES_QUERY);

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
