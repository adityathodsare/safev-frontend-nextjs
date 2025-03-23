"use client";

import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";

export default function LogoutPage() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold">Logging out...</h2>
    </div>
  );
}
