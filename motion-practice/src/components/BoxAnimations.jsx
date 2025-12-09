import { motion } from "motion/react"

function BoxAnimations() {
    return (
        <>
            <div className='flex items-center justify-center gap-25 my-6 px-4 text-white font-bold'>
                <motion.div
                animate={{rotate:90}}
                transition={{
                    duration:2,
                    repeat:Infinity,
                    ease:"linear"
                    
                }}
                    className='w-32 h-32 bg-red-400 m-4 rounded-lg flex items-center justify-center'
                >
                </motion.div>
            </div>
        </>
    )
}

export default BoxAnimations
