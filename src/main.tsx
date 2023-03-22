import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss';

if ( !navigator.geolocation) {
alert('Tu dispositivo no tiene activa la geolocalizacion');
throw new Error('Tu dispositivo no tiene activa la geolocalizacion');
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
