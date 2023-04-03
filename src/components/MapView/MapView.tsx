import { useContext, useLayoutEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { CoordsContext } from "../../context";
import { Coords } from "../../context/coords/CoordsProvider";
import { Loading } from "../Loading/Loading";

export const MapView = () => {
  const { isLoading, userLocation, coordsList, distanceTraveled } =
    useContext(CoordsContext);
  const mapContainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new mapboxgl.Map({
        container: mapContainer.current!, // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: [userLocation?.longitude!, userLocation?.latitude!], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
      // map.on('load', () => {
      //   map.addSource('mapbox-terrain', {
      //   type: 'vector',
      //   // Use any Mapbox-hosted tileset using its tileset id.
      //   // Learn more about where to find a tileset id:
      //   // https://docs.mapbox.com/help/glossary/tileset-id/
      //   url: 'mapbox://mapbox.mapbox-terrain-v2'
      //   });
      //   map.addLayer(
      //   {
      //   'id': 'terrain-data',
      //   'type': 'line',
      //   'source': 'mapbox-terrain',
      //   'source-layer': 'contour',
      //   'layout': {
      //   'line-join': 'round',
      //   'line-cap': 'round'
      //   },
      //   'paint': {
      //   'line-color': '#ff69b4',
      //   'line-width': 1
      //   }
      //   },
      //   'road-label-simple' // Add layer below labels
      //   );
      //   });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div
        ref={mapContainer}
        style={{
          width: "80vw",
          height: "80vh",
          position: "fixed",
          top: "0",
          left: "0",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
        }}
      >
        CurrentPositon:
        <span> Longitud: {userLocation?.longitude} </span>
        <span> Latitud: {userLocation?.latitude}</span>
        {coordsList?.map((coords: Coords, index) => {
          return (
            <div key={index}>
              <span>Longitud: {coords?.longitude} </span>
              <span>Latitud: {coords?.latitude}</span>
            </div>
          );
        })}
        <p>KM Recorridos: {distanceTraveled}km</p>
      </div>
    </>
  );
};
