import { RenderResult, renderHook, act } from '@testing-library/react-hooks';
import { Quiz } from '../types/types';
import { useQuizzesStoreage, useQuizzesStoreageReturnType } from './useQuizzesStoreage';

describe('useQuizzesStoreage', () => {
  let result: RenderResult<useQuizzesStoreageReturnType>;
  const key = 'test_key';

  beforeEach(() => {
    const storageData = localStorage.getItem(key);
    if (storageData) {
      throw new Error('データがあるのはおかしい');
    }

    result = renderHook(() => useQuizzesStoreage(key)).result;
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('countの初期値は0になっている', () => {
    const [quizzes, , ,] = result.current;
    expect(quizzes.length).toBe(0);
  });

  test('addした後に増えてる0->1', () => {
    const [, , addQuiz] = result.current;

    const quiz: Quiz = {
      id: '123',
      title: '123',
      quizNumber: '1',
      srcExam: 'aa',
      answer: '1',
      choices: [],
    };

    act(() => {
      addQuiz(quiz);
    });

    const [quizzes, , ,] = result.current;

    expect(quizzes.length).toBe(1);
  });

  test('addQuizzesした後に増えてる0->2', () => {
    const [, , , addQuizzes] = result.current;

    const quiz1: Quiz = {
      id: '1',
      title: '11',
      quizNumber: '1',
      srcExam: 'aa',
      answer: '1',
      choices: [],
    };
    const quiz2: Quiz = {
      id: '2',
      title: '22',
      quizNumber: '1',
      srcExam: 'aa',
      answer: '1',
      choices: [],
    };

    act(() => {
      addQuizzes([quiz1, quiz2]);
    });

    const [quizzes, , ,] = result.current;

    expect(quizzes.length).toBe(2);
  });
});
