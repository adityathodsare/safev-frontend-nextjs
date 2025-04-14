"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackingPage() {
  const [ucod, setUcod] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ucod.trim().toLowerCase() === "sigma001") {
      router.push("/tracking/choose");
    } else {
      router.push("tracking/error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0a0f1c] border-2 border-transparent p-8 rounded-xl shadow-lg w-full max-w-md
                   hover:border-[3px] hover:border-cyan-500 transition duration-300"
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-500">
          Enter Device UCOD
        </h1>

        <input
          type="text"
          value={ucod}
          onChange={(e) => setUcod(e.target.value)}
          placeholder="UCOD is given back side of the device"
          className="w-full p-3 rounded-md text-cyan-300 bg-[#0f172a] border border-cyan-500 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-[0_0_10px_cyan] mb-6"
        />

        <button
          type="submit"
          className="w-full py-2 rounded-md font-semibold text-[#0a0f1c] bg-gradient-to-r from-cyan-400 to-pink-500 hover:from-pink-500 hover:to-cyan-400 transition-all duration-300 hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
