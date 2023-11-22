import React from 'react'
import Image from 'next/image'
import date from 'date-and-time';
import Link from 'next/link';
import Button from './Button';

export default function Navbar() {

  const now = new Date();
  const formattedDate = date.format(now, 'ddd, MMM DD, YYYY'); 

  return (
    <div className="flex flex-row justify-between items-center p-5 bg-slate-100">
      <div>
        <Image
        src="/images/blog.png"
        alt="logo"
        width={40}
        height={40}
         />
      </div>
      <p>Today&apos;s date: {formattedDate}</p>
      <Link href="/posts">
          <Button
            label="Log out"
            colour={"yellow"}
            large
          />
        </Link>
    </div>
  )
}
