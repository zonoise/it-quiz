import { Exam } from '../types/types';
import Link from 'next/link';
import React from 'react';

export const ExamListComponent: React.FC<{ exams: Exam[] }> = ({ exams }) => {
  return (
    <div>
      {exams.map((e) => (
        <div key={e.id} className="flex shadow">
          <Link key={e.slug} href={`/quizzes/exams/${encodeURIComponent(e.slug)}`} passHref>
            <a className="text-lg w-full px-2 py-2 block hover:bg-gray-100"> {e.title} </a>
          </Link>
        </div>
      ))}
    </div>
  );
};
