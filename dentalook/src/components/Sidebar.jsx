

import { Link, useLocation } from "react-router";
import { Ticket, Dashboard, Analytics, UserAudit, Settings, Leaderboard } from "./Sidebar-icons";
import { useState } from "react";


export default function Sidebar() {
    const location = useLocation();
    const pathname = location.pathname;

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const SidebarItems = [
        { name: "Tickets", path: "/tickets", icon: <Ticket pathname={pathname} /> },
        { name: "Dashboard", path: "/dashboard", icon: <Dashboard pathname={pathname} /> },
        { name: "Analytics", path: "/", icon: <Analytics pathname={pathname} /> },
        { name: "UserAudit", path: "/user-audit", icon: <UserAudit pathname={pathname} /> },
        { name: "Leaderboard", path: "/leaderboard", icon: <Leaderboard pathname={pathname} /> },
        { name: "Settings", path: "/settings", icon: <Settings pathname={pathname} /> },
    ];

    return (

        <aside
            className={`hidden md:block  sticky top-25 z-10 h-full py-8 px-4 transition-all duration-300 border-r border-gray-200  ${sidebarOpen ? "w-64  " : "w-20"
                }`}
        >

            <ul className="relative flex flex-col items-start gap-2 w-full">
                {SidebarItems.map((item) => (
                    <li key={item.path} className={`transition-all duration-300 ${sidebarOpen ? " w-[224px]" : " w-[50px]"}`}>
                        <Link
                            to={item.path}
                            className={`w-full p-[10px_10px_10px_14px] flex items-center gap-2.5 rounded-xl text-sm font-medium font-['Poppins']  ${pathname === item.path
                                ? "bg-[#087BB3] text-white"
                                : "bg-white text-[#63716E] hover:bg-gray-300 hover:text-gray-900"
                                }`}
                        >
                            <span className="h-full">
                                {item.icon}
                            </span>
                            <span
                                className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${sidebarOpen ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
                                    }`}
                            >
                                {item.name}
                            </span>
                        </Link>
                    </li>
                ))}
                <button
                    className="cursor-pointer absolute -right-7 bg-white -top-8 w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <svg
                        className={`transition-transform duration-300 ${sidebarOpen ? "" : "rotate-180"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                </button>
            </ul>




        </aside >

    );
}


export const NavLinks = ({ setMenuOpen }) => {
    const location = useLocation();
    const pathname = location.pathname;
    const SidebarItems = [
        { name: "Tickets", path: "/tickets", icon: <Ticket pathname={pathname} /> },
        { name: "Dashboard", path: "/dashboard", icon: <Dashboard pathname={pathname} /> },
        { name: "Analytics", path: "/", icon: <Analytics pathname={pathname} /> },
        { name: "UserAudit", path: "/user-audit", icon: <UserAudit pathname={pathname} /> },
        { name: "Leaderboard", path: "/leaderboard", icon: <Leaderboard pathname={pathname} /> },
        { name: "Settings", path: "/settings", icon: <Settings pathname={pathname} /> },
    ];
    return (
        <ul className="relative flex flex-col items-start gap-2 w-full">
            {SidebarItems.map((item) => (
                <li key={item.path} className={`transition-all duration-300 w-[224px]`}>
                    <Link
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={`w-full p-[10px_10px_10px_14px] flex items-center gap-2.5 rounded-xl text-sm font-medium font-['Poppins']  ${pathname === item.path
                            ? "bg-[#087BB3] text-white"
                            : "bg-white text-[#63716E] hover:bg-gray-300 hover:text-gray-900"
                            }`}
                    >
                        <span className="h-full">
                            {item.icon}
                        </span>
                        <span
                            className={`transition-all duration-300 overflow-hidden whitespace-nowrap opacity-100 max-w-[200px]"
                                }`}
                        >
                            {item.name}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>)



}