import Navbar from "../components/ui/Navbar";
import BackGround from "../components/Background";
import React from "react";
import Footer from "../components/Footer";
import { WavyBackground } from "@/components/ui/wavy-background";

function page() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <BackGround />
      <Footer />
    </main>
  );
}

export default page;
