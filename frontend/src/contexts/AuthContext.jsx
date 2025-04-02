import React, { createContext, useState, useEffect, useCallback } from "react";
import api from "../api";
import { loginRequest, getMe } from "../services/AuthService";
import { set } from "../../../backend/src/config/database";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const logout = useCallback(() => {
    sessionStorage.removeItem("token");
    setToken(null);
    setUser(null);
  }, []);

  const fetchUserData = useCallback(async () => {
    try {
      //const response = await api.get("/auth/me");
      const data = await getMe();
      setUser({...data, isAuthenticated: true});
      //console.log("Respuesta de /auth/me:", response.data);
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      logout();
    }
  }, [logout]);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchUserData();
    }
  }, [fetchUserData]);

  const login = async (email, password) => {
    try {
      const receivedToken = await loginRequest(email, password);
      sessionStorage.setItem("token", receivedToken);
      setToken(receivedToken);
      await fetchUserData();
    } catch (error) {
      console.error("Error en login:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
