import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';
import { QuizList } from '../../components/quizList';
export const QUIZZES_QUERY = gql`
  query {
    quizzes {
      id
      title
      quizNumber
      srcExam
      answer
      tags
    }
  }
`;

const QuizListPage = () => {
  const { loading, error, data } = useQuery(QUIZZES_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>`index Error! ${error.message}`</div>;

  return (
    <div className="">
      <Navbar />
      <div className="">
        <QuizList quizzesProp={data.quizzes} />
      </div>
      <Footer />
    </div>
  );
};

export default QuizListPage;
