'use client';
import { motion } from 'framer-motion';

interface EnvelopeProps {
    stage: 'closed' | 'opening' | 'revealed' | 'zooming';
    onFinishReveal: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ stage, onFinishReveal }) => {
    return (
        <div className="relative perspective-1000 cursor-pointer">
            <motion.div
                className="relative w-[85vw] max-w-[450px] h-[30vh] max-h-[280px]"
                animate={stage}
            >
                {/* BACK OF ENVELOPE */}
                <div className="absolute inset-0 bg-[#fce7e7] rounded-lg z-0 shadow-inner" />

                {/* THE LETTER - Slides out FULLY before zooming */}
                <motion.div
                    className="absolute top-2 left-[5%] right-[5%] h-[90%] bg-white shadow-xl p-8 z-10 origin-center flex flex-col"
                    variants={{
                        closed: { y: 0, opacity: 0, scale: 0.9 },
                        opening: { y: 0, opacity: 1, scale: 0.9 },
                        revealed: {
                            y: "-110%", // Slides out completely above the envelope
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 1, ease: "easeOut" }
                        },
                        zooming: {
                            scale: 4,
                            opacity: 0,
                            transition: { duration: 1.5, ease: "easeInOut" }
                        }
                    }}
                    onAnimationComplete={(def) => {
                        if (def === 'revealed') {
                            // Pause for 2 seconds to let her see "Dear Azizam"
                            setTimeout(onFinishReveal, 2000);
                        }
                    }}
                >
                    <span className="font-serif text-slate-800 text-lg border-b border-rose-100 pb-2 mb-4">
                        Dear Azizam,
                    </span>
                    <div className="space-y-2">
                        <div className="w-full h-2 bg-slate-50 rounded" />
                        <div className="w-5/6 h-2 bg-slate-50 rounded" />
                        <div className="w-4/6 h-2 bg-slate-50 rounded" />
                    </div>
                </motion.div>

                {/* FRONT BODY */}
                <div
                    className="absolute inset-0 bg-[#fdf2f2] z-20 shadow-lg"
                    style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 45%)' }}
                />

                {/* TOP FLAP */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-[#fee2e2] origin-top z-30"
                    style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0)' }}
                    variants={{
                        closed: { rotateX: 0 },
                        opening: {
                            rotateX: 180,
                            transition: { duration: 2, ease: "easeInOut" }
                        },
                        revealed: { rotateX: 180, zIndex: 5 },
                        zooming: { rotateX: 180, opacity: 0 }
                    }}
                />
            </motion.div>
        </div>
    );
};