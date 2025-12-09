
import { motion } from "motion/react"

function TextAnimation() {
    return (
        <>
            <motion.h2
                initial={{ x: 0, }}
                animate={{ x: [0, 400, 250] }}
                transition={{ duration: 3 }}

                className="text-blue-400 font-semibold ms-4 mt-4 text-4xl"
            >
                Hello this is text with framer motion</motion.h2>

        </>
    )
}

export default TextAnimation


