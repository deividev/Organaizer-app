import { Coords, CoordsState } from "./CoordsProvider";

type CoordsAction = { type: "setUserLocation"; payload:  Coords };

export const coordsReducer = (
  state: CoordsState,
  action: CoordsAction
): CoordsState => {
  switch (action.type) {
    case "setUserLocation":
      debugger
      const ultimateCoords = state.coordsList[state.coordsList?.length - 1];
      const updateState = state.coordsList.filter((coords: Coords) => {
        if (coords.latitude !== 0 && coords.longitude !== 0) {
            return coords
        } 
        return
      })
      if (ultimateCoords.longitude !== action.payload.longitude && ultimateCoords.latitude !== action.payload.latitude) {
        const payload: Coords[] = [...updateState, action.payload];
        return {
          ...state,
          isLoading: false,
          userLocation: action.payload,
          coordsList: payload
        };
      }
      return {
        ...state,
        isLoading: false,
      };
      
    default:
      return state;
  }
};
