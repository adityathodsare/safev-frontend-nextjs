"use client"; // This ensures React hooks work in Next.js

import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(); // Ensure this is correctly created

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const router = useRouter();

  // Check for token in localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    const res = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    });

    if (res.ok) {
      const data = await res.text();
      setToken(data);
      localStorage.setItem("jwtToken", data);
      router.push("/confirmPurchase");
    } else {
      alert("Invalid Credentials");
    }
  };

  // Logout function
  const logout = () => {
    setToken(null);
    localStorage.removeItem("jwtToken");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
