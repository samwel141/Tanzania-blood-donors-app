/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import {loginThunk, registerThunk} from './authThunk';

interface UserProfileType {
  userID: string;
  token: string;
  expoPushToken: string | null;
  profilePhoto: string;
  username: string;
  rating: number;
  phone: string;
  status: string;
}

interface AuthState {
  user: UserProfileType | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        console.log(JSON.stringify(action.payload, null, 2));
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to login';
      })
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null; // Clear any errors
        // Assuming the action payload includes the user and token information
        state.user = action.payload.user;
        state.token = action.payload.token;
        // Optionally, you might want to navigate the user to a different screen or display a success message
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to register';
      });
    // Add cases for any other thunks you have, such as fetching user profiles
  },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
