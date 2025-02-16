import { FaGithub, FaLinkedin, FaRobot, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const navSections = [
    {
      title: "Product",
      links: [
        { name: "Home", path: "#" },
        { name: "Features", path: "#features" },
        { name: "Agents", path: "#agents" },
        { name: "Pricing", path: "#pricing" },
        { name: "Contact", path: "#contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", path: "#" },
        { name: "Blog", path: "#" },
        { name: "Careers", path: "#" },
        { name: "Contact", path: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", path: "#" },
        { name: "Terms", path: "#" },
        { name: "Security", path: "#" },
        { name: "Compliance", path: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "#" },
        { name: "FAQs", path: "#" },
        { name: "Status", path: "#" },
        { name: "Report Issue", path: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo & Description */}
        <div className="flex flex-col items-center text-center">
          <FaRobot size={50} className="text-teal-400" />
          <h2 className="text-2xl font-bold mt-3 text-white">Agentia World</h2>
          <p className="mt-2 text-sm text-gray-400 max-w-md">
            AI-driven solutions redefining enterprise intelligence.
          </p>
        </div>

        {/* Navigation Links */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center"
          role="navigation"
        >
          {navSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white font-semibold text-lg">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-400">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.path}
                      className="cursor-pointer hover:text-teal-400 transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-12">
          {[
            { icon: FaGithub, link: "https://github.com" },
            { icon: FaLinkedin, link: "https://linkedin.com" },
            { icon: FaTwitter, link: "https://twitter.com" },
          ].map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Social Link"
              className="text-3xl cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-teal-400"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} Agentia World. Powered by
          Panaversity. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
