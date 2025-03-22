"use client";
import { useRouter } from "next/navigation";

export default function BuyPage() {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("jwtToken") : null;

  return (
    <div>
      <h1>Welcome to SafeV</h1>
      {!token ? (
        <button onClick={() => router.push("/register")}>Buy Now</button>
      ) : (
        <button onClick={() => router.push("/confirm-purchase")}>
          Proceed to Purchase
        </button>
      )}
    </div>
  );
}
