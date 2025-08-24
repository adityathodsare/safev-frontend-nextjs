"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "../../context/AuthContext";
import { useNavigation } from "@/context/NavigationContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const { navigateWithLoader } = useNavigation();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.username, formData.password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <div className="w-full max-w-md bg-[#0e0e0e] border border-[#ff00ff50] shadow-[0_0_30px_#ff00ff40,0_0_20px_#00f7ff30] rounded-2xl p-8 transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wide bg-gradient-to-r from-pink-500 via-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_5px_#f0f]">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <input
            type="email"
            name="username"
            placeholder="Email"
            className="px-4 py-3 rounded-lg border border-pink-500 bg-[#1a1a1a] text-pink-400 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition shadow-[0_0_10px_#ff00ff30]"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg border border-blue-500 bg-[#1a1a1a] text-blue-400 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-[0_0_10px_#00f7ff30]"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600 hover:from-pink-600 hover:via-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-[0_0_20px_#ff00ff80] hover:shadow-[0_0_25px_#ff00ffcc] transition duration-300"
          >
            Login
          </button>
        </form>
        <button
          className="mt-5 w-full text-center text-sm text-purple-400 hover:text-pink-400 hover:underline transition"
          onClick={() => navigateWithLoader(router, "/register")}
        >
          Not Registered? <span className="font-medium">Sign Up</span>
        </button>
      </div>
    </div>
  );
}
