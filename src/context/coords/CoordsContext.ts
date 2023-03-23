import { createContext } from "react";
import { Coords } from "./CoordsProvider";

export interface CoordsContextProps {
  isLoading: boolean;
  userLocation?: Coords;
  coordsList: Coords[];
  distanceTraveled: number;
}

export const CoordsContext = createContext({} as CoordsContextProps);
