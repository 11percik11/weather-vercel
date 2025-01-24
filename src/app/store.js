import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../components/features/weatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});