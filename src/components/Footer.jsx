import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
  HeadsetIcon,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Client Area", href: "https://billing.axioncloud.host" },
    { name: "Game Panel", href: "https://gp.axioncloud.tech" },
    { name: "About Us", href: "/about" },
    { name: "Legal", href: "/legal" },
  ];

  const gameServers = [
    {
      name: "Minecraft",
      href: "/minecraft",
      icon: "/images/icons/minecraft.png",
    },
    { name: "View All Games", href: "/games" },
  ];

  const resources = [
    { name: "Server Status", href: "https://status.axioncloud.host", badge: "Live" },
    { name: "Blog", href: "https://blog.axioncloud.host" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://discord.gg/vF3kDRNDQS", label: "Facebook" },

  ];

  const LinkWithIcon = ({ to, children, icon, badge }) => (
    <Link
      to={to}
      className="group flex items-center text-blue-100 hover:text-primarytext transition-colors duration-200"
    >
      <span className="relative flex items-center">
        <span className="absolute left-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out">
          {icon || <ArrowRight className="w-4 h-4" />}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="translate-x-0 group-hover:translate-x-6 transition-transform duration-200 ease-out">
            {children}
          </span>
          {badge && (
            <span className="px-2 py-0.5 text-xs rounded-full bg-primarytext/10 text-primarytext group-hover:bg-primarytext group-hover:text-white translate-x-0 group-hover:translate-x-6 transition-all duration-200 ease-out whitespace-nowrap">
              {badge}
            </span>
          )}
        </span>
      </span>
    </Link>
  );

  const ContactLink = ({ href, icon, children }) => (
    <a
      href={href}
      className="group flex items-center gap-3 text-blue-100 hover:text-white transition-colors duration-200"
    >
      <div className="w-8 h-8 bg-zinc-800/50 rounded-lg flex items-center justify-center group-hover:bg-primarytext transition-all duration-200 ease-out">
        {icon}
      </div>
      <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200 ease-out">
        {children}
      </span>
    </a>
  );

  return (
    <footer className="border-t border-white/10 bg-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <img
                src="https://cdn.discordapp.com/attachments/1380421371649200148/1408018882484109322/cdbcdc59f016a8e24b0341891aa4da72__2_-removebg-preview.png?ex=68a83745&is=68a6e5c5&hm=9fa1a9876fb09e8b106dd505628ed2e2f096f9ced5aaaf44d00df77a3227045e"
                alt="AxionCloud Logo"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-2xl font-bold text-primarytext group-hover:text-primarytext transition-colors duration-200">
                <strong className="text-white">Axion</strong>Cloud
              </span>
            </Link>
            <p className="text-blue-100">
              Professional game hosting services with unmatched performance and
              reliability.
            </p>
            <div className="space-y-3">
              <ContactLink href="#" icon={<MapPin className="w-4 h-4" />}>
                kolkata, India/Asia 
              </ContactLink>
              <ContactLink
                href="mailto:splash@axioncloud.host"
                icon={<Mail className="w-4 h-4" />}
              >
                support@axioncloud.host
              </ContactLink>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <LinkWithIcon to={link.href}>{link.name}</LinkWithIcon>
                </li>
              ))}
            </ul>
          </div>

          {/* Game Servers */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Game Servers
            </h3>
            <ul className="space-y-3">
              {gameServers.map((server) => (
                <li key={server.name}>
                  <LinkWithIcon
                    to={server.href}
                    icon={
                      server.icon && (
                        <img
                          src={server.icon}
                          alt={server.name}
                          className="w-4 h-4 rounded"
                        />
                      )
                    }
                  >
                    {server.name}
                  </LinkWithIcon>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <LinkWithIcon to={resource.href} badge={resource.badge}>
                    {resource.name}
                  </LinkWithIcon>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100">
              © 2024 - {new Date().getFullYear()} AxionCloud. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-zinc-800/50 hover:bg-primarytext rounded-lg flex items-center justify-center text-blue-100 hover:text-white transition-all duration-200 ease-out hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
