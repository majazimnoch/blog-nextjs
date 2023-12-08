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
              <Link href="/posts/form">
                <Button label="Add a new post" colour={"yellow"} large />
              </Link>
              <Link href="/posts/user">
                <Button label="Go to your profile" colour={"yellow"} large />
              </Link>
            </div>
       
            <div className="flex flex-col gap-5">
              <h1 className="font-bold">Your all posts</h1>
              <div className="flex flex-row gap-40 bg-snow p-5 transition duration-300 ease-in-out hover:border-gray-500 hover:shadow-lg">
                <div>
                  <h1>/Title of the post</h1>
                  <p>Published: /when</p>
                </div>
                <div>
                  <Image
                    src="/images/logo-b.png"
                    alt="logo"
                    width={30}
                    height={30}
                    className="rounded"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-40 bg-snow p-5 transition duration-300 ease-in-out hover:border-gray-500 hover:shadow-lg">
                <div>
                  <h1>/Title of the post</h1>
                  <p>Published: /when</p>
                </div>
                <div>
                  <Image
                    src="/images/logo-b.png"
                    alt="logo"
                    width={30}
                    height={30}
                    className="rounded"
                  />
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