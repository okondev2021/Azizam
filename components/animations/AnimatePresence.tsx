import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
// import { Envelope } from '../Envelope';
// import lett

export default function ProposalPage() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    // This handles the letter expanding to full screen
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 5]);
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <div className="min-h-[400vh] bg-[#fff5f5]">
            {/* Initial Envelope View */}
            {!isOpen ? (
                <div className="h-screen flex items-center justify-center">
                    {/* <Envelope onClick={() => setIsOpen(true)} /> */}
                </div>
            ) : (
                <div className="relative">
                    {/* The Letter that expands and reveals content */}
                    <motion.div
                        className="fixed inset-0 bg-white shadow-2xl origin-top p-10 md:p-20 overflow-hidden"
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 100 }}
                    >
                        {/* <LetterContent scrollYProgress={scrollYProgress} /> */}
                    </motion.div>
                </div>
            )}
        </div>
    );
}