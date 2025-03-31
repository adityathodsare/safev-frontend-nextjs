import React from "react";

const Info = () => {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-3xl font-bold text-green-400 mb-4">
        🚗 Vehicle Safety Monitoring System (AGNIVAR)
      </h2>

      <p className="text-gray-300 mb-4">
        This project is designed to enhance vehicle safety by integrating
        multiple sensors for accident detection, gas leak monitoring, fire
        detection, and driver alcohol consumption analysis. It uses **ESP32**
        for data processing and **WiFi-based real-time monitoring** via
        **ThingSpeak & Telegram alerts**.
      </p>

      {/* 🔍 Features Section */}
      <h3 className="text-2xl font-semibold text-blue-300 mb-2">
        🔍 Key Features
      </h3>
      <ul className="list-disc list-inside text-gray-300 mb-6">
        <li>
          📡 **Real-time Monitoring** – Data sent to ThingSpeak & displayed on a
          Next.js dashboard.
        </li>
        <li>🔥 **Fire Detection** – Alerts for fire inside the vehicle.</li>
        <li>
          🍺 **Alcohol Detection** – Prevents the driver from starting the car
          if alcohol is detected.
        </li>
        <li>
          💨 **Gas Leak Monitoring** – Alerts in case of hazardous gas leaks.
        </li>
        <li>
          🚗 **Accident Detection** – Detects a crash based on gyroscope
          readings.
        </li>
        <li>
          📢 **Buzzer & LED Alerts** – Immediate notifications with visual &
          sound indicators.
        </li>
        <li>
          📩 **Email & Telegram Alerts** – Sends notifications to family members
          in emergencies.
        </li>
      </ul>

      {/* 🔧 Components Used */}
      <h3 className="text-2xl font-semibold text-blue-300 mb-2">
        🔧 Hardware Components
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-green-300">
              <th className="border border-gray-700 px-4 py-2">Component</th>
              <th className="border border-gray-700 px-4 py-2">Function</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">ESP32</td>
              <td className="border border-gray-700 px-4 py-2">
                Main microcontroller for sensor integration & communication
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">MPU6050</td>
              <td className="border border-gray-700 px-4 py-2">
                Accelerometer & Gyroscope for accident detection
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">MQ3</td>
              <td className="border border-gray-700 px-4 py-2">
                Alcohol sensor to check driver intoxication
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">MQ2</td>
              <td className="border border-gray-700 px-4 py-2">
                Gas sensor for leak detection
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">DHT11</td>
              <td className="border border-gray-700 px-4 py-2">
                Temperature sensor
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">
                IR Flame Sensor
              </td>
              <td className="border border-gray-700 px-4 py-2">
                Fire detection inside the vehicle
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">Buzzer</td>
              <td className="border border-gray-700 px-4 py-2">
                Alert sound for emergency situations
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 🌍 Communication Section */}
      <h3 className="text-2xl font-semibold text-blue-300 mb-2">
        🌍 Communication & Data Processing
      </h3>
      <p className="text-gray-300 mb-4">
        The ESP32 transmits real-time sensor data to **ThingSpeak**, which is
        then displayed on a Next.js dashboard. Additionally, emergency alerts
        are sent to family members via **Telegram API & Email Notifications**.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-green-300">
              <th className="border border-gray-700 px-4 py-2">
                Communication Method
              </th>
              <th className="border border-gray-700 px-4 py-2">Purpose</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">WiFi (ESP32)</td>
              <td className="border border-gray-700 px-4 py-2">
                Sends data to the cloud (ThingSpeak)
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">
                ThingSpeak API
              </td>
              <td className="border border-gray-700 px-4 py-2">
                Stores & processes sensor data
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">Telegram API</td>
              <td className="border border-gray-700 px-4 py-2">
                Sends emergency notifications
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">
                Email Notification
              </td>
              <td className="border border-gray-700 px-4 py-2">
                Alerts family members about incidents
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Info;
