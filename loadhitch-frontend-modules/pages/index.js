import Head from "next/head";
import Header from "../components/Header";
import Statistics from "../components/Statistics";
import Video from "../components/Video";

export default function Home() {
  return (
    <>
      <Head>
        <title>Loadhitch Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Video />
      <Statistics />
    </>
  );
}
