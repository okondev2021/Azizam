'use client';
import { useState } from 'react';
import { Letter } from '@/components/Letter';
import { Envelope } from '@/components/Envelope';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FlowStage } from '@/types';

export default function ProposalPage() {
  const [stage, setStage] = useState<FlowStage>('closed');

  const handleOpen = () => {
    setStage('reading');
    // Optional: Smooth scroll down after delay
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <main className="bg-[#fffafa] transition-colors duration-1000">
      {/* Stage 1: The Envelope */}
      <div className="h-screen flex flex-col items-center justify-center">
        <Envelope isOpen={stage !== 'closed'} onClick={handleOpen} />
      </div>

      {/* Stage 2: The Reading Journey */}
      {stage !== 'closed' && (
        <>
          <Letter />

          {/* Stage 3: The Missing Piece Reveal */}
          <div className="h-screen flex flex-col items-center justify-center bg-white border-t border-rose-50">
            <AnimatePresence mode="wait">
              {stage === 'reading' ? (
                <motion.button
                  key="trigger"
                  onClick={() => setStage('asking')}
                  whileHover={{ scale: 1.05 }}
                  className="text-slate-400 italic underline decoration-rose-300 underline-offset-8"
                >
                  Wait... I feel like something is still missing?
                </motion.button>
              ) : stage === 'asking' ? (
                <motion.div
                  key="proposal"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-12"
                >
                  <h2 className="text-5xl md:text-7xl font-serif text-slate-900">
                    Will you be my girlfriend?
                  </h2>
                  <div className="flex gap-8 justify-center">
                    <button
                      onClick={() => {
                        confetti({ particleCount: 200, spread: 80 });
                        setStage('accepted');
                      }}
                      className="bg-rose-500 text-white px-14 py-4 rounded-full text-xl font-medium hover:bg-rose-600 transition-all shadow-xl"
                    >
                      Yes!
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.h2
                  key="final"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-6xl font-serif italic text-rose-500"
                >
                  Finally. ❤️
                </motion.h2>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </main>
  );
}