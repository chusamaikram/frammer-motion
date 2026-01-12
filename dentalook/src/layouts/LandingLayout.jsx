import { Outlet } from "react-router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Landinglayout() {
    return (
        <>
            <Header />
            <main>
                <div className="relative flex items-start justify-between">
                    <Sidebar />
                    <Outlet />
                </div>
            </main>
        </>
    )
}