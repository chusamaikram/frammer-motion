import { motion } from "framer-motion";

export default function Spinner() {
    return (
        <div className="flex justify-center items-center mt-10">
            <motion.div
                className="w-10 h-10 border-4 border-gray-400 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    ease: "linear"
                }}
            />
        </div>
    );
}
