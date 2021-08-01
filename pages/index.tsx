import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';
import { Navbar } from '../components/navbar';
import { ExamList } from '../containers/ExamList';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="w-full p-3 flex justify-center">
        <div className="w-full max-w-screen-md  p-3 shadow-md bg-yellow-100 rounded-xl">
          <pre>{process.env.NEXT_PUBLIC_TOP_TEXT}</pre>
        </div>
      </div>

      <div className="flex flex-col items-center flex-grow ">
        <div className="w-full max-w-screen-md bg-gray-50">
          <h2 className="text-2xl  text-center font-bold py-3 bg-gray-200">試験一覧</h2>
          <ExamList />
        </div>
      </div>

      <Footer />
    </div>
  );
}
