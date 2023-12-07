'use client' 
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

interface ArticleProps {
  title: string;
  photo: string;
  text: string;
  articleClass: string;
  href: string;
  date: string;
}

const Article: React.FC<ArticleProps> = ({ title, photo, text, articleClass, href, date }) => (

  <Link href={href}>
    { /*section below will have both the article class (for common styling among all articles) and the dynamic class specified by the articleClass prop (for specific styling for this individual article). */}
    <div className={clsx('article', articleClass, 'flex', 'flex-col', 'gap-10', 'justify-around')}>
      <div className="flex flex-col gap-9">
        <h1 className="text-lg antialiased text-snow font-semibold">{title}</h1>
        <div className="relative group over">
          <Image
            src={photo}
            alt="photo of an article"
            height={300}
            width={300}
            className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-70 w-full sm:w-300"
          />
        </div>
      </div>
      <div className="flex flex-row bg-snow p-4 rounded justify-between relative group over">
        <p className={clsx('text-xs')}>{date}</p>
        <Image
          src="/images/like2.png"
          alt="like"
          height={20}
          width={20}
          className="transition-transform duration-300 ease-in-out transform scale-80 group-hover:scale-110"
        />
      </div>
      <p className="text-sm antialiased text-snow">{text}</p>
      <hr className="lg:hidden border border-solid border-snow"/>
    </div>
  </Link>
);

const Group: React.FC = () => {
  const postsPerPage = 4; // Number of posts to display per page
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col px-10 py-20 lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:px-40 lg:py-20  bg-forest gap-8">
      <Article
        title="Serenade of the Desert Sun: A Sunset Symphony"
        photo="/images/sun.jpg"
        text="In the vast expanse of the desert, where time slows and silence reigns, I witnessed a spectacle that transcends earthly beauty—the desert sunset. Join me in this diary entry, a poetic reflection on the mesmerizing dance of colors as the sun bids adieu to the arid landscape, leaving behind a canvas painted in hues of warmth and wonder."
        articleClass="article-1"
        href="/posts/two"
        date="1 January 2022"
      />
      <Article
        title="Montmartre Musings: Surreal Parisian Delights"
        photo="/images/paris.jpg"
        text="In the heart of Paris, where cobblestone streets tell tales of artistry, Montmartre beckons—an enclave of creative magic. Join me in a chronicle of whimsical encounters with Dali, the enchanting lanes, and the irresistible allure of pastries that paint Paris in a palette of surreal delights."
        articleClass="article-2"
        href="/posts/two"
        date="12 January 2022"
      />
      <Article
        title="Beneath the Surface: A Journal of Amidst Ocean Depths"
        photo="/images/snorkeling.jpg"
        text="In the hustle of modernity, a decision brewed—a weekend voyage to the enigmatic waters of Galápagos. Picture this as a diary, a chronicle of my plunge into underwater serenity, leaving behind the digital chatter for the immersive silence of the ocean."
        articleClass="article-3"
        href="/posts/three"
        date="19 January 2022"
      />
      <Article
        title="Unplugged Bliss: A Digital Detox Weekend at the Spa"
        photo="/images/spa.jpg"
        text="Welcome to a journey where serenity takes precedence and the hum of technology fades into the background. In a world marked by perpetual connectivity, the idea of escaping to a spa for a weekend without the intrusion of technology has become a beacon of tranquility."
        articleClass="article-4"
        href="/posts/three"
        date="29 January 2022"
      />
    </div>
  );
};

export default Group;