import { useContext } from "react"
import { CoordsContext } from "../../context"
import { Coords } from "../../context/coords/CoordsProvider";
import { Loading } from "../Loading/Loading"


export const MapView = () => {

    const { isLoading, userLocation, coordsList } = useContext(CoordsContext);
    // const deleteObjectDuplicate =  (arr: Coords[]) => {  
    //     const arrMap: any[] = arr.map(elemento => {
    //       return [JSON.stringify(elemento), elemento]
    //     });
      
    //     return [...new Map(arrMap).values()];
    // }
    // const listCoords: unknown[] | Coords[] = deleteObjectDuplicate(coordsList);

    if ( isLoading ) {
        return ( <Loading />)
    };
    return (
        <div>
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
        </div>
    )
}