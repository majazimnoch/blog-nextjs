import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "./components/Button";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Group from "./components/Group";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>hdsaj</title>
        <meta name="description" content="A simple Blog" />
      </Head>
      <Hero />
      <Intro />
      <Group />
      <Footer />
      <main className="px-8 mx-auto">
      </main>
    </div>
  );
}
