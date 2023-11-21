import React from 'react'
import Image from 'next/image'
import Round from './Round'

export default function Hero() {
  return (
    <div>
      <div className="w-screen h-screen">
        <Image
          src="/images/ocean.jpg"
          alt="ocean"
          layout="fill"
          objectFit="cover"
          // style={{ opacity: 0.4 }}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-3xl text-center text-red-800">
          Hello and welcoMMme 👋
          <span className="text-red-400">
          This is a <span className="font-bold">blog</span> made with
          Next.js, Typescript and Tailwind.
          </span>
          <Round />
        </p>
      </div>
    </div>
  )
}
