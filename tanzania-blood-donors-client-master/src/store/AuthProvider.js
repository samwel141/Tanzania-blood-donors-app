import React, { useState } from 'react';
// import jwt_decode from 'jwt-decode';
import AuthContext from './auth-context';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

const AuthProvider = (props) => {
//   const tokenKey = 'token';
//   const usernameKey = 'username';

  const retrieveToken = () => localStorage.getItem(tokenKey);
  const retrieveusername = () => JSON.parse(localStorage.getItem(usernameKey));

  const [username, setUsername] = useState(retrieveusername);
  const [token, setToken] = useState(retrieveToken);
  const [isLoggedIn, setIsLoggedIn] = useState(username && token);
  const navigate = useNavigate();

  
  const login = (newToken, rememberDetails, newusername) => {
    if (token === newToken) return;

    setToken(newToken);

    const username = newusername ? newusername : parseToken(newToken);
    setUsername(username);

    localStorage.setItem(usernameKey, JSON.stringify(username));

    if (rememberDetails) {
      localStorage.setItem(tokenKey, newToken);
    } else {
      localStorage.removeItem(tokenKey);
    }

    setIsLoggedIn(true);
    navigate('/');
  };

//   const parseToken = (token) => {
//     var decodedusernameInfo = jwt_decode(token);

//     return {
//       id: decodedusernameInfo.id,
//       name: decodedusernameInfo.name,
//       logoURL: decodedusernameInfo.logo_url,
//       createdAt: decodedusernameInfo.created_at,
//       expiration: decodedusernameInfo.expiration,
//       about: decodedusernameInfo.about,
//     };
//   };

  const logout = () => {
    setUsername(undefined);
    setToken(undefined);
    // localStorage.removeItem(tokenKey);
    // localStorage.removeItem(usernameKey);
    // secureLocalStorage.removeItem('api-key');
    navigate('/login');
  };

  const value = {
    isLoggedIn,
    login,
    logout,
    username,
    token,
    ...props.value,
  };

  if (!username || !token) {
    const localToken = JSON.parse(localStorage.getItem(tokenKey));
    const localusername = JSON.parse(localStorage.getItem(usernameKey));

    if (localToken && localusername) {
      login(localToken, true, localusername);
    }
  }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
