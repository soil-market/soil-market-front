import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function NaverMap() {
  const { query } = useRouter();
  const { x, y } = query;
  const numX = x ? Number(x) : undefined;
  const numY = x ? Number(y) : undefined;

  const mapRef = useRef<naver.maps.Map | undefined>(undefined);

  useEffect(() => {
    function initMap() {
      if (naver) {
        mapRef.current = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(37.3595704, 127.105399),
          zoom: 10,
        });
      }
    }

    initMap();
  }, []);

  useEffect(() => {
    if (numX && numY && mapRef.current) {
      const point = new naver.maps.Point(numX, numY);
      mapRef.current.setCenter(point);
    }
  }, [numX, numY]);

  return (
    <div className="h-full w-screen pt-[165px]">
      <div id="map" style={{ width: "100vw", height: "100%" }}></div>
    </div>
  );
}

// var map = new naver.maps.Map("map", {
//   center: new naver.maps.LatLng(37.3595316, 127.1052133),
//   zoom: 15,
//   mapTypeControl: true,
// });

// function searchCoordinateToAddress(latlng: { lat: number; lng: number }) {
//   naver.maps.Service.reverseGeocode(
//     {
//       coords: latlng,
//       orders: [
//         naver.maps.Service.OrderType.ADDR,
//         naver.maps.Service.OrderType.ROAD_ADDR,
//       ].join(","),
//     },
//     function (status, response) {
//       if (status === naver.maps.Service.Status.ERROR) {
//         return alert("Something Wrong!");
//       }

//       var items = response.v2.results,
//         address = "",
//         htmlAddresses = [];

//       for (var i = 0, ii = items.length, item, addrType; i < ii; i++) {
//         item = items[i];
//         address = makeAddress(item) || "";
//         addrType = item.name === "roadaddr" ? "[도로명 주소]" : "[지번 주소]";

//         htmlAddresses.push(i + 1 + ". " + addrType + " " + address);
//       }
//     }
//   );
// }

// function searchAddressToCoordinate(address: string) {
//   naver.maps.Service.geocode(
//     {
//       query: address,
//     },
//     function (status, response) {
//       if (status === naver.maps.Service.Status.ERROR) {
//         return alert("Something Wrong!");
//       }

//       if (response.v2.meta.totalCount === 0) {
//         return alert("totalCount" + response.v2.meta.totalCount);
//       }

//       var htmlAddresses = [],
//         item = response.v2.addresses[0],
//         point = new naver.maps.Point(item.x, item.y);

//       if (item.roadAddress) {
//         htmlAddresses.push("[도로명 주소] " + item.roadAddress);
//       }

//       if (item.jibunAddress) {
//         htmlAddresses.push("[지번 주소] " + item.jibunAddress);
//       }

//       if (item.englishAddress) {
//         htmlAddresses.push("[영문명 주소] " + item.englishAddress);
//       }

//       map.setCenter(point);
//     }
//   );
// }

// function makeAddress(item) {
//   if (!item) {
//     return;
//   }

//   var name = item.name,
//     region = item.region,
//     land = item.land,
//     isRoadAddress = name === "roadaddr";

//   var sido = "",
//     sigugun = "",
//     dongmyun = "",
//     ri = "",
//     rest = "";

//   if (hasArea(region.area1)) {
//     sido = region.area1.name;
//   }

//   if (hasArea(region.area2)) {
//     sigugun = region.area2.name;
//   }

//   if (hasArea(region.area3)) {
//     dongmyun = region.area3.name;
//   }

//   if (hasArea(region.area4)) {
//     ri = region.area4.name;
//   }

//   if (land) {
//     if (hasData(land.number1)) {
//       if (hasData(land.type) && land.type === "2") {
//         rest += "산";
//       }

//       rest += land.number1;

//       if (hasData(land.number2)) {
//         rest += "-" + land.number2;
//       }
//     }

//     if (isRoadAddress === true) {
//       if (checkLastString(dongmyun, "면")) {
//         ri = land.name;
//       } else {
//         dongmyun = land.name;
//         ri = "";
//       }

//       if (hasAddition(land.addition0)) {
//         rest += " " + land.addition0.value;
//       }
//     }
//   }

//   return [sido, sigugun, dongmyun, ri, rest].join(" ");
// }

// function hasArea(area) {
//   return !!(area && area.name && area.name !== "");
// }

// function hasData(data) {
//   return !!(data && data !== "");
// }

// function checkLastString(word, lastString) {
//   return new RegExp(lastString + "$").test(word);
// }

// function hasAddition(addition) {
//   return !!(addition && addition.value);
// }
