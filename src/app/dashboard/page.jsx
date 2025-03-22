"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      router.push("/login");
    }
  }, []);

  return <h1>Welcome to Dashboard</h1>;
}
