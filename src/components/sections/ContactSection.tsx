"use client";
import {
  FaEnvelope,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
export default function ContactSection() {
  return (
    <section className="relative text-white py-16 px-6 my-20" id="contact">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500">
          Get in Touch
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a project in mind? Let&#8217;s build something great together.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <div className="p-8 rounded-xl border border-gray-700 backdrop-blur-lg bg-white/10 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Contact Information
          </h2>
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-cyan-400 justify-center">
              <FaEnvelope size={20} />
              <span>contact@agentiaworld.com</span>
            </div>
            <div className="flex items-center gap-3 text-purple-400 justify-center">
              <FaGlobe size={20} />
              <span>www.agentiaworld.com</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-5 text-gray-400 text-2xl justify-center">
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
                <Icon
                  key={index}
                  className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-white"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-8 rounded-xl border border-gray-700 backdrop-blur-lg bg-white/10 shadow-lg">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-black/40 p-4 rounded-lg text-white focus:outline-none placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-black/40 p-4 rounded-lg text-white focus:outline-none placeholder-gray-400"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black/40 p-4 rounded-lg text-white focus:outline-none placeholder-gray-400"
            />
            <textarea
              placeholder="Your Message"
              className="w-full bg-black/40 p-4 rounded-lg text-white focus:outline-none placeholder-gray-400 h-32"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r mt-8 mx-auto block w-full from-blue-600 to-cyan-500 text-white rounded-md font-medium shadow-lg hover:shadow-blue-500/25 transition-shadow duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
