import React from "react";
import { motion } from "framer-motion";

const Connections2 = () => {
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
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
        🔌 Sensor & Component Pin Connections
      </h1>

      <div className="overflow-x-auto rounded-xl border border-gray-800 shadow-lg mb-8">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                Component
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                ESP32 Pin
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-green-400 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {[
              {
                component: "MQ3 (Alcohol Sensor)",
                pin: "GPIO 34",
                description: "Detects alcohol levels",
              },
              {
                component: "MQ2 (Gas Sensor)",
                pin: "GPIO 35",
                description: "Detects gas leaks",
              },
              {
                component: "Flame Sensor",
                pin: "GPIO 32",
                description: "Detects fire outbreaks",
              },
              {
                component: "DHT11 (Temperature Sensor)",
                pin: "GPIO 26",
                description: "Measures temperature",
              },
              {
                component: "Start Button",
                pin: "GPIO 27",
                description: "Activates engine if safe",
              },
              {
                component: "Relay (Engine Control)",
                pin: "GPIO 25",
                description: "Controls vehicle engine",
              },
              {
                component: "Buzzer",
                pin: "GPIO 23",
                description: "Alerts for warnings",
              },
            ].map((item, i) => (
              <motion.tr
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={tableRowVariants}
                className={`${
                  i % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50"
                } hover:bg-gray-800 transition-colors`}
              >
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-200">
                  {item.component}
                </td>
                <td className="px-6 py-4 text-gray-300">{item.pin}</td>
                <td className="px-6 py-4 text-gray-300">{item.description}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <motion.div variants={fadeIn}>
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-400 border-b border-blue-800 pb-2">
          <span className="mr-2">⚡</span> Circuit Overview
        </h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          The ESP32 microcontroller integrates with multiple sensors to
          constantly monitor vehicle conditions. If a hazard is detected
          (alcohol, fire, gas leak), the system triggers preventive actions.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            "🍺 **Alcohol Sensor (MQ3):** Disables engine if alcohol is detected.",
            "⚠ **Gas Sensor (MQ2):** Alerts users about gas leaks.",
            "🔥 **Flame Sensor:** Detects fire outbreaks.",
            "🌡 **Temperature Sensor (DHT11):** Monitors for overheating.",
            "🛑 **Relay Module:** Prevents engine ignition when unsafe.",
            "🔊 **Buzzer:** Sounds alarm on hazard detection.",
          ].map((item, i) => (
            <motion.li
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={tableRowVariants}
              className="flex items-start bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-gray-800 transition-colors"
            >
              <span className="text-gray-300">
                {item.split("**").map((part, j) =>
                  j % 2 === 1 ? (
                    <strong key={j} className="text-cyan-400">
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={fadeIn}>
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-400 border-b border-blue-800 pb-2">
          <span className="mr-2">📡</span> Communication
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "📶 **ESP32 WiFi Module:** Transmits sensor data.",
            "☁ **ThingSpeak Cloud:** Stores and visualizes data.",
            "📩 **Telegram & Email Alerts:** Notifies users instantly.",
          ].map((item, i) => (
            <motion.li
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={tableRowVariants}
              className="flex items-start bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-500 hover:bg-gray-800 transition-colors"
            >
              <span className="text-gray-300">
                {item.split("**").map((part, j) =>
                  j % 2 === 1 ? (
                    <strong key={j} className="text-cyan-400">
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Connections2;
