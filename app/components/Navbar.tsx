'use client' 

import React, { useState } from 'react';
import Image from 'next/image';
import date from 'date-and-time';
import Link from 'next/link';
import Button from './Button';

const Navbar: React.FC = () => {
  const now = new Date();
  const formattedDate = date.format(now, 'ddd, MMM DD, YYYY');

  const [isOpen, setIsOpen] = useState(false);

  const isMobile = window.innerWidth < 768;

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  if (isMobile) {
    return (
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center p-10"
      >
        <span
          className={`bg-grass block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-grass block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-grass block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
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
        <Link href="/posts">
          <Button label="User" colour="yellow" large />
        </Link>
        <Link href="/posts/form">
          <Button label="Add a new post" colour="yellow" large />
        </Link>
        <Link href="/posts">
          <Button label="Log out" colour="yellow" large />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

// const Navbar: React.FC = () => {
//   const now = new Date();
//   const formattedDate = date.format(now, 'ddd, MMM DD, YYYY');

//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   }

//   console.log(isOpen)

//   return (
//     <button onClick={handleClick}
//     className="flex flex-col justify-center items-center p-10">
//       <span className={`bg-grass block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
//       </span>
//       <span className={`bg-grass block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
//       <span className={`bg-grass block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
//     </button>
//   );
// };

// export default Navbar;
