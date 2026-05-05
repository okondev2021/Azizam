'use client';
import { motion } from 'framer-motion';

const messages = [
    "I've spent a lot of time thinking about how to say this...",
    "We don't have our first photo together yet, but I see you in everything I do.",
    "Every line of code I write lately seems to have your name hidden in the logic.",
    "You've become my favorite 'constant' in a world of variables."
];

export const Letter: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            {messages.map((text, i) => (
                <motion.section
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.8 }}
                    className="h-screen flex items-center justify-center px-10 text-center"
                >
                    <p className="text-3xl md:text-5xl font-serif text-slate-800 leading-relaxed max-w-3xl">
                        {text}
                    </p>
                </motion.section>
            ))}

            <section className="h-[50vh] flex flex-col items-center justify-center opacity-50 italic">
                <p>With all my love,</p>
                <p className="text-2xl mt-2 font-bold">Jedy</p>
            </section>
        </div>
    );
};