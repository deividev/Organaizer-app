import { MapsApp } from "./MapsApp";
import "./styles/main.scss";
// import { Link } from "./components/Link/Link";
// import { Button } from "./components/Button/Button";
// import { Icon } from "./components/Icon/Icon";
// import { ICONS } from "./constants/icons";
// import TextField from './components/Text-field/Text-field';

function App() {
  const options: any = {
    //enableHighAccuracy: false,
    //timeout: 5000,
    //maximumAge: 0
  };
  navigator.geolocation.watchPosition(successCallback, errorCallback, options);

  function successCallback(position: any) {
    const { accuracy, latitude, longitude, altitude, heading, speed } =
      position.coords;
    // Show a map centered at latitude / longitude.
  }
  function errorCallback(error: any) {}

  return (
    <div className="App">
      <h1>Geolocalizacion en tiempo real</h1>
      <MapsApp></MapsApp>
      {/* <Button mode="secondary" size="large">
        Paco
        <Icon size={48} icon={"cart_shopping"} color="black"></Icon>
      </Button>
      <Link url="paco">PEpo</Link>
      <Icon size={48} icon={ICONS.instagram} color="green"></Icon> */}
    </div>
  );
}

export default App;
