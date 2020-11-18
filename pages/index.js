import Head from "next/head";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Starter: Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
    </div>
  );
}
