'use client';
import { motion } from 'framer-motion';
const hearts = Array.from({ length: 15 });

export const FloatingHearts = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-rose-400/30" // Subtle transparency for professional look
                    initial={{
                        x: `${Math.random() * 100}vw`,
                        y: '110vh',
                        scale: Math.random() * 0.5 + 0.5
                    }}
                    animate={{
                        y: '-10vh',
                        x: `${(Math.random() * 100)}vw`,
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 15, // Varied speeds
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 20,
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};