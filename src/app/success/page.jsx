"use client";

import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="bg-zinc-900 border border-violet-500/30 shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 mb-4 animate-pulse">
          ✅ Purchase Successful!
        </h2>
        <p className="text-zinc-300 mb-4">
          🎉 You will receive a confirmation email shortly. The email contains
          your <span className="font-bold text-pink-400">Room ID</span>, which
          you can use for further communication.
        </p>
        <p className="text-zinc-300 mb-4">
          If your{" "}
          <span className="font-bold text-blue-400">address is incorrect</span>,
          please reach out to us via the
          <span className="font-bold text-violet-400"> chatbox</span>. Our team
          will contact you as soon as possible.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 w-full px-6 py-3 rounded-lg text-white font-bold bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 hover:opacity-90 transition duration-300 shadow-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
