import { ApolloQueryResult, gql } from '@apollo/client';
import { client } from '../pages/_app';
import { Exam } from '../types/types';

const EXAMS_QUERY = gql`
  query {
    exams {
      id
      slug
      title
    }
  }
`;

export const queryExams = async (): Promise<ApolloQueryResult<{ exams: Exam[] }>> => {
  return await client.query<{ exams: Exam[] }>({
    query: EXAMS_QUERY,
  });
};

const EXAM_SLUG_QUERY = gql`
  query examBySlug($slug: String!) {
    examBySlug(slug: $slug) {
      id
      slug
      title
    }
  }
`;

export const queryExamBySlug = async (
  slug: string,
): Promise<ApolloQueryResult<{ examBySlug: Exam }>> => {
  return await client.query<{ examBySlug: Exam }>({
    query: EXAM_SLUG_QUERY,
    variables: {
      slug: slug,
    },
  });
};
