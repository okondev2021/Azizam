'use client';
import { useState, useEffect } from 'react';
import { Letter } from '@/components/Letter';
import { Envelope } from '@/components/Envelope';
import { FloatingHearts } from '@/components/FloatingHearts';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProposalPage() {
  const [stage, setStage] = useState<'closed' | 'opening' | 'revealed' | 'zooming'>('closed');
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    if (stage === 'opening') {
      const timer = setTimeout(() => setStage('revealed'), 1600);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <main className="min-h-screen bg-[#1a1a2e] overflow-hidden relative">
      {!isReading && <FloatingHearts />}

      <AnimatePresence mode="wait">
        {!isReading ? (
          <motion.div
            key="envelope-zone"
            exit={{ opacity: 0 }}
            className="h-screen flex items-center justify-center relative z-10"
          >
            <div onClick={() => stage === 'closed' && setStage('opening')}>
              <Envelope
                stage={stage}
                onFinishReveal={() => setStage('zooming')}
              />
            </div>

            {stage === 'closed' && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setStage('opening')}
                className="absolute bottom-20 text-rose-200 font-serif italic text-xl tracking-widest cursor-pointer hover:text-rose-400 transition-colors"
              >
                Tap to Open Your Letter
              </motion.button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="content-zone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Letter />
          </motion.div>
        )}
      </AnimatePresence>

      {/* The "White Flash" transition synchronized with the Letter Zoom */}
      {stage === 'zooming' && !isReading && (
        <motion.div
          onAnimationComplete={() => setIsReading(true)}
          className="fixed inset-0 bg-[#fff9fa] z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        />
      )}
    </main>
  );
}