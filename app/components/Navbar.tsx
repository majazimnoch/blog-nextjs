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
