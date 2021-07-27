import React from 'react';
import { Quiz } from '../types/types';

export const ModalInCorrect: React.FC<{
  quiz: Quiz;
  closeFunc: () => void;
  bookMarkFunc: (quiz: Quiz) => void;
}> = ({ quiz, closeFunc, bookMarkFunc, children }) => {
  const boxStyle =
    'from-red-100 to-white bg-gradient-to-b w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto animate-incorrect-answer';

  const title = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
      不正解
    </>
  );
  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="absolute w-full h-full bg-gray-900 opacity-70"></div>

      <div className={boxStyle}>
        <div className="">
          {/* <!--Title--> */}
          <div
            className="flex justify-center items-center          
          h-24 text-4xl  font-extrabold font-sans text-black-800 "
          >
            {title}
          </div>

          {/* <!--Footer--> */}
          <div className="flex justify-between pb-2">
            <button
              onClick={() => {
                bookMarkFunc(quiz);
                closeFunc();
              }}
              className="block w-24 mx-2 p-3 text-sm bg-red-300 rounded text-black hover:bg-red-400"
            >
              メモ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>

            <button className="w-48  flex-grow  mx-1 p-3  text-xl bg-red-300 rounded  text-black  hover:bg-red-400">
              次の問題
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                closeFunc();
              }}
              className="block w-24 mx-2 text-sm bg-red-300 p-3 rounded text-black hover:bg-red-400"
            >
              閉じる
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
