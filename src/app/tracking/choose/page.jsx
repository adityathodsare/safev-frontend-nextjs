"use client";
import React from "react";
import { useNavigation } from "@/context/NavigationContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const { navigateWithLoader } = useNavigation();
  const router = useRouter();

  const handleNavigation = (path) => {
    navigateWithLoader(router, path);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 font-mono">
      {/* Title with techy gradient */}
      <h1 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        VEHICLE SAFETY CONTROL
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-2xl">
        {/* Alcohol Tracking Button - Neon Blue */}
        <button
          onClick={() => handleNavigation("/alcoholtrack")}
          className="relative group overflow-hidden rounded-xl p-0.5 bg-gradient-to-br from-cyan-400 to-blue-600 cursor-pointer"
        >
          <div className="relative bg-gray-900 p-8 rounded-xl group-hover:bg-gray-800 transition-all duration-300">
            <div className="flex flex-col items-center">
              <span className="text-cyan-400 text-2xl font-bold mb-2">
                MADAKSH
              </span>
              <span className="text-gray-300">Alcohol Detection</span>
              <div className="absolute -bottom-2 -right-2 text-8xl opacity-10 text-cyan-400">
                01
              </div>
            </div>
            <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          </div>
        </button>

        {/* Accident Tracking Button - Neon Pink */}
        <button
          onClick={() => handleNavigation("/accidenttrack")}
          className="relative group overflow-hidden rounded-xl p-0.5 bg-gradient-to-br from-pink-500 to-purple-600 cursor-pointer"
        >
          <div className="relative bg-gray-900 p-8 rounded-xl group-hover:bg-gray-800 transition-all duration-300">
            <div className="flex flex-col items-center">
              <span className="text-pink-400 text-2xl font-bold mb-2">
                AGNIVAR
              </span>
              <span className="text-gray-300">Accident Detection</span>
              <div className="absolute -bottom-2 -right-2 text-8xl opacity-10 text-pink-400">
                02
              </div>
            </div>
            <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          </div>
        </button>
      </div>

      {/* Footer note */}
      <p className="mt-16 text-gray-500 text-sm">
        Real-time IoT monitoring system
      </p>
    </div>
  );
}
