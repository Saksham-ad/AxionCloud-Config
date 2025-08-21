import React, { useState } from "react";
import {
  ChevronDown,
  Search,
  Gamepad,
  Bot,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setIsChanging(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsChanging(false);
    }, 300);
  };
  const tabs = [
    {
      id: "general",
      name: "General",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      id: "games",
      name: "Game Servers",
      icon: <Gamepad className="w-5 h-5" />,
    },
    { id: "bots", name: "Bot Hosting", icon: <Bot className="w-5 h-5" /> },
  ];

  const faqData = {
    general: [
      {
        id: "g1",
        question: "How do I get started with GameHost?",
        answer:
          "Getting started is easy! Simply choose your desired game server, select a hosting plan, and complete the checkout process. Your server will be instantly set up and ready to configure within minutes.",
      },
      {
        id: "g2",
        question: "What payment methods do you accept?",
        answer:
          "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and cryptocurrency (Bitcoin, Ethereum). All transactions are secure and processed through encrypted channels.",
      },
      {
        id: "g3",
        question: "Do you offer refunds?",
        answer:
          "Yes, we offer a 24-hour money-back guarantee if youre not satisfied with our service. For unused time after this period, we provide pro-rated refunds on a case-by-case basis.",
      },
      {
        id: "g4",
        question: "What kind of customer support do you provide?",
        answer:
          "We offer 24/7 customer support through live chat, email, and ticket system. Our technical team is always available to help you with any issues or questions you might have.",
      },
      {
        id: "g5",
        question: "Where are your servers located?",
        answer:
          "We have multiple server locations worldwide including North America (East/West), Europe (London, Frankfurt, Paris), Asia (Singapore, Tokyo), and Australia. You can choose the location closest to you during checkout.",
      },
    ],
    games: [
      {
        id: "m1",
        question: "How do I install mods on my Minecraft server?",
        answer:
          "Our control panel provides a one-click mod installer for popular modpacks. You can also manually upload mods through the file manager. We support both Forge and Fabric mod loaders.",
      },
      {
        id: "m2",
        question: "Can I switch between different game versions?",
        answer:
          "Yes, you can easily switch between game versions using our control panel. We keep all previous versions available and provide automatic backup before version changes.",
      },
      {
        id: "m3",
        question: "How many players can join my server?",
        answer:
          "The player capacity depends on your chosen hosting plan and the game type. Our plans support anywhere from 10 to unlimited players, with recommended capacities based on your servers resources.",
      },
      {
        id: "m4",
        question: "Do you provide DDoS protection?",
        answer:
          "Yes, all our game servers include enterprise-grade DDoS protection at no additional cost. We use advanced mitigation techniques to ensure your server stays online even during attacks.",
      },
      {
        id: "m5",
        question: "Can I transfer my existing game server to GameHost?",
        answer:
          "Yes, we offer free migration assistance for your existing game server. Our technical team will help transfer all your data, configurations, and world files to ensure a smooth transition.",
      },
    ],
    bots: [
      {
        id: "b1",
        question: "What types of bots can I host?",
        answer:
          "We support various bot types including Discord bots, Telegram bots, and custom automation bots. Our platform supports major programming languages like Python, Node.js, and Java.",
      },
      {
        id: "b2",
        question: "Do you provide bot templates or examples?",
        answer:
          "Yes, we provide several starter templates for popular bot frameworks. This includes Discord.js, Python-telegram-bot, and other common bot libraries to help you get started quickly.",
      },
      {
        id: "b3",
        question: "How do I monitor my bots performance?",
        answer:
          "Our control panel includes detailed monitoring tools for CPU usage, memory consumption, and uptime. You can also set up custom alerts and view logs in real-time.",
      },
      {
        id: "b4",
        question: "Can I run multiple bots on one hosting plan?",
        answer:
          "Yes, you can run multiple bots on a single hosting plan as long as its within your resource limits. We provide tools to help you manage and monitor multiple bot instances.",
      },
      {
        id: "b5",
        question: "What happens if my bot crashes?",
        answer:
          "We provide automatic crash recovery and restart features. You can set up monitoring alerts to notify you of any issues, and our system will attempt to restart your bot automatically.",
      },
    ],
  };

  const filteredFAQs = faqData[activeTab].filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primarytext/10 text-primarytext ring-1 ring-primarytext/20 mb-8">
            <HelpCircle className="w-4 h-4 mr-2" />
            Find Quick Answers
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
              Frequently Asked Questions
            </span>
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
            Find quick answers to common questions about our services
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:border-primarytext transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "bg-primarytext text-white"
                    : "bg-zinc-800/50 text-blue-100 hover:bg-zinc-700/50"
                }
              `}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-zinc-700 bg-zinc-800/50 overflow-hidden hover:border-primarytext/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-medium text-white">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primarytext transition-transform duration-300 ${
                    expandedItems[item.id] ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  expandedItems[item.id] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-4">
                    <p className="text-blue-100">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-blue-100">
                No questions found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl border border-zinc-700 bg-zinc-800/50 hover:border-primarytext/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-8">
              Our support team is ready to help you 24/7
            </p>
            <a
              href="https://discord.gg/vF3kDRNDQS"
              className="px-8 py-4 bg-primarytext hover:bg-primarytext/90 w-fit text-white rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto group"
            >
              Contact Support
              <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
