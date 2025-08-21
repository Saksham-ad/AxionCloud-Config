import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Homepage from "./pages/Homepage";
import MinecraftHosting from "./pages/MinecraftHosting";
import GamesOverviewPage from "./pages/GamesOverviewPage";
import DiscordBotHostingPage from "./pages/BotHosting";
import WebsiteHostingPage from "./pages/WebHosting";
import LegalPage from "./pages/Legal";
import NotFoundPage from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import PartnersPage from "./pages/PartnersPage";
import CareersPage from "./pages/CareersPage";
import PromoBanner from "./components/PromoBanner";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Lightning Loader Component
const LightningLoader = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative">
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16"
        >
          <motion.path
            d="M50 5 L45 40 L60 45 L40 95 L45 60 L30 55 L50 5"
            className="stroke-primarytext"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 1, 1, 0],
              transition: {
                pathLength: { duration: 1.5, repeat: Infinity },
                opacity: {
                  duration: 1.5,
                  times: [0, 0.2, 0.8, 1],
                  repeat: Infinity,
                },
              },
            }}
          />
          <motion.path
            d="M50 5 L45 40 L60 45 L40 95 L45 60 L30 55 L50 5"
            fill="none"
            className="stroke-primarytext/50"
            strokeWidth="8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.2, 0.2, 0],
              transition: {
                pathLength: { duration: 1.5, repeat: Infinity, delay: 0.1 },
                opacity: {
                  duration: 1.5,
                  times: [0, 0.2, 0.8, 1],
                  repeat: Infinity,
                  delay: 0.1,
                },
              },
            }}
          />
        </motion.svg>

        <motion.div
          className="absolute inset-0 bg-primarytext/20 blur-2xl rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

// Page Transition Wrapper
const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative bg-black min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LightningLoader key="loader" />
        ) : (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black"
            onAnimationStart={() => {
              window.scrollTo(0, 0);
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Layout Component
const MainLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-black">
    <style>
      {`
        #root {
          background-color: black;
        }
        
        body {
          background-color: black;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
          background-color: black;
        }
      `}
    </style>
    <PromoBanner />
    <Navbar />
    <main className="flex-grow bg-black">
      <PageTransitionWrapper>{children}</PageTransitionWrapper>
    </main>
    <ScrollToTop />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div className="bg-black">
        <MainLayout>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Homepage />} />

            {/* Game Hosting Routes */}
            <Route path="/games" element={<GamesOverviewPage />} />
            <Route path="/minecraft" element={<MinecraftHosting />} />

            {/* Service Routes */}
            <Route path="/bot-hosting" element={<DiscordBotHostingPage />} />
            <Route path="/web-hosting" element={<WebsiteHostingPage />} />

            {/* Legal & Info Routes */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/terms" element={<LegalPage />} />
            <Route path="/privacy" element={<LegalPage />} />
            <Route path="/acceptable-use" element={<LegalPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/careers" element={<CareersPage />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
