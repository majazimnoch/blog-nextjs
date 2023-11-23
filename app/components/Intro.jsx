import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Intro() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-x-12 gap-y-0 px-40 py-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">
          <span className="bg-grass p-1 italic uppercase ">A Mountains Serenity.</span> An Unforgettable Family Getaway
        </h1>
        <p>
        Under the vast cerulean sky, amid the tranquil melodies of whispering winds, our family set out on a remarkable expedition to the mountains. Enveloped by the rhythmic dance of the towering peaks, we uncovered the enchantment that only a mountainous retreat with cherished ones can provide. Come along on this virtual odyssey as we recount the stories of our family escapade, where each sunrise painted a breathtaking canvas, and every gust of wind bore the pledge of forging lasting memories.
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
