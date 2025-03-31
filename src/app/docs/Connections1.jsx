import React from "react";

const Connections1 = () => {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-green-400 mb-4">
        🔗 ESP32 Pin Connections
      </h2>

      <p className="text-gray-300 mb-4">
        The following table details the pin connections for various sensors and
        modules integrated with the ESP32.
      </p>

      {/* 🔌 Sensor Connections */}
      <h3 className="text-xl font-semibold text-blue-300 mb-2">
        📡 Sensor Connections
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-green-300">
              <th className="border border-gray-700 px-4 py-2">
                Sensor/Module
              </th>
              <th className="border border-gray-700 px-4 py-2">ESP32 Pin</th>
              <th className="border border-gray-700 px-4 py-2">Function</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">
                MPU6050 (Accelerometer)
              </td>
              <td className="border border-gray-700 px-4 py-2">
                SDA → GPIO 21, SCL → GPIO 22
              </td>
              <td className="border border-gray-700 px-4 py-2">
                Detects vehicle acceleration and crashes
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">
                MQ2 (Gas Sensor)
              </td>
              <td className="border border-gray-700 px-4 py-2">A0 → GPIO 34</td>
              <td className="border border-gray-700 px-4 py-2">
                Monitors gas leaks in the vehicle
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">
                MQ3 (Alcohol Sensor)
              </td>
              <td className="border border-gray-700 px-4 py-2">A0 → GPIO 35</td>
              <td className="border border-gray-700 px-4 py-2">
                Detects alcohol presence from the driver
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">
                DHT11 (Temperature Sensor)
              </td>
              <td className="border border-gray-700 px-4 py-2">
                Data → GPIO 4
              </td>
              <td className="border border-gray-700 px-4 py-2">
                Measures temperature inside the vehicle
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">
                IR Flame Sensor
              </td>
              <td className="border border-gray-700 px-4 py-2">D0 → GPIO 32</td>
              <td className="border border-gray-700 px-4 py-2">
                Detects fire or flame inside the vehicle
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 🔗 Communication & Alert Modules */}
      <h3 className="text-xl font-semibold text-blue-300 mb-2">
        📶 Communication & Alert Modules
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-green-300">
              <th className="border border-gray-700 px-4 py-2">Module</th>
              <th className="border border-gray-700 px-4 py-2">ESP32 Pin</th>
              <th className="border border-gray-700 px-4 py-2">Function</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">
                WiFi (ESP32 Built-in)
              </td>
              <td className="border border-gray-700 px-4 py-2">
                N/A (Built-in)
              </td>
              <td className="border border-gray-700 px-4 py-2">
                Sends data to the cloud via ThingSpeak
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">Buzzer</td>
              <td className="border border-gray-700 px-4 py-2">GPIO 26</td>
              <td className="border border-gray-700 px-4 py-2">
                Sounds an alarm on gas leaks or accidents
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">
                Red Alert LED
              </td>
              <td className="border border-gray-700 px-4 py-2">GPIO 27</td>
              <td className="border border-gray-700 px-4 py-2">
                Indicates emergency situations
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">
                Green LED (Safe Signal)
              </td>
              <td className="border border-gray-700 px-4 py-2">GPIO 14</td>
              <td className="border border-gray-700 px-4 py-2">
                Indicates normal operation
              </td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">Telegram API</td>
              <td className="border border-gray-700 px-4 py-2">
                N/A (Cloud-based)
              </td>
              <td className="border border-gray-700 px-4 py-2">
                Sends emergency alerts via Telegram
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Connections1;
