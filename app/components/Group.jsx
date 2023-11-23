import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx';

// This component takes in several props that are passed to it when it's used elsewhere.
const Article = ({ title, photo, text, articleClass, href }) => (
  <Link href={href}>
    { /*section below will have both the article class (for common styling among all articles) and the dynamic class specified by the articleClass prop (for specific styling for this individual article). */}
    <div className={clsx('article', articleClass, 'flex', 'flex-col', 'gap-10', 'justify-around')}>
      <div className="flex flex-col gap-9">
        <h1 className="text-lg antialiased">{title}</h1>
          <Image 
            src={photo} 
            alt="photo of an article" 
            height={300} 
            width={300} 
          />
      </div>
      <p className="text-sm antialiased">{text}</p>
    </div>
  </Link>
);
{/*  <div className={`article ${articleClass}`}>

*/}
export default function Group() {
  return (
    <div className="grid grid-cols-4 grid-rows-1 px-40 py-20 bg-grass gap-4">
        <Article
          title="Serenade of the Desert Sun: A Sunset Symphony"
          photo="/images/sun.jpg"
          text="In the vast expanse of the desert, where time slows and silence reigns, I witnessed a spectacle that transcends earthly beauty—the desert sunset. Join me in this diary entry, a poetic reflection on the mesmerizing dance of colors as the sun bids adieu to the arid landscape, leaving behind a canvas painted in hues of warmth and wonder."
          articleClass="article-1"
          href="/posts/one"
        />
         <Article
          title="Montmartre Musings: Surreal Parisian Delights"
          photo="/images/paris.jpg"
          text="In the heart of Paris, where cobblestone streets tell tales of artistry, Montmartre beckons—an enclave of creative magic. Join me in a chronicle of whimsical encounters with Dali, the enchanting lanes, and the irresistible allure of pastries that paint Paris in a palette of surreal delights."
          articleClass="article-2"
          href="/posts/two"
        />
         <Article
          title="Beneath the Surface: A Journal of Disconnecting Amidst Ocean Depths"
          photo="/images/snorkeling.jpg"
          text="In the hustle of modernity, a decision brewed—a weekend voyage to the enigmatic waters of Galápagos. Picture this as a diary, a chronicle of my plunge into underwater serenity, leaving behind the digital chatter for the immersive silence of the ocean."
          articleClass="article-3"
          href="/posts/three"
        />
         <Article
          title="Unplugged Bliss: A Digital Detox Weekend at the Spa"
          photo="/images/spa.jpg"
          text="Welcome to a journey where serenity takes precedence and the hum of technology fades into the background. In a world marked by perpetual connectivity, the idea of escaping to a spa for a weekend without the intrusion of technology has become a beacon of tranquility."
          articleClass="article-4"
          href="/posts/four"
        />
    </div>
  )
}
