import { useEffect } from "react";

export default function NaverMap() {
  function initMap() {
    if (naver) {
      new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
      });
    }
  }

  useEffect(() => {
    initMap();
  }, []);

  return (
    <div className="h-screen w-screen pt-[165px] pb-67">
      <div id="map" style={{ width: "100vw", height: "100%" }}></div>
    </div>
  );
}
