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
          style={{ opacity: 0.4 }}
        />
      </div>
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
          Hello and welcoMMme 👋
          <span className="whitespace-nowrap">
          This is a <span className="font-bold">blog</span> made with
          Next.js, Typescript and Tailwind.
          </span>
          <Round />
        </p>
    </div>
  )
}
