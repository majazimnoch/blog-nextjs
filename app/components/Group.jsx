import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


// This component takes in several props that are passed to it when it's used elsewhere.
const Article = ({ title, photo, text, articleClass, href }) => (
  <Link href={href}>
    { /*section below will have both the article class (for common styling among all articles) and the dynamic class specified by the articleClass prop (for specific styling for this individual article). */}
    <div className={`article ${articleClass}`}>
      <h1>{title}</h1>
      <Image src={photo} alt="photo of an article" height={300} width={300} />
      <p>{text}</p>
    </div>
  </Link>
);

export default function Group() {
  return (
    <div className="grid grid-cols-4 grid-rows-1 px-40 py-20 gap-10 bg-grass">
        <Article
          title="Header of an article"
          photo="/images/ocean.jpg"
          text="Text of an article"
          articleClass="article-1"
          href="/posts/one"
        />
         <Article
          title="Header of an article"
          photo="/images/ocean.jpg"
          text="Text of an article"
          articleClass="article-2"
          href="/posts/two"
        />
         <Article
          title="Header of an article"
          photo="/images/ocean.jpg"
          text="Text of an article"
          articleClass="article-3"
          href="/posts/three"
        />
         <Article
          title="Header of an article"
          photo="/images/ocean.jpg"
          text="Text of an article"
          articleClass="article-4"
          href="/posts/four"
        />
    </div>
  )
}
