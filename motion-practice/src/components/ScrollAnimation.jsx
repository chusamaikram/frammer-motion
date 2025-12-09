import { motion, useScroll } from "framer-motion"
import { useRef } from "react";
export default function ScrollAnimation() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 200px", "end end"]
    });


    return (
        <>
            <div
                ref={containerRef}
                className="ps-5 min-h-screen max-w-[600px] relative  flex flex-col items-start">
                <motion.div
                    style={{
                        scaleY: scrollYProgress,
                        position: "absolute",
                        left: 10,
                        top: 0,
                        height: '100%',
                        width: 5,
                        backgroundColor: "blue",
                        transformOrigin: 'top',
                    }}></motion.div>
                <h3 className="text-2xl font-semibold  ">Introduction</h3>
                <p className="text-base mt-2 mb-3">Artificial Intelligence AI is the simulation of human intelligence in machines that are programmed to think, learn, and make decisions.</p>
                <h3 className="text-2xl font-semibold  ">Applications</h3>
                <p className="text-base mt-2 mb-3">AI is widely used in various fields, including healthcare for disease diagnosis, finance for fraud detection, autonomous vehicles, virtual assistants, and recommendation systems.</p>
                <h3 className="text-2xl font-semibold  ">Techniques</h3>
                <p className="text-base mt-2 mb-3">AI uses techniques such as machine learning, deep learning, natural language processing, and computer vision to analyze data and solve complex problems.</p>
                <h3 className="text-2xl font-semibold  ">Advantages</h3>
                <p className="text-base mt-2 mb-3">AI improves efficiency, reduces human error, automates repetitive tasks, and enables faster decision-making across industries.</p>
                <h3 className="text-2xl font-semibold  ">Challenges</h3>
                <p className="text-base mt-2 mb-3">Despite its benefits, AI faces challenges like ethical concerns, job displacement, data privacy issues, and the need for high computational resources.</p>
                <h3 className="text-2xl font-semibold  ">Introduction</h3>
                <p className="text-base mt-2 mb-3">Artificial Intelligence AI is the simulation of human intelligence in machines that are programmed to think, learn, and make decisions.</p>
                <h3 className="text-2xl font-semibold  ">Applications</h3>
                <p className="text-base mt-2 mb-3">AI is widely used in various fields, including healthcare for disease diagnosis, finance for fraud detection, autonomous vehicles, virtual assistants, and recommendation systems.</p>
                <h3 className="text-2xl font-semibold  ">Techniques</h3>
                <p className="text-base mt-2 mb-3">AI uses techniques such as machine learning, deep learning, natural language processing, and computer vision to analyze data and solve complex problems.</p>
                <h3 className="text-2xl font-semibold  ">Advantages</h3>
                <p className="text-base mt-2 mb-3">AI improves efficiency, reduces human error, automates repetitive tasks, and enables faster decision-making across industries.</p>
                <h3 className="text-2xl font-semibold  ">Challenges</h3>
                <p className="text-base mt-2 mb-3">Despite its benefits, AI faces challenges like ethical concerns, job displacement, data privacy issues, and the need for high computational resources.</p>
            </div>

        </>
    )
}