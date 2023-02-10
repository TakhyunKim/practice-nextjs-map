import Head from "next/head";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

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
        <LoadScript
          googleMapsApiKey={
            process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
              ? process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
              : ""
          }
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          />
        </LoadScript>
      </main>
    </>
  );
}
