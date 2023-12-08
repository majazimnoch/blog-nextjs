import React from 'react';
import Button from '@/app/components/Button';
import Navbar from '@/app/components/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Group from '@/app/components/Group';
import Footer from '@/app/components/Footer';
import GoToTheMainPage from '@/app/components/GoToTheMainPage';
import LoginScreen from '@/app/components/LoginScreen';

const Login: React.FC = () => {
  return (
    <>
      <Head>
        <title> User page - blog page</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <LoginScreen />
        <GoToTheMainPage />
        <Group />
        <Footer />
      </div>
    </>
  );
};

export default Login;