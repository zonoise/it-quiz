import { Quiz } from '../types/types';
import { useQuizzesStoreage } from '../hooks/useQuizzesStoreage';
import Link from 'next/link';

export const QuizList: React.FC<{ quizzesProp: Quiz[]; storageKey: string }> = ({
  quizzesProp,
  storageKey,
}) => {
  const [quizzes, , ,] = useQuizzesStoreage(quizzesProp, storageKey);

  return (
    <div>
      {quizzes.map((quiz: Quiz) => (
        <div key={quiz.id}>
          {quiz.quizNumber}
          {quiz.title}
          <Link href={`/quizzes/${encodeURIComponent(quiz.id)}`} passHref>
            <button className="w-16 bg-yellow-300 rounded-xl">{quiz.quizNumber}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
