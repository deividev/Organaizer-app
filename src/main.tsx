import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CoordsProvider } from './context';
import './styles/main.scss';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoieGFtcGl4IiwiYSI6ImNsZmwwcHBiZzAwajIzcnBvYWplaHdmNXkifQ.sXB7PPyToBCl6yDHA9F0_Q';


if ( !navigator.geolocation) {
alert('Tu dispositivo no tiene activa la geolocalizacion');
throw new Error('Tu dispositivo no tiene activa la geolocalizacion');
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CoordsProvider>
      <App />
    </CoordsProvider>
  </React.StrictMode>,
)
