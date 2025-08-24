"use client";
import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-24 h-24 border-4 border-transparent border-t-blue-500 border-r-pink-500 border-b-purple-500 border-l-cyan-500 rounded-full animate-spin"></div>

        {/* Inner pulsing circle */}
        <div className="absolute inset-2 w-20 h-20 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 rounded-full animate-pulse opacity-75"></div>

        {/* Center dot */}
        <div className="absolute inset-4 w-16 h-16 bg-white rounded-full animate-bounce"></div>

        {/* Glowing effect */}
        <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>

      {/* Animated dots */}
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 flex space-x-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
};

export default PageLoader;
