import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Intro: React.FC = () => {
  return (
    <div className="grid px-10 py-5 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-12 lg:gap-y-0 lg:px-40 lg:py-20">

      <div className="flex flex-col gap-4 py-10 lg:py-0">
        <h2 className="uppercase"><span className="bg-forest font-medium text-snow p-1 uppercase px-2">Latest post</span></h2>
        <div className="flex flex-row justify-between items-center pr-8">
          <h1 className="text-2xl text-wood">
            <span className="bg-grass text-snow p-1 uppercase font-thin px-1">A Mountains Serenity</span>
          </h1>
          <div className="flex flex-col items-center">
            <Image
              src="/images/like2.png"
              alt="like"
              height={20}
              width={20}
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between pr-8">
          <h2 className="text-wood uppercase">An Unforgettable Family Gateway</h2>
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
  );
};

export default Intro;
