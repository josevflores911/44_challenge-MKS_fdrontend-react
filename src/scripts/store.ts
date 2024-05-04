import { configureStore } from '@reduxjs/toolkit';
import buyReducer from './buySlice';

export const store = configureStore({
    reducer: {
      product: buyReducer,
    }, 
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;