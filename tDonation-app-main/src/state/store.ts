/* eslint-disable prettier/prettier */
// src/app/store.ts
import {configureStore} from '@reduxjs/toolkit';
// import authReducer from './feature/user/authentication/authSlice';
// import deliveryRequestReducer from './feature/delivery_request/deliveryRequestSlice';
// import locationsReducer from './feature/location/locationsSlice';
export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // deliveryRequest: deliveryRequestReducer,
    // locations: locationsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools in development
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
