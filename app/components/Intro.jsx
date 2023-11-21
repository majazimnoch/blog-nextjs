import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Intro() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-x-0 gap-y-0">
      <div>
        <h1>
          This is an intro component. This is an intro component. This is an intro component. This is an intro component. This is an intro component. This is an intro component. 
        </h1>
        <Link href="/posts">
          <Button
            label="Click here"
            colour={"yellow"}
            large
          />
        </Link>
      </div>
      <div>
        <Image
          src="/images/ocean.jpg"
          alt="ocean"
          height={244}
          width={244}
        />
      </div>
    </div>
  )
}
