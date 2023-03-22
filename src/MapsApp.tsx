import { CoordsProvider } from "./context";
import { HomeScreen } from "./screens";

export const MapsApp = () => {
  return (
		<CoordsProvider>
			<HomeScreen />
		</CoordsProvider>
	);
};
