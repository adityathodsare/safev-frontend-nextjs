import React from "react";
import { motion } from "framer-motion";

const Connections1 = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeIn}
      className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700"
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
        🔗 ESP32 Pin Connections
      </h2>

      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        The following table details the pin connections for various sensors and
        modules integrated with the ESP32.
      </p>

      {/* 🔌 Sensor Connections */}
      <motion.div variants={fadeIn}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center text-blue-400 border-b border-blue-800 pb-2">
          <span className="mr-2">📡</span> Sensor Connections
        </h3>
        <div className="overflow-x-auto mb-10 rounded-xl border border-gray-800 shadow-lg">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                  Sensor/Module
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                  ESP32 Pin
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                  Function
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                {
                  sensor: "MPU6050 (Accelerometer)",
                  pin: "SDA → GPIO 21, SCL → GPIO 22",
                  function: "Detects vehicle acceleration and crashes",
                },
                {
                  sensor: "MQ2 (Gas Sensor)",
                  pin: "A0 → GPIO 34",
                  function: "Monitors gas leaks in the vehicle",
                },
                {
                  sensor: "MQ3 (Alcohol Sensor)",
                  pin: "A0 → GPIO 35",
                  function: "Detects alcohol presence from the driver",
                },
                {
                  sensor: "DHT11 (Temperature Sensor)",
                  pin: "Data → GPIO 4",
                  function: "Measures temperature inside the vehicle",
                },
                {
                  sensor: "IR Flame Sensor",
                  pin: "D0 → GPIO 32",
                  function: "Detects fire or flame inside the vehicle",
                },
              ].map((item, i) => (
                <motion.tr
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={tableRowVariants}
                  className="hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-200">
                    {item.sensor}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{item.pin}</td>
                  <td className="px-6 py-4 text-gray-300">{item.function}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* 🔗 Communication & Alert Modules */}
      <motion.div variants={fadeIn}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center text-blue-400 border-b border-blue-800 pb-2">
          <span className="mr-2">📶</span> Communication & Alert Modules
        </h3>
        <div className="overflow-x-auto rounded-xl border border-gray-800 shadow-lg">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                  Module
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                  ESP32 Pin
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                  Function
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                {
                  module: "WiFi (ESP32 Built-in)",
                  pin: "N/A (Built-in)",
                  function: "Sends data to the cloud via ThingSpeak",
                },
                {
                  module: "Buzzer",
                  pin: "GPIO 26",
                  function: "Sounds an alarm on gas leaks or accidents",
                },
                {
                  module: "Red Alert LED",
                  pin: "GPIO 27",
                  function: "Indicates emergency situations",
                },
                {
                  module: "Green LED (Safe Signal)",
                  pin: "GPIO 14",
                  function: "Indicates normal operation",
                },
                {
                  module: "Telegram API",
                  pin: "N/A (Cloud-based)",
                  function: "Sends emergency alerts via Telegram",
                },
              ].map((item, i) => (
                <motion.tr
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={tableRowVariants}
                  className="hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-200">
                    {item.module}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{item.pin}</td>
                  <td className="px-6 py-4 text-gray-300">{item.function}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Connections1;
