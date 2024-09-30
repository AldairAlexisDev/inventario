import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'; // Importamos Provider de react-redux
import { store } from './redux/store'; // Importamos nuestro store configurado
import AppRouter from './AppRouter'; // Importamos el AppRouter que creamos

// Creamos el root de la aplicación utilizando React 18
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Renderizamos la aplicación utilizando AppRouter
root.render(
  <React.StrictMode>
    {/* Proveemos el store de Redux a toda la aplicación */}
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
