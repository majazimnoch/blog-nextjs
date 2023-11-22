import React from 'react'
import Image from 'next/image'
import date from 'date-and-time';
import Link from 'next/link';
import Button from './Button';

export default function Navbar() {

  const now = new Date();
  const formattedDate = date.format(now, 'ddd, MMM DD, YYYY'); 

  return (
    <div className="flex flex-row justify-between items-center px-5 bg-snow">
      <p className="text-wood">Today&apos;s date: <span className="font-bold">{formattedDate}</span></p>
      <div className="flex flex-row gap-5">
        <Link href="/posts">
            <Button
                label="Add a new post"
                colour={"yellow"}
                large
            />
            </Link>
            <Link href="/posts">
            <Button
                label="Log out"
                colour={"yellow"}
                large
            />
            </Link>
      </div>
    </div>
  )
}
