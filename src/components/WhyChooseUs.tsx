"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

// Importing React Icons
import { FaCarCrash } from "react-icons/fa";
import { WiThermometer } from "react-icons/wi";
import { GiGasMask, GiBeerBottle } from "react-icons/gi";
import { MdMinorCrash } from "react-icons/md";

const projectFeatures = [
  {
    title: "Accident Detection & Alert System",
    description:
      "Our system detects accidents using advanced sensors and sends immediate alerts via Telegram and email. This ensures rapid emergency response and helps save lives by notifying family members and emergency services in real time.",
    content: (
      <div className="flex flex-col justify-center items-center h-full text-purple-500">
        <FaCarCrash size={80} />
      </div>
    ),
  },
  {
    title: "Real-time Temperature Monitoring",
    description:
      "The system continuously monitors the temperature inside the vehicle to prevent overheating risks. If the temperature exceeds a safe threshold, alerts are triggered to inform the driver and relevant authorities.",
    content: (
      <div className="flex flex-col justify-center items-center h-full text-red-500">
        <WiThermometer size={80} />
      </div>
    ),
  },
  {
    title: "Driver Alcohol Detection",
    description:
      "Our integrated alcohol sensor detects alcohol levels in the driver’s breath. If alcohol is detected, the vehicle’s ignition is disabled, and an alert is sent to prevent potential accidents.",
    content: (
      <div className="flex flex-col justify-center items-center h-full text-yellow-500">
        <GiBeerBottle size={80} />
      </div>
    ),
  },
  {
    title: "Gas Leak Detection & Safety Alerts",
    description:
      "Gas leaks inside the vehicle are detected using highly sensitive sensors. If a leak is identified, the system immediately sends alerts via Telegram and email to ensure quick action and prevent hazards.",
    content: (
      <div className="flex flex-col justify-center items-center h-full text-red-500">
        <GiGasMask size={80} />
      </div>
    ),
  },
  {
    title: "Crash Impact Analysis",
    description:
      "The system analyzes crash impact data using gyroscopic sensors and provides real-time updates on the severity of the collision. Emergency contacts are notified instantly for necessary intervention.",
    content: (
      <div className="flex flex-col justify-center items-center h-full text-red-500">
        <MdMinorCrash size={80} />
      </div>
    ),
  },
];

function ProjectFeatures() {
  return (
    <div>
      <StickyScroll content={projectFeatures} />
    </div>
  );
}

export default ProjectFeatures;
