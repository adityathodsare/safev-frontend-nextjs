"use client";

import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-96 text-center">
        <h2 className="text-2xl font-bold text-green-600">
          Purchase Successful!
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          🎉 You will receive a confirmation email shortly. The email contains
          your **Room ID**, which you can use for further communication.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          If your **address is incorrect**, please reach out to us via the
          **chatbox**. Our team will contact you as soon as possible.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
