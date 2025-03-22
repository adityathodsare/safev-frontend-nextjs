"use client";

import { useEffect, useState } from "react";

export default function ConfirmPurchasePage() {
  const [message, setMessage] = useState("Processing...");

  useEffect(() => {
    const sendEmail = async () => {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        setMessage("Unauthorized! Please login first.");
        return;
      }

      const res = await fetch("http://localhost:8080/sendmail", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.text();
      setMessage(data);
    };

    sendEmail();
  }, []);

  return (
    <div className="container">
      <h2>Purchase Confirmation</h2>
      <p>{message}</p>
    </div>
  );
}
