"use client";

import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";

export default function LogoutPage() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  }, []);

  return <h2>Logging out...</h2>;
}
