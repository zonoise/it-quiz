import { Quiz } from '../types/types';
import Link from 'next/link';
import React from 'react';

export const QuizList: React.FC<{ quizzesProp: Quiz[] }> = ({ quizzesProp }) => {
  return (
    <div>
      {quizzesProp.map((quiz: Quiz) => (
        <div className="pt-1 pb-1 h-auto shadow " key={quiz.id}>
          <div className="flex justify-center">
            <div className=" w-11 flex justify-center items-center font-bold">
              {quiz.quizNumber}
            </div>
            <div className="w-20 flex-grow  flex  items-center  ">
              <Link href={`/quizzes/${encodeURIComponent(quiz.id)}`} passHref>
                <a className="w-full block whitespace-nowrap overflow-hidden overflow-ellipsis">
                  {quiz.title}
                </a>
              </Link>
            </div>
            <div className="w-12 flex justify-center items-center">
              <button
                title="お気に入りに保存"
                className="px-2 w-9 h-9 bg-gray-100 text-gray-600 text-md rounded-full"
              >
                ♥️
              </button>
            </div>
          </div>

          {/* 2行目 */}
          <div className="flex justify-start  mt-2">
            {/* 試験名 */}
            <div className="ml-2 px-1 text-xs rounded text-gray-600 italic">{quiz.srcExam}</div>

            {/* TAGS */}
            <div className="flex flex-grow ml-5">
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
