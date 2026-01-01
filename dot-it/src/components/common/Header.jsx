import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Logo } from "../../assets/svgs";

const NavLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Why dot.it", path: "/why-dot-it" },
    {
        name: "Resources",
        links: [
            { title: "Request a Demo", path: "/request-a-demo" },
            { title: "Pricing", path: "/pricing" },
            { title: "Case Studies", path: "/case-studies" },
            { title: "Blog", path: "/blogs" },
            { title: "Contact Us", path: "/contact-us" },
        ],
    },
];

const Header = () => {
    const { pathname } = useLocation();

    // Desktop dropdown
    const [desktopOpen, setDesktopOpen] = useState(false);
    const desktopRef = useRef(null);

    // Mobile menu + dropdown
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

    /* Desktop outside click */
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (desktopRef.current && !desktopRef.current.contains(e.target)) {
                setDesktopOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    /*  Active resources */
    const isResourcesActive = NavLinks.find(
        (l) => l.name === "Resources"
    )?.links.some(
        (item) => pathname === item.path || pathname.startsWith(item.path + "/")
    );

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white md:bg-transparent backdrop-blur-sm border-b border-gray-100">
            <div className="container">
                <nav className="flex items-center justify-between py-3 relative">
                    <Link to="/" aria-label="logo">
                        <Logo />
                    </Link>

                    {/* DESKTOP NAV */}
                    <ul className="hidden md:flex items-center">
                        {NavLinks.map((link) => (
                            <li key={link.name} className="relative px-6 py-2.5">
                                {link.name === "Resources" ? (
                                    <div ref={desktopRef}>
                                        <button
                                            onClick={() => setDesktopOpen((p) => !p)}
                                            className={`flex items-center gap-2 text-lg font-medium transition
                                                       ${isResourcesActive ? "text-[#0160C9]" : "text-[#002B5A] hover:text-[#0160C9]"}`}
                                        >
                                            Resources
                                            <svg
                                                className={`w-4 h-4 transition-transform ${desktopOpen ? "rotate-180" : ""
                                                    }`}
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>

                                        {/* Active dot */}
                                        <span
                                            className={`absolute top-0 left-2.5 bg-[#0160C9] rounded-full transition-all ${isResourcesActive ? "w-2 h-2" : "w-0 h-0"}`}
                                        />

                                        {/* Dropdown */}
                                        <div
                                            className={`absolute -left-4 mt-4 w-48 rounded-2xl bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-200
                                                    ${desktopOpen ? "opacity-100 translate-y-0 pointer-events-auto"
                                                    : "opacity-0 -translate-y-2 pointer-events-none"}
                                                    `} >
                                            <ul className="py-3">
                                                {link.links.map((item) => (
                                                    <li key={item.path}>
                                                        <Link
                                                            to={item.path}
                                                            onClick={() => setDesktopOpen(false)}
                                                            className={`block px-6 py-1 text-[15px] transition
                                                                     ${pathname === item.path ||
                                                                    pathname.startsWith(item.path + "/")
                                                                    ? "text-[#0160C9]"
                                                                    : "text-[#4B5563] hover:text-[#0160C9]"
                                                                }`}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <Link
                                            to={link.path}
                                            className={`text-lg font-medium transition
                                                       ${pathname === link.path
                                                    ? "text-[#0160C9]"
                                                    : "text-[#002B5A] hover:text-[#0160C9]"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                        <span
                                            className={`absolute top-0 left-2.5 bg-[#0160C9] rounded-full
                                                        ${pathname === link.path ? "w-2 h-2" : "w-0 h-0"}`}
                                        />
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-3">
                        <div className="">
                            <Button href="https://tally.so/r/315L24">Get Started</Button>
                        </div>


                        <button
                            className="md:hidden p-2"
                            onClick={() => setMobileMenuOpen((p) => !p)}
                            aria-label="humberger"
                        >
                            <svg
                                className="w-6 h-6 text-[#002B5A]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>

                {/*  MOBILE MENU */}
                <ul
                    className={`md:hidden fixed top-16 right-0 z-50 h-[calc(100vh-4rem)] w-[320px]
            bg-white py-5 px-10 flex flex-col  gap-4 transform transition-transform duration-300
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    {NavLinks.map((link) =>
                        link.name === "Resources" ? (
                            <li key={link.name}>
                                <button
                                    onClick={() => setMobileResourcesOpen((p) => !p)}
                                    className={`flex items-center gap-2 text-lg font-medium transition
                        ${isResourcesActive
                                            ? "text-[#0160C9]"
                                            : "text-[#002B5A] hover:text-[#0160C9]"
                                        }`}
                                >
                                    Resources
                                    <span className={`${mobileResourcesOpen ? "rotate-180" : ""} transition`}>
                                        ⌄
                                    </span>
                                </button>

                                {mobileResourcesOpen && (
                                    <ul className="mt-2 pl-4">
                                        {link.links.map((item) => (
                                            <li key={item.path}>
                                                <Link
                                                    to={item.path}
                                                    onClick={() => {
                                                        setMobileResourcesOpen(false);
                                                        setMobileMenuOpen(false);
                                                    }}
                                                    className="block py-2 text-gray-600 hover:text-[#0160C9]"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block text-lg font-medium py-2
                    ${pathname === link.path
                                            ? "text-[#0160C9]"
                                            : "text-[#002B5A]"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header;
