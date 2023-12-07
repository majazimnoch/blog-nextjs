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
        <div className="flex flex-col gap-10 gap-x-12 gap-y-0 py-5 lg:px-40 lg:py-10">
          <div className="flex flex-col min-w-full mx-auto w-full text-center lg:text-left gap-5">
            <h1 className="font-bold">Welcome NameOfTheUser.</h1>
            <div className="grid grid-cols-3 grid-rows-1 gap-5">
              <div>
                <Image
                  src="/images/paris.jpg"
                  alt="logo"
                  width={450}
                  height={30}
                />
              </div>
              <div>
                <h3>My top afirmation (what I repeat every day): ...</h3>
                <h3>My personal growth moment: ...</h3>
                <h3>I am forever grateful for: ...</h3>
                <h3>A book/movie quote that inspires me: ...</h3>
                <h3>My save place: ...</h3>
                <h3>Write more about yourself if you wish: ...</h3>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-bold">Your all posts</h1>
              <div className="flex flex-row gap-40 bg-snow p-5">
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

              <div className="flex flex-row gap-40 bg-snow p-5">
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