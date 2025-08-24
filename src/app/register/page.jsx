"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNavigation } from "@/context/NavigationContext";

export default function RegisterPage() {
  const router = useRouter();
  const { navigateWithLoader } = useNavigation();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    address: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Registration Successful! Please Login.");
      navigateWithLoader(router, "/login");
    } else {
      alert("Registration Failed! Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 mb-6 animate-pulse">
        Register
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col space-y-5 bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-violet-500/20"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="px-4 py-3 rounded-lg bg-zinc-800 text-white border border-pink-500/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="username"
          placeholder="Email"
          className="px-4 py-3 rounded-lg bg-zinc-800 text-white border border-violet-500/30 focus:outline-none focus:ring-2 focus:ring-violet-500"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="px-4 py-3 rounded-lg bg-zinc-800 text-white border border-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="px-4 py-3 rounded-lg bg-zinc-800 text-white border border-pink-500/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          className="px-4 py-3 rounded-lg bg-zinc-800 text-white border border-violet-500/30 focus:outline-none focus:ring-2 focus:ring-violet-500"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white font-bold shadow-lg hover:opacity-90 transition duration-300"
        >
          Register
        </button>
      </form>
      <button
        className="mt-5 text-sm text-blue-400 hover:underline"
        onClick={() => navigateWithLoader(router, "/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}
