import { Coords } from "../context/coords/CoordsProvider";

export const getUserLocation = async (): Promise<Coords> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.watchPosition(
        ({ coords}) => {
            resolve({longitude: coords.longitude, latitude: coords.latitude})
        },
        ( err ) => {
            console.log(err);
            reject(err)
        },
        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0,
        }
    )
  });
};
