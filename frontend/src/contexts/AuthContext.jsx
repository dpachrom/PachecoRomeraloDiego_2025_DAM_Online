// src/contexts/AuthContext.jsx

import React, { createContext, useState, useEffect, useCallback } from "react";
import { loginRequest, getMe, registerRequest } from "../services/AuthService";
import { updateProfile } from "../services/UserService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser]     = useState(null);
  const [token, setToken]   = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(() => {
    sessionStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setLoading(false);
  }, []);

  const fetchUserData = useCallback(async () => {
    try {
      const data = await getMe();
      setUser({ ...data, isAuthenticated: true });
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      logout();
    } finally {
      setLoading(false);
    }
  }, [logout]);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [fetchUserData]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const receivedToken = await loginRequest(email, password);
      sessionStorage.setItem("token", receivedToken);
      setToken(receivedToken);
      await fetchUserData();
    } catch (error) {
      console.error("Error en login:", error);
      setLoading(false);
      throw error;
    }
  };

   const register = async (data) => {
    await registerRequest(data);
    const me = await getMe();
    setUser(me);
  };

 const updateUser = useCallback(
   async (payload) => {
     const updated = await updateProfile(payload);
     setUser({ ...updated, isAuthenticated: true });
     return updated;
   },
   []
 );

  return (
    <AuthContext.Provider 
    value={{ user, token, loading, login, register, logout, updateUser }}
    >  
      {children}
    </AuthContext.Provider>
  );
};
