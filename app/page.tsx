import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "./components/Button";
import Intro from "./components/Intro"
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>hdsaj</title>
        <meta name="description" content="A simple Blog" />
      </Head>
      <Hero />
      <Intro/>
      <main className="px-8 mx-auto">
        <div>
          <h1>
            Linkt to the first post. <Link href="/posts/">Click</Link>
          </h1>
          <Button
            label="Button Text"
            colour={"yellow"}
            large
            count={8}
          ></Button>
        </div>
      </main>
    </div>
  );
}
