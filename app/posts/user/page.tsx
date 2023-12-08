import React from 'react';
import Button from '@/app/components/Button';
import Navbar from '@/app/components/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Group from '@/app/components/Group';
import Footer from '@/app/components/Footer';

const FourthPost: React.FC = () => {
  return (
    <>
      <Head>
        <title> User page - blog page</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className="flex flex-col gap-10 gap-x-12 gap-y-0 py-5 lg:px-40 lg:py-10 m-5">
          <div className="flex flex-col min-w-full mx-auto w-full text-center lg:text-left gap-5">
            <h1 className="font-bold">Welcome NameOfTheUser.</h1>
            <div className="flex flex-row gap-5 justify-center lg:justify-start">
              <Link href="/posts/editprofile">
                <Button label="Edit your info" colour={"yellow"} large />
              </Link>
              <Link href="/posts/usersposts">
                <Button label="Go to your all posts" colour={"yellow"} large />
              </Link>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-5 bg-snow p-5">
              <div>
                <Image
                  src="/images/paris.jpg"
                  alt="logo"
                  width={450}
                  height={30}
                />
              </div>
              <div className="p-5 lg:p-0">
                <div className="flex flex-col">
                  <h3>My top afirmation (what I repeat every day): </h3>
                  <p>Answer</p>
                </div>
                <div className="flex flex-col">
                  <h3>My personal growth moment: </h3>
                  <p>Answer</p>
                </div>
                <div className="flex flex-col">
                  <h3>I am forever grateful for: </h3>
                  <p>Answer</p>
                </div>
                <div className="flex flex-col">
                  <h3>A book/movie quote that inspires me: </h3>
                  <p>Answer</p>
                </div>
                <div className="flex flex-col">
                  <h3>My safe place: </h3>
                  <p>Answer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10 px-5 py-10 ">
            <Link href="/">
              <Button label="Go to the main page" colour={"yellow"} large />
            </Link>
          </div>
        </div>
        <Group />
        <Footer />
      </div>
    </>
  );
};

export default FourthPost;