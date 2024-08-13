import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({ user: null, isLoggedIn: false });

  const login = (user) => {
    setAuthData({ user, isLoggedIn: true });
  };

  const logout = () => {
    setAuthData({ user: null, isLoggedIn: false });
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);