import useMap from "./useNaverMap";

const NaverMap = () => {
  useMap();

  return <div style={{ width: "400px", height: "400px" }} id="map" />;
};

export default NaverMap;
