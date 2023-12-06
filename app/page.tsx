import Head from "next/head";
// // import Link from "next/link";
// // import Image from "next/image";
// // import Button from "./components/Button";
import Intro from "./components/Intro"
import Hero from "./components/Hero"
import Group from "./components/Group"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// // import Layer from "./components/Layer";
// import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog page</title>
        <meta name="description" content="A simple Blog" />
      </Head>
      <Navbar />
      {/* <Hero /> */}
      <Intro />
      {/* <Layer /> */}
      {/* <Gallery /> */}
      <Group />
      <Footer />
      <main className="px-8 mx-auto">
      </main>
    </div>
  );
}
