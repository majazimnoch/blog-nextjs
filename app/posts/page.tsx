import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Group from '../components/Group';

const FirstPost: React.FC = () => {
  return (
    <>
      <Head>
        <title> First post - blog page</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className="flex flex-col gap-10 gap-x-12 gap-y-0 p-10 lg:px-40 lg:py-10">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl text-wood">
              A Mountains Serenity. An Unforgettable Family Gateway
            </h1>
            <div className="flex flex-row justify-between">
              <p className="antialiased text-wood text-base">1 January 2022</p>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-2">
                  <p className="text-base">2 x </p>
                  <Image
                    src="/images/eyesdown.png"
                    alt="like"
                    height={20}
                    width={20}
                  />
                </div>
                <div className="flex flex-row gap-2">
                  <p className="text-base">1 x </p>
                  <Image
                    src="/images/like2.png"
                    alt="like"
                    height={20}
                    width={20}
                  />
                </div>
              </div>
            </div>
            {/* Fix the Image components here */}
            <Image
              src="/images/mountains.jpg"
              alt="mountains"
              width={1500}
              height={300}
            />
            <p className="text-wood text-lg">
            As the sun dipped below the horizon, casting a warm glow on the valley below, the allure of the mountains beckoned our family to a journey of serenity. The call of the mountains echoed in the wind, drawing us closer to nature&apos;s grandeur. With backpacks filled with anticipation and hearts brimming with excitement, we set forth on a quest for tranquility.
            Nestled in the heart of the mountainous landscape, each sunrise unfolded like a mesmerizing tapestry. The first light painted the sky in hues of pink and orange, casting a golden glow upon the peaks. As we stood on the edge of the world, the mountains whispered secrets to the dawn, and we, privileged spectators, witnessed the birth of a new day.
            </p>
            <p className="text-wood text-lg">
            Our days were filled with the thrill of exploration as we ventured into winding trails that crisscrossed the mountainsides. Each step brought us closer to hidden treasures – alpine meadows adorned with vibrant wildflowers, secret waterfalls concealed in the heart of the forest, and breathtaking vistas that left us in awe. The mountains, it seemed, held the key to a world waiting to be discovered.
            As the sun dipped below the peaks, our evenings came alive with the crackling warmth of a campfire. Surrounded by the scent of pine and the symphony of nocturnal creatures, we shared stories that echoed through the valleys. The mountain breeze carried our laughter, blending it with the rustle of leaves, creating a harmony that would forever resonate in the chambers of our memories.
            </p>
            <p className="text-wood text-lg">
            In the embrace of the mountains, our family bonds strengthened like the roots of ancient trees. Whether conquering a challenging trail together or simply sharing quiet moments overlooking a vast expanse, the mountains became the backdrop of our shared experiences. It was a sanctuary where laughter echoed, and the unspoken language of love was understood by all.
            As our mountainous sojourn drew to a close, we stood on the summit, the world below at our feet. The panoramic view was a metaphor for the journey we undertook – filled with ups and downs, challenges, and moments of sheer bliss. The mountains, stoic witnesses to our adventure, had woven a narrative of family unity and the profound serenity found in their midst.
            </p>
            <p className="text-wood text-lg">
            As we descended from the heights, the mountains whispered a promise – a promise to welcome us back whenever our souls yearned for their serenity. Our family getaway had not just been a vacation; it was a pilgrimage to the heart of nature, a sacred communion with the mountains that left an indelible mark on our lives. Until the next ascent, we carried the mountains within us, their serenity forever etched in the story of our family&apos;s unforgettable journey.
            </p>
            <p className="text-base antialiased text-wood">Written by: Tasty Taster</p>
            <Link href="/">
              <Button
                label="Go back"
                colour={"yellow"}
                large
              />
            </Link>
          </div>
        </div>
        <Group />
        <Footer />
      </div>
    </>
  );
};

export default FirstPost;
