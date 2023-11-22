import React from 'react';
import Image from 'next/image';
import Round from './Round';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* first we have div withe the image*/}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-green.jpg"
          alt="ocean"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* nav is a child nr 2 */}

      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>

      {/* content is a child nr 3 */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full">
        <p className="text-3xl text-center text-red-800">
          Hello and welcoMMme 👋
          <span className="text-red-400">
            This is a <span className="font-bold">blog</span> made with
            Next.js, Typescript, and Tailwind.
          </span>
          <Round />
        </p>
      </div> */}
    </div>
  );
}
