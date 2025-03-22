"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { WavyBackground } from "../components/ui/wavy-background";

const people = [
  {
    id: 1,
    name: "kirti shelke",
    designation: "TE entc student",
    skills: "springBoot, React, NextJs, IOT",
    image:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "aditya thodsare",
    designation: "TE entc student",
    skills: "springBoot, React, NextJs, IOT",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "khushi sharma",
    designation: "TE entc student",
    skills: "springBoot, React, NextJs, IOT",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

export function TeamMates() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
