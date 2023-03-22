import { useReducer } from "react";
import { CoordsContext } from "./CoordsContext";
import { coordsReducer } from "./coordsReducer";

export interface CoordsState {
  isLoading: boolean;
  userLocation?: [number, number] | [{ latitude: number; longitude: number }];
}

const INITIAL_STATE: CoordsState = {
  isLoading: true,
  userLocation: undefined,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const CoordsProvider = ({ children }: Props) => {

  const [coordsState, coordsDispatch] = useReducer(coordsReducer, INITIAL_STATE)
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