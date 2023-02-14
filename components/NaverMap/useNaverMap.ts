import { useEffect, useRef, useState } from "react";

const INITIAL_LOCATION = { latitude: 37.4862618, longitude: 127.1222903 };

function useMap() {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >(INITIAL_LOCATION);

  useEffect(() => {
    if (typeof myLocation !== "string") {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });
    }
  }, [myLocation]);

  return {
    myLocation,
  };
}

export default useMap;
