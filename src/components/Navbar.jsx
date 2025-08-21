import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Bot,
  Globe,
  UserCircle,
  ComputerIcon,
  HomeIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGameDropdownOpen, setIsGameDropdownOpen] = useState(false);
  const [isCtaDropdownOpen, setIsCtaDropdownOpen] = useState(false);

  const gameServers = [
    {
      name: "Minecraft",
      path: "/minecraft",
      icon: "/images/icons/minecraft.png",
    },
  ];

  const ctaLinks = [
    {
      name: "Game Panel",
      path: "https://gp.axioncloud.tech",
      icon: <ComputerIcon className="w-4 h-4" />,
    },
    {
      name: "Client Area",
      path: "https://billing.axioncloud.host",
      icon: <UserCircle className="w-4 h-4" />,
    },
  ];

  const mainLinks = [
    { name: "Home", path: "/", icon: <HomeIcon className="w-4 h-4" /> },
    { name: "Game Servers", path: "#", hasDropdown: true },
    {
      name: "Web Hosting",
      path: "/web-hosting",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      name: "Bot Hosting",
      path: "/bot-hosting",
      icon: <Bot className="w-4 h-4" />,
    },
  ];

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.15,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://images-ext-1.discordapp.net/external/2PsVRJ2JMj4h-Cd95afd5-37OtpsBVNfw8EjSHpCByk/%3Fsize%3D2048/https/cdn.discordapp.com/icons/1380407199628791868/cdbcdc59f016a8e24b0341891aa4da72.webp"
              alt="AxionCloud Logo"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-2xl font-bold text-white group-hover:text-primarytext transition-colors">
              Axion<strong className="text-primarytext">Cloud</strong>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsGameDropdownOpen(true)}
                    onMouseLeave={() => setIsGameDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-blue-100 hover:text-primarytext transition-colors">
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isGameDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isGameDropdownOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="absolute top-full left-0 w-56 py-2 mt-2 bg-zinc-900/95 backdrop-blur-sm rounded-xl shadow-xl border border-zinc-700/50"
                        >
                          {gameServers.map((game) => (
                            <Link
                              key={game.path}
                              to={game.path}
                              className="flex items-center gap-3 px-4 py-2 text-blue-100 hover:text-primarytext hover:bg-white/5 transition-colors"
                            >
                              <img
                                src={game.icon}
                                alt={`${game.name} icon`}
                                className="w-4 h-4 rounded object-cover"
                              />
                              {game.name}
                            </Link>
                          ))}
                          <div className="border-t border-zinc-700/50 mt-2 pt-2 px-4">
                            <Link
                              to="/games"
                              className="flex items-center gap-2 text-sm font-semibold text-primarytext hover:text-primarytext/80 transition-colors"
                            >
                              View all games
                              <ChevronDown className="w-4 h-4 -rotate-90" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 text-blue-100 hover:text-primarytext transition-colors ${
                        isActive ? "text-white" : ""
                      }`
                    }
                  >
                    {link.icon && link.icon}
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}

            {/* Client Portal Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCtaDropdownOpen(true)}
              onMouseLeave={() => setIsCtaDropdownOpen(false)}
            >
              <button className="px-4 py-2 rounded-lg bg-primarytext hover:bg-primarytext/90 text-white font-bold transition-colors flex items-center gap-2">
                Client Portal
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isCtaDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isCtaDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full right-0 w-48 py-2 mt-2 bg-zinc-900/95 backdrop-blur-sm rounded-xl shadow-xl border border-zinc-700/50"
                  >
                    {ctaLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="flex items-center gap-3 px-4 py-2 text-blue-100 hover:text-primarytext hover:bg-white/5 transition-colors"
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-100 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden py-4 overflow-hidden"
            >
              <div className="space-y-2">
                {/* Main Links */}
                <div className="border-b border-zinc-700/50 pb-2">
                  {mainLinks.map(
                    (link) =>
                      !link.hasDropdown && (
                        <NavLink
                          key={link.path}
                          to={link.path}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2 text-blue-100 hover:text-white hover:bg-white/5 rounded-lg transition-colors ${
                              isActive ? "bg-white/5 text-white" : ""
                            }`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          {link.icon && link.icon}
                          {link.name}
                        </NavLink>
                      )
                  )}
                </div>

                {/* Game Servers Section */}
                <div className="pb-2">
                  <p className="text-sm font-medium text-zinc-400 mb-2 px-4">
                    Game Servers
                  </p>
                  {gameServers.map((game) => (
                    <Link
                      key={game.path}
                      to={game.path}
                      className="flex items-center gap-2 px-4 py-2 text-blue-100 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <img
                        src={game.icon}
                        alt={`${game.name} icon`}
                        className="w-4 h-4 rounded object-cover"
                      />
                      {game.name}
                    </Link>
                  ))}
                  <Link
                    to="/games"
                    className="flex items-center gap-2 px-4 py-2 text-primarytext hover:text-primarytext/80 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    View all games
                    <ChevronDown className="w-4 h-4 -rotate-90" />
                  </Link>
                </div>

                {/* CTA Links Section */}
                <div className="pt-2 px-4 space-y-2">
                  {ctaLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-primarytext hover:bg-primarytext/90 text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
