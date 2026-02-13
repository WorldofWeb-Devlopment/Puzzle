import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../img/WhatsApp Image 2026-02-13 at 9.22.03 AM.jpeg";
import img2 from "../img/WhatsApp Image 2026-02-13 at 9.22.03 AM (1).jpeg";
import img3 from "../img/WhatsApp Image 2026-02-13 at 9.22.03 AM (2).jpeg";
import img4 from "../img/WhatsApp Image 2026-02-13 at 9.23.05 AM.jpeg";

const memories = [
    {
        id: 1,
        image: img1,
        caption: "Every moment with you is magic ✨"
    },
    {
        id: 2,
        image: img2,
        caption: "You are my sunshine ☀️"
    },
    {
        id: 3,
        image: img3,
        caption: "I love your smile 😊"
    },
    {
        id: 4,
        image: img4,
        caption: "Forever thankful for you 🙏"
    }
];

export default function SlideshowScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showFinalMessage, setShowFinalMessage] = useState(false);

    useEffect(() => {
        if (currentIndex < memories.length) {
            const timer = setTimeout(() => {
                setCurrentIndex((prev) => prev + 1);
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            setShowFinalMessage(true);
        }
    }, [currentIndex]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full relative z-10">
            {!showFinalMessage ? (
                <div className="w-full max-w-4xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-5xl font-serif text-center text-pink-200 mb-6 md:mb-8 drop-shadow-md"
                    >
                        Our Beautiful Memories ❤️
                    </motion.h2>

                    <div className="relative w-full flex justify-center items-center h-[75vh]">
                        <AnimatePresence mode="wait">
                            {currentIndex < memories.length && (
                                <motion.div
                                    key={memories[currentIndex].id}
                                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                    animate={{ opacity: 1, scale: 1, rotate: ((currentIndex % 2 === 0) ? 2 : -2) }}
                                    exit={{ opacity: 0, scale: 1.1, rotate: 0 }}
                                    transition={{ duration: 0.8, ease: "backOut" }}
                                    className="absolute inset-0 flex flex-col items-center justify-center p-4"
                                >
                                    <img
                                        src={memories[currentIndex].image}
                                        alt="Memory"
                                        className="max-w-full max-h-full w-auto h-auto object-contain border-[16px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm transform hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute -bottom-12 left-0 right-0 text-center z-10 pointer-events-none">
                                        <motion.p
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="inline-block px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-xl md:text-3xl text-pink-600 font-serif shadow-lg rotate-1"
                                        >
                                            {memories[currentIndex].caption}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-center px-4"
                >
                    <h1 className="text-4xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-pink-300 via-red-300 to-pink-100 drop-shadow-[0_0_25px_rgba(255,50,100,0.8)] mb-8 leading-tight">
                        Forever With You 💍❤️
                    </h1>
                </motion.div>
            )}
        </div>
    );
}
