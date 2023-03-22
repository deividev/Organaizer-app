import { createContext } from "react";

export interface CoordsContextProps {
  isLoading: boolean;
  userLocation?: [number, number] | [{ latitude: number; longitude: number }];
}

export const CoordsContext = createContext({} as CoordsContextProps);
