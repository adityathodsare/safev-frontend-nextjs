"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";
import { FlipWords } from "../components/ui/flip-words";
import { useRouter } from "next/navigation";
import { useNavigation } from "@/context/NavigationContext";

function Background() {
  const words = ["SAFE-V", "Secure", "Shielded", "Systematic"];
  const router = useRouter();
  const { navigateWithLoader } = useNavigation();

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Header Section */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-100 to-neutral-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans py-2 sm:py-4 relative z-20 font-bold tracking-tight">
              Smart Accident & Fire Emergency for Vehicles
            </h2>

            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-auto font-normal text-neutral-200 relative z-20">
              <FlipWords words={words} /> <br />
            </div>
          </div>

          {/* Enhanced Button Container */}
          <div className="w-full max-w-2xl mx-auto space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-3 sm:gap-4 md:gap-6 relative z-30">
            {/* Buy Now Button */}
            <div className="w-full">
              <button
                onClick={() => navigateWithLoader(router, "/buy")}
                className="group relative w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white text-base sm:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 ease-out border border-blue-400/30 hover:border-blue-300/50 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Buy Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Track Data Button */}
            <div className="w-full">
              <button
                onClick={() => navigateWithLoader(router, "/tracking")}
                className="group relative w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white text-base sm:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 ease-out border border-emerald-400/30 hover:border-emerald-300/50 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Track Data
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Currently Working On Button */}
            <div className="w-full">
              <button
                onClick={() => navigateWithLoader(router, "/remaining")}
                className="group relative w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white text-base sm:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 ease-out border border-amber-400/30 hover:border-amber-300/50 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 group-hover:spin transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="hidden sm:inline">Working On...</span>
                  <span className="sm:hidden">In Progress</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-red-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Optional: Add a subtle description */}
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed relative z-20">
            Advanced vehicle safety system with real-time monitoring and
            emergency response capabilities
          </p>
        </div>
      </BackgroundLines>
    </div>
  );
}

export default Background;
