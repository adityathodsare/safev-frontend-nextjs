"use client";

//git add .
//git commit -m "Updated code"
//git push origin main

import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaCarCrash,
  FaGasPump,
  FaSyncAlt,
  FaRuler,
  FaCompass,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  const [sensorData, setSensorData] = useState([]);
  const [latestData, setLatestData] = useState(null);

  const channelID = "2897293"; // Replace with your actual ThingSpeak channel ID
  const apiKey = "T1LB8Y4JNNE2XESE"; // Replace with your actual API key

  // Function to send gas leak alert
  const sendAlertgas = async (type, message) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:8080/alert/gas-leak", // Ensure this matches your backend route
        { type, message }, // Corrected POST request with body
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(`${type} alert sent: ${message}`, response.data);
    } catch (error) {
      console.error(
        "Error sending alert:",
        error.response?.data || error.message
      );
    }
  };

  // Fetch data from ThingSpeak
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.thingspeak.com/channels/${channelID}/feeds.json?api_key=${apiKey}&results=5`
      );
      const data = response.data.feeds.map((feed) => ({
        time: new Date(feed.created_at).toLocaleTimeString(),
        acceleration: parseFloat(feed.field1),
        gasLevel: parseFloat(feed.field2),
        gyroscope: parseFloat(feed.field3),
        impactForce: parseFloat(feed.field4),
        tiltAngle: parseFloat(feed.field5),
      }));

      setSensorData(data);

      const latest = data[data.length - 1]; // Store the latest data correctly
      setLatestData(latest);

      if (latest && latest.gasLevel > 2300) {
        sendAlertgas("Gas Alert", "High gas level detected in vehicle!");
      }
    } catch (error) {
      console.error("Error fetching data from ThingSpeak:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0C1B] text-white flex flex-col items-center p-4 sm:p-6 pt-20">
      <h1 className="text-3xl py-10 my-20 sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400 mb-8 text-center">
        SAFETY MONITORING SYSTEM
      </h1>

      {/* Sensor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {latestData &&
          [
            {
              name: "Acceleration",
              value: latestData.acceleration,
              unit: "m/s²",
              icon: FaCarCrash,
              color: "text-pink-400",
            },
            {
              name: "Gas leak > 1200 (unsafe)",
              value: latestData.gasLevel,
              unit: "(0-4095)",
              icon: FaGasPump,
              color: "text-purple-400",
            },
            {
              name: "Gyroscope",
              value: latestData.gyroscope,
              unit: "°/s",
              icon: FaSyncAlt,
              color: "text-blue-400",
            },
            {
              name: "Impact Force",
              value: latestData.impactForce,
              unit: "m/s²",
              icon: FaRuler,
              color: "text-yellow-400",
            },
            {
              name: "Tilt Angle",
              value: latestData.tiltAngle,
              unit: "°",
              icon: FaCompass,
              color: "text-green-400",
            },
          ].map((sensor, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center border rounded-2xl bg-[#131528] p-5 transition-all duration-300 hover:shadow-lg hover:scale-105 border-gray-700"
            >
              <sensor.icon
                className={`absolute top-3 right-4 text-3xl ${sensor.color} opacity-80`}
              />
              <h2 className={`text-lg font-bold ${sensor.color}`}>
                {sensor.name}
              </h2>
              <p className="text-xl text-gray-300">
                {sensor.value !== null ? sensor.value.toFixed(2) : "Loading..."}{" "}
                {sensor.unit}
              </p>
            </div>
          ))}
      </div>

      {/* Charts Section */}
      <div className="w-full max-w-6xl mt-10 px-4">
        <h2 className="text-2xl font-bold text-center text-blue-400 mb-4">
          Sensor Data Over Time
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={sensorData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="time" tick={{ fill: "white" }} />
            <YAxis tick={{ fill: "white" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#222", border: "none" }}
            />
            <Line
              type="monotone"
              dataKey="acceleration"
              stroke="#FF69B4"
              strokeWidth={2}
              dot={{ fill: "#FF69B4" }}
            />
            <Line
              type="monotone"
              dataKey="gasLevel"
              stroke="#8A2BE2"
              strokeWidth={2}
              dot={{ fill: "#8A2BE2" }}
            />
            <Line
              type="monotone"
              dataKey="gyroscope"
              stroke="#4682B4"
              strokeWidth={2}
              dot={{ fill: "#4682B4" }}
            />
            <Line
              type="monotone"
              dataKey="impactForce"
              stroke="#FFD700"
              strokeWidth={2}
              dot={{ fill: "#FFD700" }}
            />
            <Line
              type="monotone"
              dataKey="tiltAngle"
              stroke="#32CD32"
              strokeWidth={2}
              dot={{ fill: "#32CD32" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <footer className="text-center mt-8 text-gray-400 text-sm">
        Data powered by{" "}
        <a
          href="https://thingspeak.com"
          className="text-blue-400 hover:underline"
        >
          ThingSpeak
        </a>
      </footer>
    </div>
  );
};

export default Home;
