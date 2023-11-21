import React from 'react'
import Image from 'next/image'

export default function Intro() {
  return (
    <div>
      <Image
        src="/images/ocean.jpg"
        alt="ocean"
        height={244}
        width={244}
      />
    </div>
  )
}
