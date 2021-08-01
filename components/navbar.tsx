import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <div className="bg-gray-200 h-10 flex items-center justify-start shadow divide-x divide-gray-400  ">
      <Link href={`/`} passHref>
        <a>
          <div className="block px-4 h-full font-bold  text-center">ホーム</div>
        </a>
      </Link>

      <Link href={`/quizzes/`} passHref>
        <a>
          <div className="px-4 h-full   font-bold text-center">問題一覧</div>
        </a>
      </Link>

      <Link href={`/bookmarks/`} passHref>
        <a>
          <button className="px-4 h-full font-bold  text-center">お気に入り</button>
        </a>
      </Link>
    </div>
  );
};
