import React, { createContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user') || null));

  const login = async (inputs) => {
    const res = await axios.post('/auth/login', inputs);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post('/auth/logout');
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  const authContextWrapper = useMemo(() => ({ currentUser, login, logout }), [currentUser, login, logout]);

  return (
    <AuthContext.Provider value={authContextWrapper}>
      {children}
    </AuthContext.Provider>
  );
};
