'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export const ProposalTrigger: React.FC = () => {
    const [stage, setStage] = useState<'hint' | 'question' | 'accepted'>('hint');

    const handleYes = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#f43f5e', '#fb7185', '#ffffff']
        });
        setStage('accepted');
    };

    // The "No" button logic that moves away from the cursor
    const moveButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 100);
        target.style.position = 'fixed';
        target.style.left = `${x}px`;
        target.style.top = `${y}px`;
    };

    return (
        <div className="flex flex-col items-center justify-center text-center p-6">
            <AnimatePresence mode="wait">
                {stage === 'hint' && (
                    <motion.button
                        key="hint"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setStage('question')}
                        className="text-slate-400 italic underline underline-offset-8 decoration-rose-200 hover:text-rose-500 transition-colors cursor-pointer"
                    >
                        Wait... there is something still missing, isn't there?
                    </motion.button>
                )}

                {stage === 'question' && (
                    <motion.div
                        key="question"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                            I never asked you properly.
                        </h2>
                        <p className="text-5xl md:text-7xl font-bold text-rose-500 font-serif italic">
                            Will you be my girlfriend?
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
                            <button
                                onClick={handleYes}
                                className="px-16 py-4 bg-rose-500 text-white rounded-full text-2xl font-serif shadow-xl hover:bg-rose-600 hover:scale-105 transition-all"
                            >
                                Yes!
                            </button>

                            <button
                                onMouseEnter={moveButton}
                                className="px-12 py-3 border border-slate-300 text-slate-400 rounded-full text-lg font-serif transition-all"
                            >
                                No
                            </button>
                        </div>
                    </motion.div>
                )}

                {stage === 'accepted' && (
                    <motion.div
                        key="accepted"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <h2 className="text-6xl md:text-8xl font-serif italic text-rose-600">
                            Finally. ❤️
                        </h2>
                        <p className="text-xl text-slate-500 font-serif">
                            I can't wait to take our first photo together.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};