"use client";
import { useRouter } from "next/navigation";

export default function BuyPage() {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("jwtToken") : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-80 md:w-96">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
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
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              onClick={() => router.push("/register")}
            >
              Buy Now
            </button>
          ) : (
            <button
              className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
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
