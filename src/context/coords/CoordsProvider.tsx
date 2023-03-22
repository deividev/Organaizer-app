import { useEffect, useReducer, useState } from "react";
import { getUserLocation } from "../../helpers";
import { CoordsContext } from "./CoordsContext";
import { coordsReducer } from "./coordsReducer";

export interface Coords {
  latitude: number; longitude: number 
}

export interface CoordsState {
  isLoading: boolean;
  userLocation?: Coords;
  coordsList: Coords[]
}

const INITIAL_STATE: CoordsState = {
  isLoading: true,
  userLocation: undefined,
  coordsList: [{ latitude: 0, longitude: 0 }]
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const CoordsProvider = ({ children }: Props) => {

  const [coordsState, coordsDispatch] = useReducer(coordsReducer, INITIAL_STATE);
  // const [coordsArrayState, coordsArrayDispatch] = useReducer(coordsReducer, INITIAL_STATE);
  const [coordsList, setCoordsList]: any[] = useState([])

  useEffect( () => {
    getUserLocation()
      .then( coords => {
        coordsDispatch({ type: 'setUserLocation', payload: coords});
        console.log(coords);
        
      })
  }, [coordsState.isLoading])

  return (
    <CoordsContext.Provider
      value={{
       ...coordsState,
      }}
    >
      {children}
    </CoordsContext.Provider>
  );
};
