import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <div className="bg-gray-200 h-10 flex items-center justify-start shadow divide-x divide-gray-400  ">
      <Link href={`/`} passHref>
        <button className="px-4 h-full font-bold  text-center">ホーム</button>
      </Link>

      <Link href={`/quizzes/`} passHref>
        <button className="px-4 h-full   font-bold text-center">問題一覧</button>
      </Link>
      <Link href={`/bookmarks/`} passHref>
        <button className="px-4 h-full font-bold  text-center">お気に入り</button>
      </Link>
    </div>
  );
};
