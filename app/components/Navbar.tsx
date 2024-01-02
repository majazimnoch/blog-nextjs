'use client' 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import date from 'date-and-time';
import Link from 'next/link';
import Button from './Button';
import ButtonTwo from './ButtonTwo';
const Navbar: React.FC = () => {
  const now = new Date();
  const formattedDate = date.format(now, 'ddd, MMM DD, YYYY');

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
    // to distinguish between logged in and not logged in
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  // The const isLoggedIn is used to keep track of the user's login status. It's a state variable that holds a boolean value indicating whether the user is currently logged in or not. On the other hand, const handleLogout is a function that updates the state variable isLoggedIn.
  const handleLogout = () => {
    setIsLoggedIn(false);
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
        </button>
        {isOpen && (
          <div className="flex flex-col gap-4 mt-2 text-center justify-start w-full underline underline-offset-8">
            <Link href="/posts/user" className="flex flex-col text-center underline underline-offset-6">User
            </Link>
            <Link href="/posts/form" className="flex flex-col text-center underline underline-offset-6">Add a new post
            </Link>
            {isLoggedIn ? (
               <ButtonTwo label="Log out" colour="yellow" onClick={handleLogout} />) : (
                  <>
                    <Link href="/posts/login" className="flex flex-col text-center underline underline-offset-6">Register
                    </Link>
                    <Link href="/posts/login" className="flex flex-col text-center underline underline-offset-6">Log in
                    </Link>
                </>
               )}
          </div>
        )}
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
        {isLoggedIn ? (
          <ButtonTwo label="Logout" colour="yellow" large onClick={handleLogout} />
        ): (
          <>
            <Link href="/posts/login">
              <Button label="Register" colour="yellow" large />
            </Link>
            <Link href="/posts/login">
              <Button label="Log in" colour="yellow" large />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;