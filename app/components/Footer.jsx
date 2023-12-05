import React from 'react'
import Image from 'next/image'
import Link
 from 'next/link'
export default function Footer() {
  return (
    <div className="flex md: flex-col lg:flex-row justify-center px-10 py-4 gap-40 items-center">
     <div className="flex flex-col justify-center items-center lg:flex-row gap-6">
      <p className="bg-white text-black uppercase tracking-normal font-thin lg:text-sm md:text-3xl text-center"> Website made by <span className="font-semibold">Maja Zimnoch</span>, intern at <span className="font-semibold">AKQA</span>
      </p>

        <div className="flex md: flex-row gap-8 lg:">

          <div className="relative group over">
          <Link href="https://github.com/majazimnoch" target="_blank">
              <Image
                src="/images/git-icon.png"
                alt="logo"
                width={30}
                height={30}
                className="transition-transform duration-300 ease-in-out transform scale-80 group-hover:scale-110"
                />
              </Link>
          </div>
          <div className="relative group over">
            <Link href="https://www.linkedin.com/in/majazimnoch/" target="_blank">
              <Image
                src="/images/li-icon.png"
                alt="logo"
                width={30}
                height={30}
                className="transition-transform duration-300 ease-in-out transform scale-80 group-hover:scale-110"
                />
            </Link>
          </div>

        </div>
      </div>
      <Image
        src="/images/logo-blog.png"
        alt="logo"
        width={100}
        height={100}
         />
    </div>
  )
}
