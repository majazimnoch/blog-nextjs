import React from 'react'
import Image from 'next/image'
import date from 'date-and-time';
import Link from 'next/link';
import Button from './Button';

export default function Navbar() {

  const now = new Date();
  const formattedDate = date.format(now, 'ddd, MMM DD, YYYY'); 

  return (
    <div className="flex flex-row justify-between items-center px-5 bg-slate-900">
      <p className="text-red-600">Today&apos;s date: {formattedDate}</p>
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
