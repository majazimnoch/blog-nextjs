import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'

export default function page() {
  return (
    <>
    <Head>
        <title> First post - blog page</title>
        <link rel="icon" href="favicon.ico" />
    </Head>
    <div>
        <h1>
        Main post
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
