"use client";
import { FaRobot, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

const aiAgents = [
  {
    title: "Autonomous AI",
    description: "AI-driven automation for smarter decision-making.",
    icon: <FaRobot size={40} className="text-cyan-400" />,
  },
  {
    title: "Neural Networks",
    description: "Powerful AI models that learn and adapt in real time.",
    icon: <FaNetworkWired size={40} className="text-purple-400" />,
  },
  {
    title: "Cyber AI Defense",
    description: "Advanced security AI to safeguard digital environments.",
    icon: <FaShieldAlt size={40} className="text-pink-400" />,
  },
];

const AgentSection = () => {
  return (
    <div
      className="relative text-white py-20 px-6 mb-20 cursor-pointer"
      id="agents"
    >
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500">
          AI Agents
        </h2>
        <p className="text-gray-400 text-lg mt-3 max-w-lg mx-auto">
          Unlocking next-gen AI intelligence for seamless automation.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {aiAgents.map((agent, index) => (
          <div
            key={index}
            className="w-80 p-8 border border-gray-700 rounded-xl shadow-lg backdrop-blur-lg bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-purple-500"
          >
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-black/20 rounded-xl">
              {agent.icon}
            </div>
            <h3 className="text-2xl font-semibold mt-5 text-center">
              {agent.title}
            </h3>
            <p className="text-gray-400 text-center mt-3">
              {agent.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentSection;
