// 'use client';
// import { useState, useEffect } from 'react';
// import { Letter } from '@/components/Letter';
// import { Envelope } from '@/components/Envelope';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function ProposalPage() {
//   const [stage, setStage] = useState<'closed' | 'opening' | 'revealed' | 'zooming'>('closed');
//   const [isReading, setIsReading] = useState(false);

//   // Transition from Opening -> Revealed
//   useEffect(() => {
//     if (stage === 'opening') {
//       const timer = setTimeout(() => setStage('revealed'), 2200); // Wait for flap
//       return () => clearTimeout(timer);
//     }
//   }, [stage]);

//   return (
//     <main className="min-h-screen bg-[#1a1a2e] overflow-x-hidden">
//       <AnimatePresence mode="wait">
//         {!isReading ? (
//           <motion.div
//             key="envelope-zone"
//             exit={{ opacity: 0 }}
//             className="h-screen flex items-center justify-center relative"
//           >
//             <Envelope
//               stage={stage}
//               onFinishReveal={() => setStage('zooming')}
//             />

//             {stage === 'closed' && (
//               <motion.button
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 onClick={() => setStage('opening')}
//                 className="absolute bottom-20 text-rose-300 font-serif italic text-xl tracking-widest cursor-pointer"
//               >
//                 Tap to Open Your Letter
//               </motion.button>
//             )}
//           </motion.div>
//         ) : (
//           <motion.div
//             key="content-zone"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.5 }}
//           >
//             <Letter />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Background Effect */}
//       {stage === 'zooming' && !isReading && (
//         <motion.div
//           onAnimationComplete={() => setIsReading(true)}
//           className="fixed inset-0 bg-white z-[100]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.5 }}
//         />
//       )}
//     </main>
//   );
// }




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
      const timer = setTimeout(() => setStage('revealed'), 2200);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    // Updated background to a softer, romantic mesh-style gradient
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#2d1b33] to-[#1a1a2e] overflow-x-hidden relative">

      {/* Dynamic Background Layer */}
      {!isReading && <FloatingHearts />}

      <AnimatePresence mode="wait">
        {!isReading ? (
          <motion.div
            key="envelope-zone"
            exit={{ opacity: 0 }}
            className="h-screen flex items-center justify-center relative z-10"
          >
            <Envelope
              stage={stage}
              onFinishReveal={() => setStage('zooming')}
            />

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

      {/* Background Effect for the Zoom transition */}
      {stage === 'zooming' && !isReading && (
        <motion.div
          onAnimationComplete={() => setIsReading(true)}
          className="fixed inset-0 bg-white z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
      )}
    </main>
  );
}