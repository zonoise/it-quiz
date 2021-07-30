import { ApolloQueryResult, gql } from '@apollo/client';
import { client } from '../pages/_app';
import { Quiz } from '../types/types';

export const QUIZZES_QUERY = gql`
  query findQuizzesByExam($exam: String!) {
    findQuizzesByExam(exam: $exam) {
      id
      title
      quizNumber
      srcExam
      answer
      tags
    }
  }
`;

export const queryQuizzesByExam = async (
  slug: string,
): Promise<ApolloQueryResult<{ findQuizzesByExam: Quiz[] }>> => {
  return await client.query<{ findQuizzesByExam: Quiz[] }>({
    query: QUIZZES_QUERY,
    variables: { exam: slug },
  });
};
