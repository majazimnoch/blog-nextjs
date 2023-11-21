import Button from '@/app/components/Button'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
    <Head>
        <title> Third post - blog page</title>
        <link rel="icon" href="favicon.ico" />
    </Head>
    <div>
        <h1>
          Third post
        </h1>
        <h2>
            <Link href="/">
                <Button
                label="Go back"
                colour={"yellow"}
                large
                />
            </Link> 
        </h2>
    </div>
   </>
  )
}
