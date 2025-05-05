import React from "react";

const Info1 = () => {
  // Helper function to convert markdown-style **bold** to <strong> tags
  const renderWithStrong = (text) => {
    return text.split("**").map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="text-cyan-400">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className="p-8 bg-gray-900 text-gray-100 rounded-xl shadow-2xl border border-gray-800 backdrop-blur-sm bg-opacity-90 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          🚗 Vehicle Safety Monitoring System (AGNIVAR)
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
          This project is designed to enhance vehicle safety by integrating
          multiple sensors for accident detection, gas leak monitoring, fire
          detection, and driver alcohol consumption analysis. It uses{" "}
          {renderWithStrong("ESP32")} for data processing and{" "}
          {renderWithStrong("WiFi-based real-time monitoring")} via{" "}
          {renderWithStrong("ThingSpeak & Telegram alerts")}.
        </p>
      </div>

      {/* 🔍 Features Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4 flex items-center text-blue-400 border-b border-blue-800 pb-2">
          <span className="mr-2">🔍</span> Key Features
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "📡 **Real-time Monitoring** – Data sent to ThingSpeak & displayed on a Next.js dashboard.",
            "🔥 **Fire Detection** – Alerts for fire inside the vehicle.",
            "🍺 **Alcohol Detection** – Prevents the driver from starting the car if alcohol is detected.",
            "💨 **Gas Leak Monitoring** – Alerts in case of hazardous gas leaks.",
            "🚗 **Accident Detection** – Detects a crash based on gyroscope readings.",
            "📢 **Buzzer & LED Alerts** – Immediate notifications with visual & sound indicators.",
            "📩 **Email & Telegram Alerts** – Sends notifications to family members in emergencies.",
          ].map((feature, index) => (
            <li
              key={index}
              className="flex items-start bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-gray-800 transition-colors"
            >
              <span className="mr-3 text-lg">{feature.split(" ")[0]}</span>
              <span className="text-gray-300">
                {renderWithStrong(feature.replace(feature.split(" ")[0], ""))}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔧 Components Used */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4 flex items-center text-blue-400 border-b border-blue-800 pb-2">
          <span className="mr-2">🔧</span> Hardware Components
        </h3>
        <div className="overflow-x-auto rounded-xl border border-gray-800 shadow-lg">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                  Component
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                  Function
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                {
                  component: "ESP32",
                  function:
                    "Main microcontroller for sensor integration & communication",
                },
                {
                  component: "MPU6050",
                  function: "Accelerometer & Gyroscope for accident detection",
                },
                {
                  component: "MQ3",
                  function: "Alcohol sensor to check driver intoxication",
                },
                { component: "MQ2", function: "Gas sensor for leak detection" },
                { component: "DHT11", function: "Temperature sensor" },
                {
                  component: "IR Flame Sensor",
                  function: "Fire detection inside the vehicle",
                },
                {
                  component: "Buzzer",
                  function: "Alert sound for emergency situations",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-200">
                    {item.component}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{item.function}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🌍 Communication Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center text-blue-400 border-b border-blue-800 pb-2">
          <span className="mr-2">🌍</span> Communication & Data Processing
        </h3>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          The ESP32 transmits real-time sensor data to{" "}
          {renderWithStrong("ThingSpeak")}, which is then displayed on a Next.js
          dashboard. Additionally, emergency alerts are sent to family members
          via {renderWithStrong("Telegram API & Email Notifications")}.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-800 shadow-lg">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                  Communication Method
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                {
                  method: "WiFi (ESP32)",
                  purpose: "Sends data to the cloud (ThingSpeak)",
                },
                {
                  method: "ThingSpeak API",
                  purpose: "Stores & processes sensor data",
                },
                {
                  method: "Telegram API",
                  purpose: "Sends emergency notifications",
                },
                {
                  method: "Email Notification",
                  purpose: "Alerts family members about incidents",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-200">
                    {item.method}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{item.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Info1;
