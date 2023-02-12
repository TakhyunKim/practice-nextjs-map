import { GoogleMap, LoadScript } from "@react-google-maps/api";

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
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
    </LoadScript>
  );
};

export default GooglMap;
