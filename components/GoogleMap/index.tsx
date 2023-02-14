import { GoogleMap, LoadScript } from "@react-google-maps/api";

import { mapStyles } from "./googleMapStyles";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const GooglMap = () => {
  return (
    <LoadScript
      googleMapsApiKey={
        process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
          ? process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
          : ""
      }
    >
      <GoogleMap
        zoom={10}
        center={center}
        options={{ styles: mapStyles }}
        mapContainerStyle={containerStyle}
      />
    </LoadScript>
  );
};

export default GooglMap;
