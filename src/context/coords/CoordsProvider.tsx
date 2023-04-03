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
  coordsList: Coords[];
  distanceTraveled: number;
}

const INITIAL_STATE: CoordsState = {
  isLoading: true,
  userLocation: undefined,
  coordsList: [{ latitude: 0, longitude: 0 }],
  distanceTraveled: 0
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const CoordsProvider = ({ children }: Props) => {

  const [coordsState, coordsDispatch] = useReducer(coordsReducer, INITIAL_STATE);

  useEffect( () => {
    getUserLocation()
      .then( coords => {
        coordsDispatch({ type: 'setUserLocation', payload: coords});
      })
  }, [coordsState.coordsList])

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
