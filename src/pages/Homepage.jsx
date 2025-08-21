import React from "react";
import FAQSection from "/src/components/FAQSection";
import DemoServers from "/src/components/DemoServers";
import { InfiniteMovingCards } from "/src/components/InfiniteMovingCards";
import { Helmet } from "react-helmet";
import {
  Shield,
  Cpu,
  Clock,
  Zap,
  Award,
  ArrowRight,
  CloudLightning,
  Globe2,
} from "lucide-react";
import PanelShowcase from "../components/PanelShowcase";

const HeroSection = () => (
  <div className="relative pt-32 pb-24 overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/30 to-black" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="inline-block px-4 py-1 mb-8 rounded-full text-sm font-medium bg-primarytext/10 text-primarytext ring-1 ring-primarytext/20">
        Instant Ryzen Server Deployment
      </span>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
          High Performance Ryzen
        </span>{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext to-primarytext/90">
          Game Server
        </span>{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
          Hosting
        </span>
      </h1>

      <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
        Deploy your game server in seconds with enterprise hardware and 2.5Tbps
        DDoS protection
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/games"
          className="px-8 py-4 rounded-lg bg-primarytext hover:bg-primarytext/90 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          Deploy a Server
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="https://discord.gg/vF3kDRNDQS"
          className="px-8 py-4 rounded-lg bg-zinc-800/50 text-blue-100 font-medium hover:bg-zinc-700/50 transition-all duration-300"
        >
          Contact Us
        </a>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
        {[
          {
            icon: <CloudLightning className="w-6 h-6" />,
            label: "Instant Setup",
          },
          { icon: <Shield className="w-6 h-6" />, label: "DDoS Protection" },
          { icon: <Clock className="w-6 h-6" />, label: "24/7 Support" },
          { icon: <Cpu className="w-6 h-6" />, label: "Ryzen Hardware" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-2 text-blue-100"
          >
            <div className="text-primarytext">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description:
        "NVMe SSDs and latest gen processors ensure optimal game performance",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DDoS Protection",
      description:
        "Enterprise-grade protection against attacks, keeping your server online",
    },
    {
      icon: <CloudLightning className="w-8 h-8" />,
      title: "Instant Deployment",
      description:
        "Deploy your server in under 60 seconds with our automated system",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "99.9% Uptime",
      description: "Redundant infrastructure ensures your server stays online",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Why Choose{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext to-primarytext/90">
              Us
            </span>
          </h2>
          <p className="text-blue-100 text-lg">
            Built for performance, security, and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-zinc-700 bg-zinc-800/50 hover:border-primarytext/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primarytext/10 flex items-center justify-center text-primarytext transition-all duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primarytext transition-colors">
                {feature.title}
              </h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { label: "Active Servers", value: "1.000+" },
    { label: "Players Served", value: "100K+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Support Response", value: "<30 Min" },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl border border-zinc-700 bg-zinc-800/50 hover:border-primarytext/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl font-bold text-primarytext mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GamesSection = () => {
  const games = [
    { name: "Minecraft", image: "/images/icons/minecraft.png" },

  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Popular{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext to-primarytext/90">
              Games
            </span>
          </h2>
          <p className="text-blue-100 text-lg">
            One-click deployment for popular games
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {games.map((game) => (
            <div
              key={game.name}
              className="p-6 rounded-2xl border border-zinc-700 bg-zinc-800/50 hover:border-primarytext/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="aspect-square rounded-lg bg-zinc-900 mb-4">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primarytext transition-colors">
                {game.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Locations = () => (
  <div className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            Global{" "}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext to-primarytext/90">
            Server{" "}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            Locations
          </span>
        </h2>
        <p className="text-blue-100 text-lg">
          Choose from multiple locations worldwide for the best ping
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            region: "North America",
            locations: ["N/A"],
          },
          {
            region: "Europe",
            locations: ["N/A"],
          },
          {
            region: "Asia India",
            locations: ["Noida", "New Delhi", "Mumbai"],
          },
        ].map((region) => (
          <div
            key={region.region}
            className="rounded-2xl border border-zinc-700 bg-zinc-800/50 p-6 hover:border-primarytext/50 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-primarytext transition-colors">
                {region.region}
              </h3>
              <Globe2 className="w-6 h-6 text-primarytext" />
            </div>
            <div className="space-y-2">
              {region.locations.map((location) => (
                <div key={location} className="flex items-center text-blue-100">
                  <div className="w-2 h-2 rounded-full bg-primarytext mr-2" />
                  {location}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Home | AxionCloud</title>
      </Helmet>
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <PanelShowcase />
      <GamesSection />
      <Locations />
      <DemoServers />
      <InfiniteMovingCards speed="normal" pauseOnHover={true} />
      <FAQSection />
    </div>
  );
};

export default Homepage;
