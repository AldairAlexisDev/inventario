import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Importamos el slice de autenticación

export const store = configureStore({
  reducer: {
    auth: authReducer, // Añadimos el reducer de autenticación al store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
