import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function ProposalScreen({ onYes }) {
    const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
    const [isMoved, setIsMoved] = useState(false);
    const noBtnRef = useRef(null);

    const handleNoInteraction = () => {
        // improved logic for mobile safety
        const safeMargin = 50;
        const maxWidth = window.innerWidth - safeMargin * 2;
        const maxHeight = window.innerHeight - safeMargin * 2;

        // Calculate random position relative to current center or viewport
        const x = Math.random() * maxWidth - maxWidth / 2;
        const y = Math.random() * maxHeight - maxHeight / 2;

        setNoBtnPosition({ x, y });
        setIsMoved(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center z-10 relative px-4 text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-8 md:mb-12"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-pink-200 drop-shadow-[0_0_15px_rgba(255,100,150,0.8)] mb-4 md:mb-6 leading-tight">
                    Will You Be My Valentine? <span className="inline-block animate-bounce text-pink-500">💘</span>
                </h1>
                <p className="text-lg md:text-xl text-pink-100 opacity-80 max-w-lg mx-auto">
                    I promise to make every moment magical...
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center relative w-full h-40 md:h-32">
                <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(255, 50, 100, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onYes}
                    className="bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-lg md:text-xl shadow-lg border-2 border-pink-400/50 hover:border-pink-300 transition-colors z-20"
                >
                    YES ❤️
                </motion.button>

                <motion.button
                    ref={noBtnRef}
                    animate={isMoved ? { x: noBtnPosition.x, y: noBtnPosition.y } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onHoverStart={handleNoInteraction}
                    onClick={handleNoInteraction}
                    className="bg-white/10 backdrop-blur-sm text-pink-200 font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-lg md:text-xl border border-white/20 hover:bg-white/20 transition-all z-10"
                    style={isMoved ? { position: "absolute" } : {}}
                >
                    NO 😢
                </motion.button>
            </div>
        </div>
    );
}
