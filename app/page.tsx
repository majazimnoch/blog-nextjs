import Head from "next/head";
import Intro from "./components/Intro"
import Hero from "./components/Hero"
import Group from "./components/Group"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog page</title>
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
