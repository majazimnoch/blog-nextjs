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
        <Form />
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
