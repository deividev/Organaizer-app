import { useContext } from "react"
import { CoordsContext } from "../../context"
import { Loading } from "../Loading/Loading"


export const MapView = () => {

    const { isLoading, userLocation, coordsList } = useContext(CoordsContext)

    if ( isLoading ) {
        return ( <Loading />)
    };
    return (
        <div>
            { userLocation?.join(',')}
            {coordsList?.map((coords, index) => { 
                return (
                    <div key={index}>
                        {coords}
                    </div>
                )
            })}
        </div>
    )
}