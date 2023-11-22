import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Intro() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-x-12 gap-y-0 px-40 py-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">
          <span className="bg-grass p-1 italic uppercase ">A Seaside Serenity.</span> An Unforgettable Family Getaway
        </h1>
        <p>
          Beneath the azure sky and the soothing sounds of crashing waves, our family embarked on an unforgettable journey to the sea. As the rhythmic tide pulled us into its embrace, we discovered the magic that only a seaside escape with loved ones could offer. Join us on a virtual voyage as we share the tales of our family adventure, where each sunset was a masterpiece and every wave carried the promise of new memories
        </p>
        <Link href="/posts">
          <Button
            label="Click here"
            colour={"yellow"}
            large
          />
        </Link>
      </div>
      <div className="relative">
        <Image
          src="/images/mountains.jpg"
          alt="mountains"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}
