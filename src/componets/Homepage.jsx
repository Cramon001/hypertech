import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FirstModal from "./FirstModal";

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [title, setTitle] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Fetch title from backend
  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await fetch(
          "https://witty-riannon-frameless-3393f584.koyeb.app/title"
        );
        const data = await response.json();
        setTitle(data.title);
      } catch (error) {
        console.error("Failed to fetch title:", error);
        setTitle("Hyper Tech");
      }
    };

    fetchTitle();
    const interval = setInterval(fetchTitle, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = `Welcome ${title}`;
  }, [title]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-animated-gradient bg-[length:400%_400%] animate-gradient-bg">

      <FirstModal show={isModalOpen} onClose={closeModal} />

      {/* NAVBAR */}
      <div className="absolute top-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/10 border-b border-white/10">

        {/* Logo */}
        <h1  className="text-6xl font-bold mb-4 tracking-tight">
          WELCOME
        </h1>

        {/* Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-white text-xl bg-white/10 px-3 py-1 rounded-md hover:bg-white/20 transition"
        >
          ☰
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-16 right-6 bg-black/60 backdrop-blur-xl rounded-xl p-4 flex flex-col gap-3 shadow-lg border border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={openModal}
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
          >
            Launch App
          </button>

          <button className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition">
            Docs
          </button>

          <button className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition">
            Contact
          </button>

          <button className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition">
            Info
          </button>
        </motion.div>
      )}

      {/* MAIN HERO SECTION */}

      <motion.h2
        className="text-6xl font-bold mb-4 tracking-tight"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
       {title}
      </motion.h2>

      <motion.p
        className="max-w-xl text-lg text-gray-200 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Access blockchain liquidity at the best possible terms powered by
        open infrastructure built for the future of decentralized finance.
      </motion.p>

      {/* MAIN BUTTON */}
      <motion.button
        onClick={openModal}
        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold shadow-xl hover:scale-105 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Launch App
      </motion.button>

      {/* FOOTER TEXT */}

      <motion.p
        className="mt-10 italic text-gray-300 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Next-Generation Web3 Infrastructure
      </motion.p>
    </div>
  );
};

export default Homepage;