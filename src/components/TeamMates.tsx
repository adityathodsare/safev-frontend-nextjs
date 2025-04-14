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
    image: "/img/1.jpg",
  },
  {
    id: 2,
    name: "aditya thodsare",
    designation: "TE entc student",
    skills: "springBoot, React, NextJs, IOT",
    image: "/img/3.jpg",
  },
  {
    id: 3,
    name: "khushi sharma",
    designation: "TE entc student",
    skills: "springBoot, React, NextJs, IOT",
    image: "/img/2.jpg",
  },
];

export function TeamMates() {
  return (
    <div className="w-full px-4">
      <div className=" text-gray-100  text-4xl font-extrabold text-center  mt-10 mb-6">
        Team Sigma
      </div>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}
