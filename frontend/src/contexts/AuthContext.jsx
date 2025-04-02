import React, { createContext, useState, useEffect, useCallback } from "react";
import api from "../api";
import { loginRequest, getMe } from "../services/AuthService";

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
      const response = await api.get("/auth/me");

      console.log("Respuesta de /auth/me:", response.data);

      setUser({ ...response.data, isAuthenticated: true });
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
      const response = await api.post("/auth/login", { email, password });
      const receivedToken = response.data.token;
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
