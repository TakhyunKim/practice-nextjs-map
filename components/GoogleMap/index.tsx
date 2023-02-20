import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import { mapStyles } from "./googleMapStyles";

// import BellIcon from "@/assets/bell.svg";
import BellIcon from "../../assets/bell.svg";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const GooglMap = () => {
  const [markerPosition, setMarkerPosition] = useState<
    google.maps.LatLng | google.maps.LatLngLiteral | null
  >(null);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (!event.latLng) return;

    setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  };

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
        onClick={handleMapClick}
      >
        {markerPosition && (
          <Marker
            onLoad={}
            position={markerPosition}
            icon={{ url: require("../../assets/bell.svg") }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GooglMap;
