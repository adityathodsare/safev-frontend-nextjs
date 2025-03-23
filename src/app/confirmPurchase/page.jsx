"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmPurchasePage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      setMessage("Unauthorized! Please login first.");
    }
  }, []);

  const handleConfirm = async () => {
    setIsProcessing(true);
    const token = localStorage.getItem("jwtToken");

    const res = await fetch("http://localhost:8080/sendmail", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.text();
    setMessage(data);
    setIsProcessing(false);

    setTimeout(() => {
      router.push("/success"); // Redirect to success page after confirmation
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
          Confirm Your Purchase
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
          Please review the details before proceeding. Once you confirm, you
          will receive an email confirmation.
        </p>

        {message ? (
          <p className="text-green-600 dark:text-green-400 text-center font-semibold">
            {message}
          </p>
        ) : (
          <button
            onClick={handleConfirm}
            disabled={isProcessing}
            className={`w-full px-6 py-3 ${
              isProcessing ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold rounded-lg transition duration-300 shadow-md`}
          >
            {isProcessing ? "Processing..." : "Confirm Purchase"}
          </button>
        )}
      </div>
    </div>
  );
}
