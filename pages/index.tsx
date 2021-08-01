import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';
import { Navbar } from '../components/navbar';
import { ExamList } from '../containers/ExamList';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Navbar />

      <div className="flex flex-col items-center flex-grow ">
        <div className="w-full max-w-screen-md bg-gray-400">
          <ExamList />
        </div>
      </div>

      <Footer />
    </div>
  );
}
