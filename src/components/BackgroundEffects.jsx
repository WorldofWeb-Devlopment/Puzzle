import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PARTICLE_COUNT = 30;

export default function BackgroundEffects() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 20 + 10,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
            type: Math.random() > 0.5 ? "❤️" : "🌸",
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Cinematic Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-red-900 to-black opacity-80" />

            {/* Soft Lens Flare */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,200,100,0.15),transparent_40%)] mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,100,150,0.15),transparent_40%)] mix-blend-screen" />

            {/* Floating Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ y: "110vh", x: `${p.x}vw`, opacity: 0 }}
                    animate={{
                        y: "-10vh",
                        opacity: [0, 0.8, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        fontSize: `${p.size}px`,
                        filter: "blur(0.5px)",
                    }}
                >
                    {p.type}
                </motion.div>
            ))}

            {/* Film Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />
        </div>
    );
}
