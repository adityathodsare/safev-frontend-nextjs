import BackGround from "../components/Background";
import React from "react";
import Footer from "../components/Footer";

import WhyChooseUs from "@/components/WhyChooseUs";

function page() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <BackGround />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}

export default page;
