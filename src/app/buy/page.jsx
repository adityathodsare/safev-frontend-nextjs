"use client";
import { useRouter } from "next/navigation";

export default function BuyPage() {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("jwtToken") : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Welcome to SafeV
      </h1>
      {!token ? (
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={() => router.push("/register")}
        >
          Buy Now
        </button>
      ) : (
        <button
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
          onClick={() => router.push("/confirmPurchase")}
        >
          Proceed to Purchase
        </button>
      )}
    </div>
  );
}
