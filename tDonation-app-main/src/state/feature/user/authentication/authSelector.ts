/* eslint-disable prettier/prettier */
// src/features/authentication/selectors.ts

import {RootState} from '../../../store';

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.token !== null;
export const selectToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectAuthLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthError = (state: RootState) => state.auth.error;
