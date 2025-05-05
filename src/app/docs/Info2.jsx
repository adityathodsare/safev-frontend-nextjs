import React from "react";

const Info2 = () => {
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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          🚗 Alcohol and Fire Monitoring System (MADAKSH)
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
          This system enhances vehicle safety by detecting hazards like alcohol
          consumption, gas leaks, fire outbreaks, and high temperatures. Alerts
          are sent in real-time via {renderWithStrong("Telegram")},{" "}
          {renderWithStrong("email")}, and visual/audio indicators.
        </p>
      </div>

      {/* 📌 Key Features */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-400 border-b border-blue-800 pb-2">
          <span className="mr-2">📌</span> Key Features
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "🚦 **Alcohol Detection** (MQ3 Sensor) – Prevents engine start if alcohol is detected.",
            "💨 **Gas Leak Monitoring** (MQ2 Sensor) – Detects hazardous gas levels.",
            "🔥 **Fire Detection** (Flame Sensor) – Detects flames in the vehicle.",
            "🌡 **Temperature Monitoring** (DHT11 Sensor) – Monitors heat levels.",
            "⚠ **Real-Time Alerts** – Instant notifications via **Telegram, Email & Buzzer**.",
            "📊 **ThingSpeak Cloud Storage** – Logs data for future analysis.",
            "🖥 **Next.js Dashboard** – Displays live sensor readings.",
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

      {/* 🔧 How It Works */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-400 border-b border-blue-800 pb-2">
          <span className="mr-2">🔧</span> How It Works
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed bg-gray-800/50 p-6 rounded-lg">
          Sensors continuously read values and process them. If unsafe
          conditions are detected, the system prevents ignition, triggers
          alerts, and logs data.
        </p>
      </div>

      {/* 🌐 Connectivity & Communication */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-400 border-b border-blue-800 pb-2">
          <span className="mr-2">🌐</span> Connectivity & Communication
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "📡 **ESP32 WiFi Module** – Handles real-time data transmission.",
            "☁ **ThingSpeak Cloud** – Stores sensor readings.",
            "🤖 **Telegram Bot** – Sends emergency alerts.",
            "🖥 **Next.js UI** – Visualizes sensor data.",
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
    </div>
  );
};

export default Info2;
