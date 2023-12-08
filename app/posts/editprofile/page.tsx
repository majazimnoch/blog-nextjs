import React from 'react';
import Button from '@/app/components/Button';
import Navbar from '@/app/components/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Group from '@/app/components/Group';
import Footer from '@/app/components/Footer';

const EditProfile: React.FC = () => {
  return (
    <>
      <Head>
        <title> Edit User info - blog page</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className="flex flex-col gap-10 gap-x-12 gap-y-0 py-5 lg:px-40 lg:py-10 m-5">
          <div className="flex flex-col min-w-full mx-auto w-full text-center lg:text-left gap-5">
            <h1 className="font-bold">Here you can edit your user info</h1>
            <div className="flex flex-row gap-5 justify-center lg:justify-start">
              <Link href="/posts/user">
                <Button label="Go back" colour={"yellow"} large />
              </Link>
              <Link href="/posts/editprofile">
                <Button label="Save all changes" colour={"yellow"} large />
              </Link>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-5 bg-snow p-5">
              <div className="flex flex-col gap-5">
                <Image
                  src="/images/dummy.png"
                  alt="logo"
                  width={450}
                  height={30}
                />
                <div className="flex flex-row gap-2 items-center">
                    <Image
                    src="/images/camera-icon.png"
                    alt="logo"
                    width={20}
                    height={30}
                    />
                    <p className="text-xs">Click to upload a photo</p>
                </div>
              </div>
              <form className="col-span-2 min-w-full max-w-md mx-auto bg-snow">
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className=" bg-white text-black text-sm ">
                        My top afirmation (what I repeat every day):
                    </label>
                    <input
                    type="text"
                    id="user-info-afirmation"
                    className="resize-none px-3 py-2 focus:outline-none focus:ring focus:border-transparent-300"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className=" bg-white text-black text-sm ">
                    My personal growth moment:
                    </label>
                    <input
                    type="text"
                    id="user-info-afirmation"
                    className="resize-none px-3 py-2 focus:outline-none focus:ring focus:border-transparent-300"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className=" bg-white text-black text-sm ">
                    I am forever grateful for: 
                    </label>
                    <input
                    type="text"
                    id="user-info-afirmation"
                    className="resize-none px-3 py-2 focus:outline-none focus:ring focus:border-transparent-300"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className=" bg-white text-black text-sm ">
                    A book/movie quote that inspires me:
                    </label>
                    <input
                    type="text"
                    id="user-info-afirmation"
                    className="resize-none px-3 py-2 focus:outline-none focus:ring focus:border-transparent-300"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className=" bg-white text-black text-sm ">
                    My safe place:
                    </label>
                    <input
                    type="text"
                    id="user-info-afirmation"
                    className="resize-none px-3 py-2 focus:outline-none focus:ring focus:border-transparent-300"
                    />
                </div>

            </form>
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

export default EditProfile;