
import { motion } from "framer-motion";

const TypingText = ({ text }) => {
    const letters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const child = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <motion.h1 className={`text-6xl font-bold mb-4 text-center text-white `} variants={container} initial="hidden" animate="visible">
            {letters.map((char, index) => (
                <motion.span key={index} variants={child}>
                    {char}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default TypingText;
