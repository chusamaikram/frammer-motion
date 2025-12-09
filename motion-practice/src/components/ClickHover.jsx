import { useState } from "react";
import { motion } from "motion/react"

export default function ClickHover() {

    const [show, setShow] = useState(false);
    return (
        <>
            <div className="my-6 h-[400px] flex items-center justify-center bg-gray-400">
                <motion.div
                    className="bg-white rounded-lg p-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        layout: {
                            duration: 1,
                            type: "spring"
                        }
                    }}
                    layout
                    onClick={() => setShow(!show)}
                >
                    <motion.h3 className="font-bold text-lg">Hover or click</motion.h3>
                    {show && <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="max-w-[400px]">
                        This is a detailed description that appears when you click the box.This is a detailed description that appears when you click the box.
                    </motion.p>}

                </motion.div>
            </div>
        </>
    )
}