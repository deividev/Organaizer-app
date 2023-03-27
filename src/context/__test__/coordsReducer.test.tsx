import { Coords, CoordsState } from "../coords/CoordsProvider";
import {
  calcularDistanciaEntreDosCoordenadas,
  CoordsAction,
  coordsReducer,
  gradosARadianes,
} from "../coords/coordsReducer";

test("test_grados_a_radianes_returns_correct_value", () => {
  // Arrange
  const grados = 45;
  const expected = 0.7853981633974483;
  // Act
  const result = gradosARadianes(grados);
  // Assert
  expect(result).toBe(expected);
});

test("test_same_coordinates", () => {
  expect(calcularDistanciaEntreDosCoordenadas(1, 2, 1, 2)).toBe(0);
});

test("test_add_first_coords", () => {
  const initialState: CoordsState = {
    isLoading: false,
    userLocation: undefined,
    coordsList: [
      { latitude: 0, longitude: 0 },
    ],
    distanceTraveled: 0,
  };
  const action: CoordsAction = {
    type: "setUserLocation",
    payload: { latitude: 30.712776, longitude: -34.005974 },
  };
  const newState = coordsReducer(initialState, action);
  expect(newState.coordsList).toHaveLength(1);
  expect(newState.isLoading).toBe(false);
  expect(newState.coordsList).toEqual([
    { latitude: 30.712776, longitude: -34.005974 },
  ]);
  expect(newState.distanceTraveled).toEqual(0);
});

test("test_user_location_zero", () => {
  const initialState: CoordsState = {
    isLoading: false,
    userLocation: { latitude: 0, longitude: 0 },
    coordsList: [
      { latitude: 40.712776, longitude: -74.005974 },
    ],
    distanceTraveled: 0,
  };
  const action: CoordsAction = {
    type: "setUserLocation",
    payload: { latitude: 30.712776, longitude: -34.005974 },
  };
  const newState = coordsReducer(initialState, action);
  expect(newState.coordsList).toHaveLength(2);
});

test("test_filter_coorsList_to_coords_0", () => {
  const initialState: CoordsState = {
    isLoading: false,
    userLocation: { latitude: 40.712776, longitude: -74.005974 },
    coordsList: [
      { latitude: 61.712776, longitude: -51.005974 },
      { latitude: 0, longitude: 0 },
      { latitude: 20.712776, longitude: 44.005974 },
      { latitude: 0, longitude: 0 },
      { latitude: 37.712776, longitude: -24.005974 }
    ],
    distanceTraveled: 0,
  };
  const action: CoordsAction = {
    type: "setUserLocation",
    payload: { latitude: 40.712776, longitude: -74.005974 },
  };
  const newState = coordsReducer(initialState, action);
  expect(newState.coordsList).toEqual([
    { latitude: 61.712776, longitude: -51.005974 },
    { latitude: 20.712776, longitude: 44.005974 },
    { latitude: 37.712776, longitude: -24.005974 },
    { latitude: 40.712776, longitude: -74.005974 }
  ]);
  expect(newState.coordsList).toHaveLength(4);
});



test("test_user_location_same_as_last", () => {
  const initialState: CoordsState = {
    isLoading: false,
    userLocation: { latitude: 0, longitude: 0 },
    coordsList: [
      { latitude: 40.712776, longitude: -74.005974 },
      { latitude: 37.7749, longitude: -122.4194 },
      { latitude: 51.5074, longitude: -0.1278 },
    ],
    distanceTraveled: 0,
  };
  const action: CoordsAction = {
    type: "setUserLocation",
    payload: { latitude: 51.5074, longitude: -0.1278 },
  };
  const newState = coordsReducer(initialState, action);
  expect(newState.coordsList).toHaveLength(3);
  expect(newState.distanceTraveled).toBeCloseTo(0);
});

test("test_set_user_location_with_same_ultimate_coords", () => {
    // Arrange
    const initialState: CoordsState = {
      isLoading: false,
      userLocation: { latitude: 1, longitude: 1 },
      coordsList: [
        { latitude: 1, longitude: 1 },
      ],
      distanceTraveled: 0,
    };
    const payload: Coords = { latitude: 1, longitude: 1 };
    const action: CoordsAction = { type: "setUserLocation", payload };
    // Act
    const newState = coordsReducer(initialState, action);
    // Assert
    expect(newState.isLoading).toBe(false);
    expect(newState.userLocation).toEqual(payload);
    expect(newState.coordsList).toEqual([
      { latitude: 1, longitude: 1 },
    ]);
    expect(newState.distanceTraveled).toBe(0);
  });
