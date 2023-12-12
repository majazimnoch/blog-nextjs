'use client' 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import date from 'date-and-time';
import Link from 'next/link';
import Button from './Button';

const Navbar: React.FC = () => {
  const now = new Date();
  const formattedDate = date.format(now, 'ddd, MMM DD, YYYY');

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  if (isMobile) {
    return (
      <div className="bg-snow flex flex-col justify-center items-right w-full p-10">
        
        <button
          onClick={handleClick}
          className="flex flex-col justify-end items-end"
        >
          <span
            className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
          ></span>
          {isOpen && (
             <div className="flex flex-col gap-4 mt-2 text-center justify-start w-full underline underline-offset-8">
              <Link href="/posts/user" className="flex flex-col text-center underline underline-offset-6">User</Link>
              <Link href="/posts/form" className="flex flex-col text-center underline underline-offset-6" >Add a new post</Link>
              <Link href="/posts/login" className="flex flex-col text-center underline underline-offset-6">Log out</Link>
             </div>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-between items-center px-5 bg-snow">
      <div className="flex flex-row gap-6 items-center">
        <Link href="/">
          <Image
            src="/images/logo-b.png"
            alt="logo"
            width={30}
            height={30}
            className="rounded"
          />
        </Link>
        <p className="text-wood">
          Today&apos;s date: <span className="font-bold">{formattedDate}</span>
        </p>
      </div>
      <div className="flex flex-row gap-5">
        <Link href="/posts/user">
          <Button label="User" colour="yellow" large />
        </Link>
        <Link href="/posts/form">
          <Button label="Add a new post" colour="yellow" large />
        </Link>
        <Link href="/posts/login">
          <Button label="Log out" colour="yellow" large />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;


