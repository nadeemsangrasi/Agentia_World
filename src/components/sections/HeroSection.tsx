"use client";
import React from "react";

import Link from "next/link";
import { FaChevronRight, FaRobot } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center  text-gray-100"
      id="#"
    >
      {/* Top Badge */}
      <div className="bg-blue-600 text-xs px-4 py-1 rounded-full flex items-center space-x-2">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span className="text-gray-200">POWERED BY PANAVERSITY</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4">
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Enterprise AI Agents
        </span>
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 text-gray-300">
        for the Future
      </h2>

      {/* Chatbox UI with Typewriter Effect */}
      <div className="mt-6 py-4 bg-gray-800 p-4 rounded-lg w-full max-w-md flex items-center gap-4 shadow-lg">
        {/* Icon */}
        <span className="text-cyan-400">
          <FaRobot size={25} />
        </span>

        {/* Typewriter Text */}
        <div className="text-gray-300">
          <Typewriter
            words={[
              "Hello! I'm your AI agent.",
              "How can I enhance your business?",
              "Ask me anything!",
            ]}
            loop={true}
            cursor
            cursorColor="cyan"
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md">
        {/* Primary Button */}
        <Link
          href="#"
          className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 px-6 py-3 rounded-lg text-white font-semibold overflow-hidden hover:scale-105 transition-transform"
        >
          <p>Deploy Your AI Agent</p> <FaChevronRight />
          <span className="absolute inset-0 w-full h-full bg-white opacity-20 blur-md transform -translate-x-full hover:translate-x-full transition-all duration-700 ease-in-out"></span>
        </Link>

        {/* Secondary Button */}
        <Link
          href="#"
          className="bg-gray-700 px-6 py-3 rounded-lg text-gray-100 font-semibold hover:bg-gray-600 transition"
        >
          Watch Demo
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
