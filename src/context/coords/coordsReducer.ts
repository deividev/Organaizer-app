import { Coords, CoordsState } from "./CoordsProvider";

type CoordsAction = { type: "setUserLocation"; payload: Coords };

const gradosARadianes = (grados: number) => {
  return (grados * Math.PI) / 180;
};

const calcularDistanciaEntreDosCoordenadas = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  // Convertir todas las coordenadas a radianes
  lat1 = gradosARadianes(lat1);
  lon1 = gradosARadianes(lon1);
  lat2 = gradosARadianes(lat2);
  lon2 = gradosARadianes(lon2);
  // Aplicar fórmula
  const RADIO_TIERRA_EN_KILOMETROS = 6371;
  let diferenciaEntreLongitudes = lon2 - lon1;
  let diferenciaEntreLatitudes = lat2 - lat1;
  let a =
    Math.pow(Math.sin(diferenciaEntreLatitudes / 2.0), 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.pow(Math.sin(diferenciaEntreLongitudes / 2.0), 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return RADIO_TIERRA_EN_KILOMETROS * c;
};

export const coordsReducer = (
  state: CoordsState,
  action: CoordsAction
): CoordsState => {
  switch (action.type) {
    case "setUserLocation":
      let sumDistance: number = 0;
      const ultimateCoords = state.coordsList[state.coordsList?.length - 1];
      if ((ultimateCoords.latitude && ultimateCoords.latitude) !== 0) {
        const distanceTraveleUltimate = calcularDistanciaEntreDosCoordenadas(
          ultimateCoords.latitude,
          ultimateCoords.longitude,
          action.payload.latitude,
          action.payload.longitude
        );
        sumDistance = state?.distanceTraveled + distanceTraveleUltimate;
      }
      const updateState = state.coordsList.filter((coords: Coords) => {
        if (coords.latitude !== 0 && coords.longitude !== 0) {
          return coords;
        }
        return;
      });
      if (
        ultimateCoords.longitude !== action.payload.longitude &&
        ultimateCoords.latitude !== action.payload.latitude
      ) {
        const payload: Coords[] = [...updateState, action.payload];

        return {
          ...state,
          isLoading: false,
          userLocation: action.payload,
          coordsList: payload,
          distanceTraveled: sumDistance,
        };
      }
      return {
        ...state,
        isLoading: false,
        distanceTraveled: sumDistance,
      };

    default:
      return state;
  }
};
