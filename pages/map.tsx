import Head from "next/head";

import GooglMap from "@/components/GoogleMap";

export default function Map() {
  return (
    <>
      <Head>
        <title>Map Testing</title>
        <meta name="description" content="Map testing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GooglMap />
      </main>
    </>
  );
}
