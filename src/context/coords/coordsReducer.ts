import { CoordsState } from "./CoordsProvider";

type CoordsAction = { type: "setUserLocation"; payload: [number, number] };

export const coordsReducer = (
  state: CoordsState,
  action: CoordsAction
): CoordsState => {
  switch (action.type) {
    case "setUserLocation":
      return {
        ...state,
        isLoading: false,
        userLocation: action.payload,
      };
    default:
      return state;
  }
};
