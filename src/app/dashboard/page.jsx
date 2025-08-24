"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useNavigation } from "@/context/NavigationContext";

export default function Dashboard() {
  const router = useRouter();
  const { navigateWithLoader } = useNavigation();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigateWithLoader(router, "/login");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Welcome to Dashboard
      </h1>
    </div>
  );
}
