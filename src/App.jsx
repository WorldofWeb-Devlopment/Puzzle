import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProposalScreen from "./components/ProposalScreen";
import SlideshowScreen from "./components/SlideshowScreen";
import BackgroundEffects from "./components/BackgroundEffects";
import "./index.css";

function App() {
  const [proposalAccepted, setProposalAccepted] = useState(false);

  return (
    <div className="relative min-h-screen font-body overflow-hidden selection:bg-pink-500 selection:text-white">
      {/* Dynamic Background Effects */}
      <BackgroundEffects />

      {/* Main Content Area */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center p-4">
        <AnimatePresence mode="wait">
          {!proposalAccepted ? (
            <motion.div
              key="proposal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 1.5 }}
              className="w-full h-full flex items-center justify-center"
            >
              <ProposalScreen onYes={() => setProposalAccepted(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="slideshow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="w-full h-full flex items-center justify-center"
            >
              <SlideshowScreen />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Music Audio Element (Optional - Auto play policies might block) */}
      {/* <audio loop autoPlay src="/bg-music.mp3" /> */}
    </div>
  );
}

export default App;
