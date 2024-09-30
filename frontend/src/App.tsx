import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const username = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token del localStorage
    localStorage.removeItem('token');

    // Redirigir al usuario a la página de login
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="text-center p-8 bg-white shadow-md rounded">
        <h1 className="text-4xl font-bold text-green-600">¡Bienvenido, {username}!</h1>
        <p className="mt-4 text-xl text-gray-700">Has iniciado sesión con éxito</p>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default App;
