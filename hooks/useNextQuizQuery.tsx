import { ApolloError, gql, useQuery } from '@apollo/client';
import { Quiz } from '../types/types';

const QUERY_NEXT = gql`
  query nextQuiz($id: String!) {
    nextQuiz(id: $id) {
      id
    }
  }
`;

export const useNextQuizQuery = (
  id: string,
): [boolean, ApolloError | undefined, { nextQuiz: Quiz } | undefined] => {
  const { loading, error, data } = useQuery<{ nextQuiz: Quiz }>(QUERY_NEXT, {
    variables: { id },
  });

  return [loading, error, data];
};
