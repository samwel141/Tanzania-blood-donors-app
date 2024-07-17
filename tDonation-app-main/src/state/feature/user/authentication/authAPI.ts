/* eslint-disable prettier/prettier */
import {API_URL} from '@env';
// import Config from 'react-native-config';

// console.log(Config.API_URL); // Outputs: https://api.example.com
// const API_URL = Config.API_URL;

// Function to register a user
export const registerUser = async (userData: any) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    return data;
  } catch (error: any) {
    throw error; // Rethrow to be caught by createAsyncThunk
  }
};

// Function to login a user
export const loginUser = async (credentials: any) => {
  try {
    const response = await fetch(`${API_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    return {
      success: true,
      data: data,
    };
  } catch (error: any) {
    throw error; // Rethrow to be caught by createAsyncThunk
  }
};
