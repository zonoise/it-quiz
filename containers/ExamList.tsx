import { Exam } from '../types/types';
import React from 'react';
import { ExamListComponent } from '../components/examList';
import { useQueryExams } from '../query/queryExams';
import { Loading } from '../components/loading';
import { Error } from '../components/error';

export const ExamList: React.FC = () => {
  const { loading, data, error } = useQueryExams();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  console.log(data);
  const exams: Exam[] = data?.exams || [];

  return <ExamListComponent exams={exams}></ExamListComponent>;
};
