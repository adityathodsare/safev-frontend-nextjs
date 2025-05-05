"use client";
import { useRouter } from "next/navigation";

export default function BuyPage() {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("jwtToken") : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="bg-zinc-900 border border-pink-500/50 shadow-xl rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-500 to-blue-500 mb-4 animate-glow">
          Welcome to SafeV
        </h1>
        <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
          <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
            Price: <span className="line-through text-gray-500">₹4000</span>{" "}
            ₹2000
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            + Tax & Shipping Charges
          </p>
        </div>
        <div className="mt-4 text-left text-sm text-gray-700 dark:text-gray-300">
          <p>
            ✔ After confirming the order, you will receive an email with a
            unique code.
          </p>
          <p>
            ✔ This code must be verified upon message receipt or during
            communication.
          </p>
          <p>✔ First 50% payment is mandatory.</p>
        </div>
        <div className="mt-6">
          {!token ? (
            <button
              className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white font-semibold rounded-md hover:opacity-80 transition transform hover:scale-105 shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              onClick={() => router.push("/register")}
            >
              Buy Now
            </button>
          ) : (
            <button
              className="w-full px-4 py-2 bg-gradient-to-r from-green-400 via-blue-400 to-pink-500 text-white font-semibold rounded-md hover:opacity-80 transition transform hover:scale-105 shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400/50"
              onClick={() => router.push("/confirmPurchase")}
            >
              Proceed to Purchase
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
