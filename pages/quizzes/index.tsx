import { useQuery, gql } from '@apollo/client';
import { NextPage } from 'next';
import React, { useState } from 'react';
import Link from 'next/link'
import { Navbar } from '../../components/navbar';

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
const QuizList:React.FC<{ quizzesProp: Quiz[] }> = ({ quizzesProp }) => {

  const [quizzes,setQuizzes] = useState<Quiz[]>(quizzesProp);

  return (
    <div>
    {quizzes.map((quiz: Quiz) => (
      <div key={quiz.id}>
        {quiz.quizNumber}
        {quiz.title}
        <Link href={`/quizzes/${encodeURIComponent(quiz.id)}`} passHref>
          <button className="w-16 bg-yellow-300 rounded-xl">{quiz.quizNumber}</button>
       </Link>
      </div> 
    ))}
    </div>
  );
}

const QuizListPage = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>`index Error! ${error.message}`</div>;

  return (
    <div>
      <Navbar />
      <div>
      {/* {data.quizzes.map((quiz: Quiz) => (
        <div key={quiz.id}>
          
          {quiz.quizNumber}
          {quiz.title}
          <Link href={`/quizzes/${encodeURIComponent(quiz.id)}`}>
            <button className="w-16 bg-yellow-300 rounded-xl">{quiz.quizNumber}</button>
         </Link>
        </div>
      ))} */}
        <QuizList quizzesProp={data.quizzes}/>
      </div>
    </div>
  );
};

export default QuizListPage;
