import React from "react";

const Connections2 = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-green-400">
        🔌 Sensor & Component Pin Connections
      </h1>

      <table className="w-full border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-800 text-gray-300">
            <th className="border border-gray-600 px-4 py-2">Component</th>
            <th className="border border-gray-600 px-4 py-2">ESP32 Pin</th>
            <th className="border border-gray-600 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-800">
            <td className="border border-gray-700 px-4 py-2">
              MQ3 (Alcohol Sensor)
            </td>
            <td className="border border-gray-700 px-4 py-2">GPIO 34</td>
            <td className="border border-gray-700 px-4 py-2">
              Detects alcohol levels
            </td>
          </tr>
          <tr className="bg-gray-900">
            <td className="border border-gray-700 px-4 py-2">
              MQ2 (Gas Sensor)
            </td>
            <td className="border border-gray-700 px-4 py-2">GPIO 35</td>
            <td className="border border-gray-700 px-4 py-2">
              Detects gas leaks
            </td>
          </tr>
          <tr className="bg-gray-800">
            <td className="border border-gray-700 px-4 py-2">Flame Sensor</td>
            <td className="border border-gray-700 px-4 py-2">GPIO 32</td>
            <td className="border border-gray-700 px-4 py-2">
              Detects fire outbreaks
            </td>
          </tr>
          <tr className="bg-gray-900">
            <td className="border border-gray-700 px-4 py-2">
              DHT11 (Temperature Sensor)
            </td>
            <td className="border border-gray-700 px-4 py-2">GPIO 26</td>
            <td className="border border-gray-700 px-4 py-2">
              Measures temperature
            </td>
          </tr>
          <tr className="bg-gray-800">
            <td className="border border-gray-700 px-4 py-2">Start Button</td>
            <td className="border border-gray-700 px-4 py-2">GPIO 27</td>
            <td className="border border-gray-700 px-4 py-2">
              Activates engine if safe
            </td>
          </tr>
          <tr className="bg-gray-900">
            <td className="border border-gray-700 px-4 py-2">
              Relay (Engine Control)
            </td>
            <td className="border border-gray-700 px-4 py-2">GPIO 25</td>
            <td className="border border-gray-700 px-4 py-2">
              Controls vehicle engine
            </td>
          </tr>
          <tr className="bg-gray-800">
            <td className="border border-gray-700 px-4 py-2">Buzzer</td>
            <td className="border border-gray-700 px-4 py-2">GPIO 23</td>
            <td className="border border-gray-700 px-4 py-2">
              Alerts for warnings
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 text-blue-400">
        ⚡ Circuit Overview:
      </h2>
      <p className="mb-4 text-gray-300">
        The ESP32 microcontroller integrates with multiple sensors to constantly
        monitor vehicle conditions. If a hazard is detected (alcohol, fire, gas
        leak), the system triggers preventive actions.
      </p>
      <ul className="list-disc ml-6 text-gray-300">
        <li>
          🍺 **Alcohol Sensor (MQ3):** Disables engine if alcohol is detected.
        </li>
        <li>⚠ **Gas Sensor (MQ2):** Alerts users about gas leaks.</li>
        <li>🔥 **Flame Sensor:** Detects fire outbreaks.</li>
        <li>🌡 **Temperature Sensor (DHT11):** Monitors for overheating.</li>
        <li>🛑 **Relay Module:** Prevents engine ignition when unsafe.</li>
        <li>🔊 **Buzzer:** Sounds alarm on hazard detection.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-blue-400">
        📡 Communication:
      </h2>
      <ul className="list-disc ml-6 text-gray-300">
        <li>📶 **ESP32 WiFi Module:** Transmits sensor data.</li>
        <li>☁ **ThingSpeak Cloud:** Stores and visualizes data.</li>
        <li>📩 **Telegram & Email Alerts:** Notifies users instantly.</li>
      </ul>
    </div>
  );
};

export default Connections2;
