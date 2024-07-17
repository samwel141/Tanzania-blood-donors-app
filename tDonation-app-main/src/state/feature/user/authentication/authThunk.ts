/* eslint-disable prettier/prettier */
// authThunk.ts

import {createAsyncThunk} from '@reduxjs/toolkit';
import {loginUser, registerUser} from './authAPI';

// Login thunk
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (
    credentials: {username: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const response = await loginUser(credentials);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Unable to login');
    }
  },
);

// Register thunk
export const registerThunk = createAsyncThunk(
  'auth/register',
  async (userData: any, {rejectWithValue}) => {
    try {
      const response = await registerUser(userData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Unable to register');
    }
  },
);
