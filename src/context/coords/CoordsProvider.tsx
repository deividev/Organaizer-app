import { useEffect, useReducer, useState } from "react";
import { getUserLocation } from "../../helpers";
import { CoordsContext } from "./CoordsContext";
import { coordsReducer } from "./coordsReducer";

export interface CoordsState {
  isLoading: boolean;
  userLocation?: [number, number] | [{ latitude: number; longitude: number }];
  coordsList: [[number, number]] | []
}

const INITIAL_STATE: CoordsState = {
  isLoading: true,
  userLocation: undefined,
  coordsList: []
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
        setCoordsList((currentArray: any[]) => [...currentArray, coords])
        console.log(coords);
      })
  }, [coordsState.userLocation])

  return (
    <CoordsContext.Provider
      value={{
       ...coordsState,
       coordsList
      }}
    >
      {children}
    </CoordsContext.Provider>
  );
};
