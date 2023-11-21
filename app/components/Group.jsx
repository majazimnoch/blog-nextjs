import React from 'react'
import Image from 'next/image'

const Article = ({ title, photo, text }) => (
    <div>
        <h1>{title}</h1>
        <Image src={photo} alt="photo of an article" height={300} width={300} />
        <p>{text}</p>
    </div>
)

export default function Group() {
  return (
    <div className="grid grid-cols-4 grid-rows-1">
        <Article
          title="Header of an article"
          photo="/images/ocean.jpg"
          text="Text of an article"
        />
         <Article
          title="Header of an article"
          photo="/images/ocean.jpg"
          text="Text of an article"
        />
         <Article
          title="Header of an article"
          photo="/images/ocean.jpg"
          text="Text of an article"
        />
         <Article
          title="Header of an article"
          photo="/images/ocean.jpg"
          text="Text of an article"
        />
    </div>
  )
}
