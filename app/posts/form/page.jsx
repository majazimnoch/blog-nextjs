import Button from '@/app/components/Button'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar from '../../components/Navbar'
import Group from '../../components/Group'
import Footer from '../../components/Footer'
import Form from '../../components/Form'

export default function page() {
  return (
    <>
      <Head>
        <title> Form - blog page</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className="flex flex-col gap-10 gap-x-12 gap-y-0 px-40 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bold">Write a new blog post</h1>
          <p>Please fill in the form</p>
          <Form />
        </div>
          <Link href="/">
            <Button
              label="Go back"
              colour={"yellow"}
              large
            />
          </Link> 
        </div>
        <Group />
        <Footer />
      </div>
   </>
  )
}
