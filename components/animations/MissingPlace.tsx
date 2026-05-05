'use client';
import { motion } from "framer-motion";
import { useState } from "react";

const MissingPiece = () => {
    const [revealed, setRevealed] = useState(false);

    return (
        <div className="h-screen flex flex-col items-center justify-center text-center px-6">
            {!revealed ? (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setRevealed(true)}
                    className="text-slate-400 italic underline decoration-rose-300 underline-offset-8"
                >
                    Wait... there's one more thing missing, isn't there?
                </motion.button>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl font-serif text-slate-800">
                        I never asked you properly.
                    </h2>
                    <p className="text-6xl font-bold text-rose-500">
                        Will you be my girlfriend?
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-rose-500 text-white px-10 py-3 rounded-full">Yes!</button>
                        <button className="border border-slate-300 px-10 py-3 rounded-full">No</button>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default MissingPiece;