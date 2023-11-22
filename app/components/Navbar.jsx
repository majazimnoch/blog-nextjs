import React from 'react'
import Image from 'next/image'
import date from 'date-and-time';

export default function Navbar() {

  const now = new Date();
  const formattedDate = date.format(now, 'ddd, MMM DD YYYY'); 

  return (
    <div className="navbar">
      <div>
        <Image
        src="/images/blog.png"
        alt="logo"
        width={40}
        height={40}
         />
      </div>
      <p>Today&apos;s date: {formattedDate}</p>
      <p> Log out</p>
    </div>
  )
}
