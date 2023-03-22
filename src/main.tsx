import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CoordsProvider } from './context';
import './styles/main.scss';

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
