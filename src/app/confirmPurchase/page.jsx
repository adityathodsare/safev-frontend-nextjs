"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useNavigation } from "@/context/NavigationContext";

export default function ConfirmPurchasePage() {
  const router = useRouter();
  const { navigateWithLoader } = useNavigation();
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
      navigateWithLoader(router, "/success"); // Redirect to success page after confirmation
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-violet-500/30 shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-center mb-6 animate-pulse">
          Confirm Your Purchase
        </h2>
        <p className="text-sm text-zinc-300 text-center mb-6">
          Please review the details before proceeding. Once you confirm, you
          will receive an email confirmation.
        </p>

        {message ? (
          <p className="text-center text-green-400 font-semibold mb-4">
            {message}
          </p>
        ) : (
          <button
            onClick={handleConfirm}
            disabled={isProcessing}
            className={`w-full px-6 py-3 rounded-lg text-white font-bold transition duration-300 shadow-lg ${
              isProcessing
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 hover:opacity-90"
            }`}
          >
            {isProcessing ? "Processing..." : "Confirm Purchase"}
          </button>
        )}
      </div>
    </div>
  );
}
