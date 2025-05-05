import React from "react";
import {
  FaMapMarkerAlt,
  FaCamera,
  FaWineBottle,
  FaUsers,
  FaWeightHanging,
  FaShieldAlt,
  FaCarCrash,
  FaMobileAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Live GPS Tracking",
    description:
      "Real-time vehicle location monitoring with interactive maps for safety and optimized routing.",
    color:
      "hover:shadow-[0_0_20px_-4px_rgba(16,185,129,0.8)] border-emerald-500 text-emerald-400",
  },
  {
    icon: <FaCamera />,
    title: "Driver Monitoring",
    description:
      "AI-powered camera system detects driver fatigue and distraction in real-time.",
    color:
      "hover:shadow-[0_0_20px_-4px_rgba(34,211,238,0.8)] border-cyan-400 text-cyan-400",
  },
  {
    icon: <FaWineBottle />,
    title: "Alcohol Detection",
    description:
      "Breath analysis system prevents ignition if alcohol levels exceed safety limits.",
    color:
      "hover:shadow-[0_0_20px_-4px_rgba(244,63,94,0.8)] border-rose-500 text-rose-400",
  },
  {
    icon: <FaUsers />,
    title: "Passenger Count",
    description:
      "Smart sensors ensure compliance with maximum seating capacity regulations.",
    color:
      "hover:shadow-[0_0_20px_-4px_rgba(234,179,8,0.8)] border-amber-400 text-amber-400",
  },
  {
    icon: <FaWeightHanging />,
    title: "Load Monitoring",
    description:
      "Precision weight sensors prevent dangerous overload conditions.",
    color:
      "hover:shadow-[0_0_20px_-4px_rgba(168,85,247,0.8)] border-purple-500 text-purple-400",
  },
  {
    icon: <FaShieldAlt />,
    title: "Collision Prevention",
    description:
      "Advanced radar system warns of potential impacts with automatic braking.",
    color:
      "hover:shadow-[0_0_20px_-4px_rgba(59,130,246,0.8)] border-blue-500 text-blue-400",
  },
  {
    icon: <FaCarCrash />,
    title: "Emergency Response",
    description:
      "Automatic crash detection with instant emergency services notification.",
    color:
      "hover:shadow-[0_0_20px_-4px_rgba(239,68,68,0.8)] border-red-500 text-red-400",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Application",
    description:
      "User-friendly mobile app to monitor vehicle health, location, and emergency alerts on the go.",
    color:
      "hover:shadow-[0_0_20px_-4px_rgba(251,191,36,0.8)] border-yellow-400 text-yellow-300",
  },
];

const UpcomingFeatures = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-wide">
            Upcoming Features
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover the advanced safety and tech upgrades coming soon to our
            platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-[#111827] p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${feature.color}`}
            >
              <div className="flex items-center mb-5">
                <div className="p-3 rounded-full bg-[#1f2937] mr-4">
                  {React.cloneElement(feature.icon, {
                    className: "text-3xl",
                  })}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingFeatures;
