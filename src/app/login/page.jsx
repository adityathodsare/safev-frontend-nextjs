"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "../../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.username, formData.password);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="username"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => router.push("/register")}>
        Not Registered? Sign Up
      </button>
    </div>
  );
}
