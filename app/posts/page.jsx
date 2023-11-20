import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Posts() {
    return (
       <>
        <Head>
            <title> First post - blog page</title>
            <link rel="icon" href="favicon.ico" />
        </Head>
        <div>
            <h1>
                First post
            </h1>
            <h2>
                <Link href="/">Back home</Link>
            </h2>
        </div>
       </>
    )
}

