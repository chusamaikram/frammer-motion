import { Link } from "react-router"
import logo from "/logo.svg"
import avatar from "/avatar.svg"
import { useState } from "react";
export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className="p-5 sticky inset-0 bg-white z-30 ">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-26 px-2.5 ">
                        <div className="max-w-35 w-full">
                            <Link to="/" >
                                <img className="w-full object-cover" src={logo} alt="logo" width={140} height={30} />
                            </Link>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()}
                            className="max-w-[360px] w-full px-6 py-4 bg-[#F9FBFC] rounded-2xl flex items-center gap-5">
                            <button type="submit" aria-label="search button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 20.5C4.6 20.5 0 15.9 0 10.25C0 4.6 4.6 0 10.25 0C15.9 0 20.5 4.6 20.5 10.25C20.5 15.9 15.9 20.5 10.25 20.5ZM10.25 1.5C5.42 1.5 1.5 5.43 1.5 10.25C1.5 15.07 5.42 19 10.25 19C15.08 19 19 15.07 19 10.25C19 5.43 15.08 1.5 10.25 1.5Z" fill="#809FB8" />
                                    <path d="M20.5504 21.4999C20.3604 21.4999 20.1704 21.4299 20.0204 21.2799L17.0204 18.2799C16.7304 17.9899 16.7304 17.5099 17.0204 17.2199C17.3104 16.9299 17.7904 16.9299 18.0804 17.2199L21.0804 20.2199C21.3704 20.5099 21.3704 20.9899 21.0804 21.2799C20.9304 21.4299 20.7404 21.4999 20.5504 21.4999Z" fill="#809FB8" />
                                </svg>
                            </button>
                            <input type="text" placeholder="Search"
                                className="w-full h-full text-base font-semibold leading-5 text-[#809FB8] outline-none" />


                        </form>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <button className="cursor-pointer relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.35828 24.6788C6.86377 24.1816 6.4917 23.5764 6.27112 22.9108C4.92383 22.6891 3.59668 22.3597 2.30212 21.9258C1.33362 21.62 0.557007 20.8898 0.192261 19.9418C-0.150269 18.9899 -0.0306396 17.9329 0.516235 17.0818L1.89429 14.7818C2.2207 14.16 2.40906 13.4751 2.44629 12.7738V9.30379C2.44861 5.93919 4.52283 2.9239 7.6637 1.71866C8.23804 0.657566 9.34851 -0.00252914 10.5551 7.62939e-06C11.7617 0.00254059 12.8694 0.667301 13.4393 1.7308C16.5632 2.9448 18.6219 5.95134 18.6244 9.3028V12.7768C18.6648 13.4814 18.8528 14.1696 19.1764 14.7968L20.5424 17.0808C21.0571 17.9455 21.1542 18.9964 20.8064 19.9408C20.4635 20.8812 19.7084 21.6124 18.7574 21.9248C17.4678 22.3586 16.1451 22.6877 14.8025 22.9088C14.3174 24.3927 13.0955 25.5176 11.5767 25.8786C10.0577 26.2396 8.46045 25.7847 7.3595 24.6778L7.35828 24.6788ZM8.62927 23.4048C9.17126 23.95 9.9209 24.237 10.6885 24.193C11.4561 24.149 12.168 23.7784 12.6443 23.1748C11.943 23.2315 11.2396 23.2598 10.5343 23.2598C9.82898 23.2598 9.12598 23.2315 8.42529 23.1748C8.48889 23.255 8.55701 23.3314 8.62927 23.4038V23.4048ZM4.24329 9.30479V12.7788C4.20117 13.8043 3.92761 14.807 3.44324 15.7118L2.06519 18.0118C1.80542 18.397 1.73901 18.8808 1.88501 19.3218C2.06177 19.7559 2.42908 20.084 2.88013 20.2108C7.85071 21.8934 13.2367 21.8934 18.2073 20.2108C18.6371 20.0693 18.9773 19.7371 19.1292 19.3108C19.2896 18.8819 19.2454 18.4031 19.009 18.0108L17.6311 15.7108C17.1438 14.8028 16.8701 13.7956 16.8311 12.7658V9.30379C16.8351 6.17041 14.5375 3.5095 11.4369 3.05679C10.8188 2.97996 10.1934 2.98332 9.57605 3.06679C6.50562 3.54982 4.24341 6.1956 4.24329 9.30379V9.30479Z" fill="#809FB8" />
                            </svg>
                            <div className="absolute top-0 right-0 w-[11px] h-[11px] bg-white flex items-center justify-center p-[1.5px]">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#F47690]"></span>
                            </div>
                        </button>
                        <span className="inline-block w-[1px] h-9 bg-[#F9FBFC]"></span>
                        <div className="relative cursor-pointer flex items-center gap-3" onClick={() => setMenuOpen(!menuOpen)}>
                            <div className="relative w-12.5 h-12.5">
                                <img className="w-full object-cover " src={avatar} alt="avatar" />
                                <span className="absolute bottom-0 right-0 inline-block w-3 h-3 rounded-full bg-[#1AD598] border-2 border-white"></span>
                            </div>
                            <div className="flex flex-col items-start">
                                <h2 className="text-lg font-semibold leading-6 font-['Urbanist'] text-[#17181A]">Mahmoud Tayyem</h2>
                                <span className="text-base font-semibold leading-4.5 text-[#809FB8]">Admin</span>
                            </div>
                            <span className="p-2.5 flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="22" viewBox="0 0 11 22" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.49258 20.1012L9.64761 15.9672C9.9545 15.6618 10.4506 15.6618 10.7575 15.9672C11.0606 16.2712 11.0607 16.7631 10.7576 17.0672L6.04764 21.7532C5.74039 22.058 5.24478 22.058 4.93765 21.7532L0.227692 17.0672C-0.075409 16.7632 -0.075409 16.2712 0.227692 15.9672C0.534821 15.6624 1.03043 15.6624 1.33755 15.9672L5.49258 20.1012ZM5.49258 1.88019L9.64761 6.01519C9.9545 6.32054 10.4506 6.32054 10.7575 6.01519C11.0611 5.71143 11.0611 5.21903 10.7575 4.91519L6.04764 0.228192C5.74014 -0.0760641 5.24503 -0.0760641 4.93765 0.228192L0.227692 4.91519C-0.0758972 5.21899 -0.0758972 5.71139 0.227692 6.01519C0.534576 6.32054 1.03067 6.32054 1.33755 6.01519L5.49258 1.88019Z" fill="#D9E1E7" />
                                </svg>
                            </span>

                            <div className={`absolute top-full z-10 right-3 max-w-[192px] w-full rounded-md bg-white p-4 mt-1.5 flex flex-col items-start gap-1 shadow-lg cursor-default border border-gray-200  ${menuOpen ? 'block animate-out' : 'hidden animate-in'}`}>
                                <div className="pb-1">
                                    <h3 className="text-sm/5 font-medium text-[#101828]">Muhammad Tayyem</h3>
                                    <span className="block -mt-0.5 text-xs/4 text-[#6a7282] ">Admin</span>
                                </div>
                                <Link to="/auth/login" className="mt-2 text-sm/5 text-red-500 cursor-default flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out w-4 h-4 mr-2" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9">
                                    </path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    </svg>
                                    Sign Out
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}