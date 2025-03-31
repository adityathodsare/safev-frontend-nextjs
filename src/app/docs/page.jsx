"use client";
import React from "react";
import Info1 from "./Info1";
import Connections1 from "./Connections1";
import Code1 from "./Code1";
import Code2 from "./Code2";
import Info2 from "./Info2";
import Connections2 from "./Connections2";

function page() {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700">
      <div className="h-40 flex my-20 py-20 flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-cyan-400 drop-shadow-[0_0_5px_#0ff]">
          Documentation
        </h1>
        <p className="text-red-300 mt-2 text-lg text-center max-w-lg">
          You can replicate the project as it is and customize as per your need.
        </p>
      </div>

      <Info1 />
      <Code1 />

      <Connections1 />
      <Info2 />
      <Code2 />
      <Connections2 />
    </div>
  );
}

export default page;
