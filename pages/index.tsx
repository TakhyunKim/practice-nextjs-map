import Head from "next/head";

import styles from "@/styles/Home.module.css";

import NaverMap from "@/components/NaverMap";
import GooglMap from "@/components/GoogleMap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="test google map" />
        <meta name="description" content="test naver map" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <GooglMap />
        <NaverMap />
      </main>
    </>
  );
}
