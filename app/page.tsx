import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>hdsaj</title>
        <meta name="description" content="A simple Blog" />
      </Head>
      <main className="px-6 mx-auto">
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
          Hello and welcome 👋
          <span className="whitespace-nowrap">
            I am <span className="font-bold">Maja</span>.
          </span>
        </p>
          <h1>
          Linkt to the first post. <Link href="/posts/">Click</Link>
        </h1>
        <div>
          <Image
            src="/images/ocean.jpg"
            alt="ocean"
            height={244}
            width={244}
          />
        </div>
      </main>
    </div>
  );
}
