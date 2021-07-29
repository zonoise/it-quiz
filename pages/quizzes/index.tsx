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
      <h1 className="h-16 text-2xl font-semibold flex justify-center items-center bg-white text-gray-800 tracking-widest shadow">
        問題一覧
      </h1>
      <div className="flex flex-col items-center ">
        <div className="w-full max-w-screen-md">
          <QuizList quizzesProp={data.quizzes} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizListPage;
