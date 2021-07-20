import { gql, useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { Navbar } from '../../components/navbar';
import { Choice } from '../../types/types';
import { ChoiceButton } from '../../components/choiceButton';
import { Footer } from '../../components/footer';
import { useState } from 'react';
import { Modal } from '../../components/modal';

const QUERY = gql`
  query quiz($id: String!) {
    quiz(id: $id) {
      id
      title
      quizNumber
      srcExam
      answer
      choices {
        index
        body
      }
    }
  }
`;

type Params = {
  params: {
    id: string;
  };
};

type QuizPageProps = {
  id: string;
};

const emojiCorrect = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-9 w-9"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const emojiIncorrct = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-9 w-9"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
      clipRule="evenodd"
    />
  </svg>
);

export const getServerSideProps = async ({ params }: Params) => {
  const { id } = params;
  return {
    props: { id },
  };
};

const QuizPage: NextPage<QuizPageProps> = ({ id }) => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: { id },
  });

  //正解モーダル
  const [isOpenCorrectAnswer, setOpenCorrectAnswer] = useState(false);

  //不正解モーダル
  const [isOpenInCorrectAnswer, setOpenInCorrectAnswer] = useState(false);

  const onChoiceButtonClick = (index: string, answer: string) => {
    if (index === answer) {
      setOpenCorrectAnswer(true);
    } else {
      setOpenInCorrectAnswer(true);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        <div> Error! ${error.message}</div>
        <div> Error! ${error.stack}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-yellow-300">
      <Navbar />

      {isOpenCorrectAnswer && (
        <Modal color={'from-green-100 to-white'} closeFunc={() => setOpenCorrectAnswer(false)}>
          正解{emojiCorrect}
        </Modal>
      )}

      {isOpenInCorrectAnswer && (
        <Modal
          color={'from-red-100 to-white'}
          closeFunc={() => {
            setOpenInCorrectAnswer(false);
          }}
        >
          不正解{emojiIncorrct}
        </Modal>
      )}

      <div className="container mx-auto flex-grow">
        {/* flex-gorw の働きでfooterを下に押し下げ */}

        {/* 問題文 */}
        <div className="bg-gray-50">
          <div className="p-2">
            <span className="text-2xl">問{data.quiz.quizNumber}</span>
            <span className="text-xl">{data.quiz.title}</span>
          </div>
        </div>

        {/* 選択肢 */}
        <div className="bg-red-50 grid  sm:grid-cols-2 gap-2">
          {data.quiz.choices.map(function (choice: Choice) {
            return (
              <ChoiceButton
                key={choice.index}
                choice={choice}
                onClick={() => {
                  onChoiceButtonClick(choice.index, data.quiz.answer);
                }}
              />
            );
          })}
        </div>
        <div>出典{data.quiz.srcExam}</div>
      </div>

      <Footer />
    </div>
  );
};

export default QuizPage;
