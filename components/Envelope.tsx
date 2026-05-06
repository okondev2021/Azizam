'use client';
import { motion } from 'framer-motion';

interface EnvelopeProps {
    stage: 'closed' | 'opening' | 'revealed' | 'zooming';
    onFinishReveal: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ stage, onFinishReveal }) => {
    return (
        <div className="relative perspective-1000">
            <motion.div
                className="relative w-[90vw] max-w-[500px] h-[40vh] max-h-[350px]"
                animate={stage}
            >
                {/* 1. BACK PANEL (Deepest Layer) */}
                <motion.div
                    variants={{
                        zooming: { opacity: 0, transition: { duration: 0.5 } }
                    }}
                    className="absolute inset-0 bg-[#fce7e7] rounded-lg z-0 shadow-inner"
                />

                {/* 2. THE LETTER (Dynamic Z-Index) */}
                <motion.div
                    className="absolute top-2 left-[5%] right-[5%] h-[90%] bg-white shadow-xl p-8 origin-center flex flex-col"
                    variants={{
                        closed: { y: 0, opacity: 0, scale: 0.9, zIndex: 5 },
                        opening: { y: 0, opacity: 1, scale: 0.9, zIndex: 5 },
                        revealed: {
                            y: "-100%",
                            opacity: 1,
                            scale: 1,
                            zIndex: 50, // Higher than flap and front body
                            transition: {
                                y: { duration: 1, ease: "easeOut" },
                                zIndex: { delay: 0.3 } // Switches to top layer mid-slide
                            }
                        },
                        zooming: {
                            y: "0%",
                            scale: 5,
                            opacity: 0,
                            zIndex: 50,
                            transition: {
                                y: { duration: 0.8, ease: "easeInOut" },
                                scale: { delay: 0.8, duration: 1.2 },
                                opacity: { delay: 1.5, duration: 0.5 }
                            }
                        }
                    }}
                    onAnimationComplete={(def) => {
                        if (def === 'revealed') {
                            setTimeout(onFinishReveal, 1500);
                        }
                    }}
                >
                    <span className="font-serif text-slate-800 text-lg border-b border-rose-100 pb-2 mb-4">
                        Dear Azizam,
                    </span>
                    <div className="space-y-3">
                        <div className="w-full h-2 bg-slate-100 rounded" />
                        <div className="w-5/6 h-2 bg-slate-100 rounded" />
                        <div className="w-4/6 h-2 bg-slate-100 rounded" />
                    </div>
                </motion.div>

                {/* 3. FRONT BODY (Middle Layer) */}
                <motion.div
                    variants={{
                        zooming: { opacity: 0, transition: { duration: 0.5 } }
                    }}
                    className="absolute inset-0 bg-[#fdf2f2] z-20 shadow-lg"
                    style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 45%)' }}
                />

                {/* 4. TOP FLAP (Top Layer when opening) */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-[#fee2e2] origin-top z-30"
                    style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0)' }}
                    variants={{
                        closed: { rotateX: 0, zIndex: 30 },
                        opening: {
                            rotateX: 180,
                            transition: { duration: 1.2, ease: "easeInOut" }
                        },
                        revealed: {
                            rotateX: 0, // Closes back once letter is "out"
                            zIndex: 10,  // Move below the letter's z-index
                            transition: { delay: 0.5, duration: 0.8 }
                        },
                        zooming: { opacity: 0 }
                    }}
                />
            </motion.div>
        </div>
    );
};