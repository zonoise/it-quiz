import { Quiz } from '../types/types';
import Link from 'next/link';
import React from 'react';

export const QuizList: React.FC<{ quizzesProp: Quiz[] }> = ({ quizzesProp }) => {
  return (
    <div>
      {quizzesProp.map((quiz: Quiz) => (
        <div
          className="pt-1 pb-1 h-auto  border-t-2 last:bg-green-400 border-gray-300"
          key={quiz.id}
        >
          <div className="flex justify-center">
            <div className=" w-11 flex justify-center items-center font-bold">
              {quiz.quizNumber}
            </div>
            <div className=" w-32 flex-grow flex items-center overflow-hidden whitespace-nowrap overflow-ellipsis">
              {quiz.title}
            </div>
            <div className=" w-24 flex justify-center items-center">
              <Link href={`/quizzes/${encodeURIComponent(quiz.id)}`} passHref>
                <button className="w-16 h-9 bg-yellow-300 rounded-xl">{quiz.quizNumber}</button>
              </Link>
            </div>
          </div>

          {/* 2行目 */}
          <div className="flex mt-2">
            {/* 試験名 */}
            <div className="ml-2 px-1 text-xs rounded text-gray-600 italic">{quiz.srcExam}</div>

            {/* TAGS */}
            <div className="flex ml-5">
              {quiz.tags
                ?.filter((tag) => tag !== '')
                .map((tag: string) => (
                  <Link key={tag} href={`/quizzes/tags/${encodeURIComponent(tag)}`} passHref>
                    <button className="ml-2 px-1 text-xs rounded bg-gray-100">{tag}</button>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
