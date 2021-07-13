import { gql, useQuery } from '@apollo/client';
import { NextPage } from 'next';

const QUERY = gql`
  query quiz($id: String!) {
    quiz(id: $id) {
      id
      title
      choices {
        index
        body
      }
    }
  }
`;

type Choice = {
  index: string;
  body: string;
};

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
  if (error) return <div>Error! ${error.message}</div>;

  return (
    <div>
      <h1>{data.quiz.title}</h1>
      <h3>{id}</h3>
      {data.quiz.choices.map((choice: Choice) => {
        return (
          <div key={choice.index}>
            <p>{choice.index}</p>
            <p>{choice.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default QuizPage;
