import { FaBrain, FaRobot, FaBolt, FaShieldAlt } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section className="py-20 px-20" id="features">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
          Revolutionizing AI-Powered Automation
        </h2>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg">
          Our AI agents bring intelligence, security, and automation together
          for seamless business operations.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 my-16">
        {[
          {
            icon: <FaBrain size={50} className="text-teal-400" />,
            title: "Self-Learning AI",
            desc: "Constantly improving algorithms for smarter automation.",
            glow: "shadow-teal-500/50",
          },
          {
            icon: <FaRobot size={50} className="text-purple-400" />,
            title: "Autonomous Agents",
            desc: "AI-powered agents that execute complex tasks independently.",
            glow: "shadow-purple-500/50",
          },
          {
            icon: <FaBolt size={50} className="text-yellow-400" />,
            title: "Lightning-Fast Processing",
            desc: "Optimized for real-time responses and efficiency.",
            glow: "shadow-yellow-500/50",
          },
          {
            icon: <FaShieldAlt size={50} className="text-blue-400" />,
            title: "Enterprise-Grade Security",
            desc: "Robust protection with AI-driven threat detection.",
            glow: "shadow-blue-500/50",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className={`relative bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-8 text-center transition-all transform hover:scale-105 hover:bg-white/20 hover:border-white/30 shadow-lg ${feature.glow}`}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="text-gray-300 mt-2 text-sm">{feature.desc}</p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
