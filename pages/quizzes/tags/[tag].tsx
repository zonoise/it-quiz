import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { Navbar } from '../../../components/navbar';
import { QuizList } from '../../../components/quizList';
import { Quiz } from '../../../types/types';
import { gql } from '@apollo/client';
import { client } from '../../_app';

interface Params extends ParsedUrlQuery {
  tag: string;
}

const query_tags = gql`
  query {
    tags {
      slug
    }
  }
`;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { data } = await client.query<{ tags: [{ slug: string }] }>({
    query: query_tags,
  });

  const paramsList = data.tags.map((tag) => {
    return { params: { tag: tag.slug } };
  });

  return {
    paths: paramsList,
    fallback: true,
  };
};

interface PageProps {
  tag: string;
  quizList: Quiz[];
}

const query_quizzes = gql`
  query findQuizzesByTags($tags: [String!]!) {
    findQuizzesByTags(tags: $tags) {
      quizNumber
      id
      title
    }
  }
`;

export const getStaticProps: GetStaticProps<PageProps, Params> = async ({ params }) => {
  const tag = params!.tag;
  const { data } = await client.query<{ findQuizzesByTags: Quiz[] }>({
    query: query_quizzes,
    variables: {
      tags: [tag],
    },
  });

  if (!data || !data.findQuizzesByTags) {
    console.log(data);
    return {
      props: { tag: tag, quizList: [] },
      revalidate: 1,
    };
  }

  console.log(data.findQuizzesByTags);
  const quizList = data.findQuizzesByTags;

  return {
    props: { tag: tag, quizList: quizList },
    revalidate: 1,
  };
};

const TagQuizListPage: NextPage<PageProps> = ({ tag, quizList }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <h2>{tag}</h2>
      <QuizList quizzesProp={quizList} />
    </div>
  );
};

export default TagQuizListPage;
