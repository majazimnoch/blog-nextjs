import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex flex-row justify-center px-10 py-4 gap-40 items-center">
      <div className="flex flex-row gap-6 items-center">
        <p className="bg-white text-black text-sm">Website made by Maja Zimnoch, intern at AKQA</p>
        <Image
          src="/images/git-icon.png"
          alt="logo"
          width={30}
          height={30}
          />
        <Image
          src="/images/li-icon.png"
          alt="logo"
          width={30}
          height={30}
          />
      </div>
      <Image
        src="/images/logo-blog.png"
        alt="logo"
        width={100}
        height={100}
         />
    </div>
  )
}
