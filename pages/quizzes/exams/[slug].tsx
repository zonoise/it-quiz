import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Footer } from '../../../components/footer';
import { Navbar } from '../../../components/navbar';
import { QuizList } from '../../../components/quizList';
import { ParsedUrlQuery } from 'querystring';
import { Quiz } from '../../../types/types';
import { queryQuizzesByExam } from '../../../query/queryQuizzesByExam';
import { queryExamBySlug, queryExams } from '../../../query/queryExams';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface PageProps {
  quizzes: Quiz[];
  slug: string;
  title: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { data } = await queryExams();

  const paramsList = data.exams.map((exam) => {
    return { params: { slug: exam.slug } };
  });

  return {
    paths: paramsList,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PageProps, Params> = async ({ params }) => {
  const result = await queryExamBySlug(params.slug);
  const title = result.data.examBySlug.title || '';

  const { data } = await queryQuizzesByExam(params.slug);

  if (!data || !data.findQuizzesByExam) {
    return {
      props: { slug: params.slug, title: '', quizzes: [] },
      revalidate: 1,
    };
  }

  const quizList = data.findQuizzesByExam;

  return {
    props: { slug: params.slug, title: title, quizzes: quizList },
    revalidate: 1,
  };
};

const ExamSlugPage: NextPage<PageProps> = ({ slug, quizzes, title }) => {
  return (
    <div className="">
      <Navbar />
      <h1 className="h-16 text-2xl font-semibold flex justify-center items-center bg-white text-gray-800 tracking-widest shadow">
        {title}
      </h1>
      <div className="flex flex-col items-center ">
        <div className="w-full max-w-screen-md">
          <QuizList quizzesProp={quizzes} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExamSlugPage;
