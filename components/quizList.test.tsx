import '@testing-library/jest-dom';

import * as React from 'react';
import { render } from '@testing-library/react';
import { QuizList } from './quizList';
import { Quiz } from '../types/types';
import { MockedResponse } from '@apollo/client/testing';
import { QUIZZES_QUERY } from '../pages/quizzes';

test('リンクのタイトルが表示されていること', () => {
  const quizzes: Quiz[] = [
    {
      id: '1',
      title: 'oneplusone',
      quizNumber: '1',
      srcExam: '2020SPRING',
      answer: '2',
      choices: [
        { index: '1', body: '1' },
        { index: '2', body: '2' },
      ],
    },
    {
      id: '2',
      title: 'oneplustwo',
      quizNumber: '2',
      srcExam: '2020SPRING',
      answer: '1',
      choices: [
        { index: '1', body: '3' },
        { index: '2', body: '2' },
      ],
    },
  ];

  const mocks: MockedResponse[] = [
    {
      request: {
        query: QUIZZES_QUERY,
        variables: {},
      },
      result: {
        data: {
          quizzes: [
            {
              id: '1',
              title: 'oneplusone',
              quizNumber: '1',
              srcExam: '2020SPRING',
              answer: '2',
              choices: [
                { index: '1', body: '1' },
                { index: '2', body: '2' },
              ],
            },
            {
              id: '2',
              title: 'oneplustwo',
              quizNumber: '2',
              srcExam: '2020SPRING',
              answer: '1',
              choices: [
                { index: '1', body: '3' },
                { index: '2', body: '2' },
              ],
            },
          ],
        },
      },
    },
  ];

  const key = 'TEST_LOCALSTORAGE_KEY';

  const root = render(<QuizList quizzesProp={quizzes} />);
});
