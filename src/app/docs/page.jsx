"use client";
import React, { useEffect, useState } from "react";
import Info1 from "./Info1";
import Connections1 from "./Connections1";
import Code1 from "./Code1";
import Code2 from "./Code2";
import Info2 from "./Info2";
import Connections2 from "./Connections2";
import { motion } from "framer-motion";

function Page() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Only render background elements on client */}
      {isMounted && (
        <div className="fixed inset-0 overflow-hidden opacity-5 pointer-events-none">
          {[...Array(12)].map((_, i) => {
            const width = Math.random() * 200 + 100;
            const height = Math.random() * 200 + 100;
            const left = Math.random() * 100;
            const top = Math.random() * 100;

            return (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500"
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  filter: "blur(60px)",
                }}
              />
            );
          })}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center py-28 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-gray-300 text-center max-w-2xl"
          >
            Replicate the project as-is or customize it to your needs with our
            comprehensive guides
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mt-6 rounded-full"
          />
        </motion.div>

        {/* Documentation Sections */}
        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Info1 />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Code1 />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Connections1 />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Info2 />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Code2 />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Connections2 />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-10 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-center text-lg mt-8">
            Made with ❤️ by{" "}
            <span className="font-semibold text-green-400">teamSigma</span> |{" "}
            <span className="text-gray-500">{new Date().getFullYear()}</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Page;
