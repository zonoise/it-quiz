import { gql, useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { Navbar } from '../../components/navbar';
import { Choice } from '../../types/types';
import { ChoiceButton } from '../../components/choiceButton';
import { Footer } from '../../components/footer';
const QUERY = gql`
  query quiz($id: String!) {
    quiz(id: $id) {
      id
      title
      quizNumber
      srcExam
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
          {data.quiz.choices.map((choice: Choice) => {
            return (
                <ChoiceButton key={choice.index} choice={choice} />
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
