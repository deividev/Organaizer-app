import { render } from "@testing-library/react";
import { getUserLocation } from "../../helpers";
import { Coords, CoordsProvider, CoordsState } from "../coords/CoordsProvider";


jest.mock('../../helpers/getUserLocation');

describe("CoordsProvider", () => {
  // Creamos un estado de coordenadas de ejemplo
  const mockCoordsState: CoordsState = {
    isLoading: true,
    userLocation: undefined,
    coordsList: [{ latitude: 0, longitude: 0 }],
    distanceTraveled: 0,
  };

	it('llama a getUserLocation después de que se monta el componente', async () => {
    // Configuramos el mock de getUserLocation para que resuelva con una ubicación de ejemplo
		const mockUserLocation = (): Promise<Coords> =>  {
			return new Promise((resolve, reject) => {
				resolve({longitude: 0, latitude: 10})
				reject('awdawd awdawd awedawd')
			});
		}
    // getUserLocation.mockResolvedValue(mockUserLocation); 
		// Renderizamos el componente
    render(<CoordsProvider>{}</CoordsProvider>);

		// Esperamos a que se resuelva la promesa de getUserLocation
		await expect(getUserLocation).toHaveBeenCalled();

    // Comprobamos que getUserLocation se haya llamado una vez
    expect(getUserLocation).toHaveBeenCalledTimes(1);
  });

});
