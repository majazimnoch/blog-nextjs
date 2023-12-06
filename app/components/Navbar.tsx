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

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  console.log(isOpen)

  return (
    <button onClick={handleClick}
    className="flex flex-col justify-center items-center p-10">
      <span className={`bg-grass block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
      </span>
      <span className={`bg-grass block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`bg-grass block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
    </button>
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
