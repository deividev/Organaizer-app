import { useContext } from "react"
import { CoordsContext } from "../../context"
import { Loading } from "../Loading/Loading"


export const MapView = () => {

    const { isLoading, userLocation } = useContext(CoordsContext)

    if ( isLoading ) {
        return ( <Loading />)
    };
    return (
        <div>
            { userLocation?.join(',')}
        </div>
    )
}