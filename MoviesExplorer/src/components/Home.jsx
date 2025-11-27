import Header from "./Header";
import MoviesSection from "./Movie";
import TypingText from "./TypingText";
import { motion } from "framer-motion";

export default function Home() {
    
    return (
        <>
            <Header />
            <section className="py-16">
                <div className="container">
                    <div className="flex flex-col items-center justify-center mb-8">
                        <TypingText text="Welcome to Movies Explorer" />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3 }}
                            className="text-xl font-medium text-center max-w-[470px] ">Discover movies, search titles, and explore details all in one place.</motion.p>
                    </div>
                    <MoviesSection />
                </div>
            </section>
        </>
    )
}