'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingHearts } from '@/components/FloatingHearts';

const sections = [
    {
        title: "Hi Azizam,",
        body: "What I am about to do is something I feel is very necessary—not just for me, but for you. But before we get there, let me take you on a journey."
    },
    {
        body: "A journey of two individuals who had no intention of coming together, but did. I still remember when DS told me about you, the moment I got your number, and sending that first message to introduce myself."
    },
    {
        body: "From there, we started to connect. We were raw with each other, with no need to impress, and that allowed us to truly see each other for who we are."
    },
    {
        body: "The late-night talks, the games, the discussions, and even the arguments—I cherish all of these so much, and I find myself wanting so much more of them."
    },
    {
        body: "You’ve become a very important part of my life, Azizam. You make me happy, you helped me regain my confidence, you support me, and honestly... you love me more than I love myself."
    },
    {
        body: "I told you once that my only dream is to be happy. I want you to know that you are the major component in that dream becoming a reality."
    },
    {
        body: "I am always at my happiest when I spend time with you and I want to always make you happy azizam."
    },
    {
        body: "I cherish you and i love you so, so much azizam. I promise to always make you happy and make your happiness my top priority."
    },
    {
        isFinal: true,
        body: "Now, back to that necessary thing I mentioned...",
        highlight: "It’s something I would prefer to ask you directly instead of writing it here."
    }
];

export const Letter: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const isLastPage = currentPage === sections.length - 1;

    return (
        <div className="relative z-50 h-screen w-full overflow-hidden flex items-center justify-center">
            {/* 1. Animated Pink Mesh Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[#fff9fa]" />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-rose-200/40 blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -50, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-pink-100/50 blur-[100px]"
                />
            </div>

            {/* 2. Floating Hearts */}
            <div className="fixed inset-0 z-10 pointer-events-none opacity-60">
                <FloatingHearts />
            </div>

            {/* 3. Letter Content Container */}
            <div className="relative z-30 max-w-2xl w-full px-8 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="flex flex-col items-center justify-center space-y-8"
                    >
                        {sections[currentPage].title && (
                            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight tracking-tight">
                                {sections[currentPage].title}
                            </h2>
                        )}

                        <p className={`font-serif leading-relaxed italic drop-shadow-sm text-slate-800 ${sections[currentPage].isFinal ? "text-xl md:text-2xl" : "text-2xl md:text-4xl font-light"
                            }`}>
                            {sections[currentPage].body}
                        </p>

                        {sections[currentPage].highlight && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="text-3xl md:text-5xl font-serif font-bold text-rose-600 italic leading-snug"
                            >
                                {sections[currentPage].highlight}
                            </motion.p>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* 4. Controls */}
                <div className="absolute bottom-[-120px] left-0 right-0 flex justify-center">
                    {!isLastPage ? (
                        <button
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="group flex flex-col items-center gap-2 cursor-pointer transition-all"
                        >
                            <span className="text-rose-400 font-serif italic text-lg tracking-widest group-hover:text-rose-500">
                                Next
                            </span>
                            <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-1.5 bg-rose-300 rounded-full"
                            />
                        </button>
                    ) : (
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-3 h-3 bg-rose-500 rounded-full shadow-lg shadow-rose-200"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};