'use client';
import { motion } from 'framer-motion';

interface EnvelopeProps {
    isOpen: boolean;
    onClick: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onClick }) => {
    return (
        <div className="relative group" onClick={onClick}>
            <motion.div
                className="relative w-72 h-48 bg-[#fdf2f2] rounded-b-lg shadow-xl cursor-pointer"
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                {/* Top Flap (The part that opens) */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-[#fee2e2] z-30 origin-top"
                    style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0)' }}
                    variants={{
                        closed: { rotateX: 0 },
                        open: { rotateX: 180, transition: { duration: 0.8, ease: "easeInOut" } }
                    }}
                />

                {/* Interior Letter Preview */}
                <motion.div
                    className="absolute top-2 left-4 right-4 h-32 bg-white shadow-sm p-4 z-10"
                    variants={{
                        closed: { y: 0 },
                        open: { y: -80, transition: { delay: 0.5, duration: 0.6 } }
                    }}
                >
                    <div className="w-full h-2 bg-slate-100 mb-2" />
                    <div className="w-3/4 h-2 bg-slate-100" />
                </motion.div>

                {/* Side/Bottom Flaps (Static) */}
                <div className="absolute inset-0 bg-[#fdf2f2] z-20" style={{ clipPath: 'polygon(0 0, 48% 48%, 0 100%)' }} />
                <div className="absolute inset-0 bg-[#fdf2f2] z-20" style={{ clipPath: 'polygon(100% 0, 52% 48%, 100% 100%)' }} />
                <div className="absolute inset-0 bg-[#fce7e7] z-20" style={{ clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)' }} />
            </motion.div>

            {!isOpen && (
                <p className="mt-6 text-slate-400 font-light italic text-center animate-pulse">
                    Click to open
                </p>
            )}
        </div>
    );
};