import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (<header className="bg-red-50 h-10">
     <Link href={`/quizzes/`} passHref>
            <button className="w-16">問題一覧</button>
     </Link>
  </header>);
};
