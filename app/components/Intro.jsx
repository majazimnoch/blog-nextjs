import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Intro() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-x-12 gap-y-0 px-40 py-20">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between pr-8">
          <h1 className="text-2xl text-wood">
            <span className="bg-forest text-snow p-1 uppercase font-thin px-2">A Mountains Serenity</span> 
          </h1>
          <div className="flex flex-row">
            
            
            <Image
              src="/images/like2.png"
              alt="like"
              height={20}
              width={20} 
            />
          </div>
        </div>
        <div className="flex flex-row justify-between pr-8">
          <h2 className="text-wood p-1 uppercase">An Unforgettable Family Gateway</h2>
          <p className="antialiased text-wood text-sm">1 May 2022</p>
        </div>
        <p className="text-wood">
        Under the vast cerulean sky, amid the tranquil melodies of whispering winds, our family set out on a remarkable expedition to the mountains. Enveloped by the rhythmic dance of the towering peaks, we uncovered the enchantment that only a mountainous retreat with cherished ones can provide. Come along on this virtual odyssey as we recount the stories of our family escapade, where each sunrise painted a breathtaking canvas, and every gust of wind bore the pledge of forging lasting memories.
        </p>
        <p className="antialiased text-wood text-sm">Written by: Tasty Taster</p>
        <Link href="/posts">
          <Button
            label="Read the post"
            colour={"green"}
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
