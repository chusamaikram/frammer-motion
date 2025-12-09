import { Link } from "react-router-dom";

export default function Header({ setSidebar, sidebarOpen }) {

    return (
        <>
            <header className="bg-black/70  sticky top-0 z-999 ">
                <div className="container">
                    <div className=" text-white p-4 flex items-center gap-6">
                        <button
                            onClick={() => setSidebar(!sidebarOpen)}
                            className="text-white text-2xl md:hidden cursor-pointer"
                        >
                            {sidebarOpen ? "✖" : "☰"}

                        </button>
                        <nav className="px-4">
                            <Link to="/"
                                className=" text-[28px] md:text-[42px] md:leading-[normal] text-orange-400 font-bold flex items-center" >
                                Weather<span className="text-white">Mate</span>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}