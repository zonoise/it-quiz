import Link from 'next/link';
import React from 'react';
import { useNextQuizQuery } from '../hooks/useNextQuizQuery';

export const NextQuizButton: React.FC<{ id: string }> = ({ id }) => {
  const [loading, error, data] = useNextQuizQuery(id);

  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  if (data === undefined || !data.nextQuiz) {
    return <div>nextquiz not found</div>;
  }

  return (
    <Link href={`/quizzes/${encodeURIComponent(data.nextQuiz.id)}`} passHref>
      <button> 次 </button>
    </Link>
  );
};
