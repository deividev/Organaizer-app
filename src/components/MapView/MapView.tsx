
import { useContext, useLayoutEffect, useRef } from "react"
import mapboxgl from "mapbox-gl";
import { CoordsContext } from "../../context"
import { Coords } from "../../context/coords/CoordsProvider";
import { Loading } from "../Loading/Loading"


export const MapView = () => {
    

    const { isLoading, userLocation, coordsList, distanceTraveled } = useContext(CoordsContext);
    const mapContainer = useRef<HTMLDivElement>(null)
    
    useLayoutEffect(() => {
      if (!isLoading) {
        const map = new mapboxgl.Map({
            container: mapContainer.current!, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [userLocation?.longitude!, userLocation?.latitude!], // starting position [lng, lat]
            zoom: 9, // starting zoom
        });
      }
    }, [ isLoading ])

    if ( isLoading ) {
        return ( <Loading />)
    };
    return (
        <>
            <div ref={mapContainer}
            style={{
                width: '80vw',
                height: '80vh',
                position: 'fixed',
                top: '0',
                left: '0',
            }}>           
            </div>
            <div  style={{
                
                position: 'fixed',
                bottom: '0',
                left: '0',
            }}>  
                CurrentPositon:
                <span> Longitud: { userLocation?.longitude} </span>
                <span> Latitud: {userLocation?.latitude}</span>
                {coordsList?.map((coords: Coords, index) => { 
                    return (
                        <div key={index}>
                            <span>Longitud: {coords?.longitude} </span>
                            <span>Latitud: {coords?.latitude}</span>
                        </div>
                    )
                })}
                <p>KM Recorridos: {distanceTraveled}km</p>
            </div>
        </>
    )
}