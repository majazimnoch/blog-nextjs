import Button from '@/app/components/Button';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Navbar from '../../components/Navbar';
import Group from '../../components/Group';
import Footer from '../../components/Footer';
import Form from '../../components/Form';

export default function Page() {
  return (
    <>
      <Head>
        <title> Form - blog page</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className="flex flex-col gap-10 gap-x-12 gap-y-0 py-5 lg:px-40 lg:py-10">
          <div className="min-w-full mx-auto w-full text-center lg:text-left">
            <h1 className="font-bold">Write a new blog post.</h1>
            <p>Please fill in the form below and click the Submit button.</p>
            <Form />
          </div>
          <div className="flex flex-row gap-10 px-5 py-10 ">
            <Link href="/">
              <Button label="Go to the main page" colour={"yellow"} large />
            </Link>
            <Link href="/posts/usersposts">
              <Button label="Go see your all posts" colour={"yellow"} large />
            </Link>
          </div>
        </div>
        <Group />
        <Footer />
      </div>
    </>
  );
}
