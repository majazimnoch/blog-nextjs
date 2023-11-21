import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Article = ({ title, photo, text, articleClass, href }) => (
  <Link href={href}>
    <div className={`article ${articleClass}`}>
      <h1>{title}</h1>
      <Image src={photo} alt="photo of an article" height={300} width={300} />
      <p>{text}</p>
    </div>
  </Link>
);

// const Article = ({ title, photo, text, articleClass }) => (
//   <div className={`article ${articleClass}`}>
//       <h1>{title}</h1>
//       <Image src={photo} alt="photo of an article" height={300} width={300} />
//       <p>{text}</p>
//   </div>
// )

export default function Group() {
  return (
    <div className="grid grid-cols-4 grid-rows-1">
        <Article
          title="Header of an article"
          photo="/images/ocean.jpg"
          text="Text of an article"
          articleClass="article-2"
          href="/posts/one"
        />
         <Article
          title="Header of an article"
          photo="/images/ocean.jpg"
          text="Text of an article"
          articleClass="article-2"
          href="/posts/one"
        />
         <Article
          title="Header of an article"
          photo="/images/ocean.jpg"
          text="Text of an article"
          articleClass="article-3"
          href="/posts/one"
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
