export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.watchPosition(
        ({ coords}) => {
            resolve([coords.longitude, coords.latitude])
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
