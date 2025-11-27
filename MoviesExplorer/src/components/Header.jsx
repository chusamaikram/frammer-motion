import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header({ bg = "bg-[#191919]" }) {
    return (
        <>
            <header className={`${bg} py-8 `}>
                <div className="container">
                    <nav className="flex items-center justify-start gap-8">
                        <Link to={'/'} className="text-white font-bold text-2xl " >
                            <motion.p
                                initial={{ opacity: 0, y: -40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >Movies <span className="text-amber-500">Explorer</span></motion.p>
                        </Link>
                        <Link to={'/'} className="text-white " onClick={() => {
                            window.dispatchEvent(new Event("goHome"));
                        }}>Home </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}