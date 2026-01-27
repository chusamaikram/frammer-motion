import { Outlet } from "react-router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Landinglayout() {
    return (
        <>
            <Header />
            <div className="relative flex ">
                <Sidebar />
                <main className="bg-[#F9FBFC] w-full overflow-x-hidden">
                    <div className="p-4 sm:p-8 w-full overflow-hidden transition-all duration-300 ">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}