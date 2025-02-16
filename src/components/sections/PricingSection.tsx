"use client";
import { FaCheckCircle, FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";
const Pricing = () => {
  return (
    <div className="bg-[#0a0f1e] text-white py-16 px-4 my-20" id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Choose Your Plan
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Select the perfect plan to elevate your digital experience.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-screen-xl mx-auto">
        {/* Pricing Card Component */}
        {[
          {
            name: "Basic",
            price: "$299",
            color: "cyan",
            features: [
              "Single AI Instance",
              "Standard Processing Speed",
              "Email Support",
              "Monthly Analytics",
              "Basic API Access",
              "Limited Integrations",
              "Security Essentials",
              "Cloud Backup",
            ],
          },
          {
            name: "Pro",
            price: "$799",
            color: "purple",
            icon: <FaCrown className="text-yellow-400 text-2xl" />,
            features: [
              "Up to 5 AI Instances",
              "Enhanced Processing Speed",
              "Priority Email & Chat Support",
              "Weekly Performance Insights",
              "Advanced API Access",
              "Customizable Integrations",
              "AI Security Suite",
              "24/7 Cloud Monitoring",
            ],
          },
          {
            name: "Ultimate",
            price: "$Custom",
            color: "blue",
            features: [
              "Unlimited AI Instances",
              "Lightning-fast AI Processing",
              "Dedicated Account Manager",
              "Real-time Performance Tracking",
              "Full API & SDK Access",
              "Enterprise-Grade Integrations",
              "Advanced Security Protocols",
              "Personalized AI Training",
            ],
          },
        ].map((plan, index) => (
          <div
            key={index}
            className={`relative bg-opacity-10 p-8 rounded-xl shadow-lg w-full md:w-1/3 border border-${plan.color}-500 overflow-hidden transition-transform duration-300 hover:scale-105`}
          >
            <div
              className={`absolute inset-0 bg-${plan.color}-800 opacity-50 rounded-xl`}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold my-4 flex items-center gap-3">
                {plan.icon} <span>{plan.name}</span>
              </h3>
              <p className="text-5xl font-bold mb-4">{plan.price}</p>
              <ul className="mt-4 space-y-3 text-gray-300 text-lg">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle
                      className={`text-${plan.color}-400 text-xl`}
                    />{" "}
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r mt-8 mx-auto block w-full from-blue-600 to-cyan-500 text-white rounded-md font-medium shadow-lg hover:shadow-blue-500/25 transition-shadow duration-300"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
