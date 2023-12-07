import Button from '@/app/components/Button';
import Navbar from '@/app/components/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const ThirdPost: React.FC = () => {
  return (
    <>
      <Head>
        <title> Third post - blog page</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <h1>
          Third or fourth post
        </h1>
        <h2>
          <Link href="/">
            <Button
              label="Go back"
              colour={"yellow"}
              large
            />
          </Link>
        </h2>
      </div>
    </>
  );
};

export default ThirdPost;
