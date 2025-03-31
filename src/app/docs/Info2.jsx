import React from "react";

const Info2 = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-green-400">
        🚗 Alcohol and fire Monitoring System (MADAKSH)
      </h1>
      <p className="mb-4 text-gray-300">
        This system enhances vehicle safety by detecting hazards like alcohol
        consumption, gas leaks, fire outbreaks, and high temperatures. Alerts
        are sent in real-time via Telegram, email, and visual/audio indicators.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-blue-400">
        📌 Key Features:
      </h2>
      <ul className="list-disc ml-6 text-gray-300">
        <li>
          🚦 **Alcohol Detection** (MQ3 Sensor) – Prevents engine start if
          alcohol is detected.
        </li>
        <li>
          💨 **Gas Leak Monitoring** (MQ2 Sensor) – Detects hazardous gas
          levels.
        </li>
        <li>
          🔥 **Fire Detection** (Flame Sensor) – Detects flames in the vehicle.
        </li>
        <li>
          🌡 **Temperature Monitoring** (DHT11 Sensor) – Monitors heat levels.
        </li>
        <li>
          ⚠ **Real-Time Alerts** – Instant notifications via **Telegram, Email &
          Buzzer**.
        </li>
        <li>
          📊 **ThingSpeak Cloud Storage** – Logs data for future analysis.
        </li>
        <li>🖥 **Next.js Dashboard** – Displays live sensor readings.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-blue-400">
        🔧 How It Works:
      </h2>
      <p className="mb-4 text-gray-300">
        Sensors continuously read values and process them. If unsafe conditions
        are detected, the system prevents ignition, triggers alerts, and logs
        data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-blue-400">
        🌐 Connectivity & Communication:
      </h2>
      <ul className="list-disc ml-6 text-gray-300">
        <li>📡 **ESP32 WiFi Module** – Handles real-time data transmission.</li>
        <li>☁ **ThingSpeak Cloud** – Stores sensor readings.</li>
        <li>🤖 **Telegram Bot** – Sends emergency alerts.</li>
        <li>🖥 **Next.js UI** – Visualizes sensor data.</li>
      </ul>
    </div>
  );
};

export default Info2;
