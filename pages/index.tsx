import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';
import { Navbar } from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
