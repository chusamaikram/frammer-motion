import LoadingAnimation from "./LoadingAnimation";

export default function Sidebar({ city, setCity, handleSubmit, weather, sidebarOpen, loading }) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).replace(',', '');

    return (
        <aside
            className={`
        fixed top-20 left-0 h-full w-85 bg-black/20 backdrop-blur-md py-4 px-4 z-50
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block
      `}
        >
            <div className="flex flex-col items-center justify-center gap-4">
                <form onSubmit={handleSubmit} className="ms-4">
                    <div className="flex items-center justify-between h-12 rounded-xl p-4 bg-white/80">
                        <input type="text"
                            className="h-full outline-none text-base text-black bg-transparent flex-1"
                            placeholder="Search any city "
                            value={city}
                            onChange={(e) => setCity(e.target.value)} />
                        <button type="submit" className=" cursor-pointer rounded-full p-1 flex items-center justify-center bg-black/20 shrink-0">🔍</button>
                    </div>
                </form>
                <div className="flex flex-col items-start justify-center gap-4">
                    {loading ? (<LoadingAnimation/>) : (
                        <>
                            <div className="flex flex-col items-center ">
                                <div className="flex flex-col items-start ">
                                    <p className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                                                fill="white"
                                                stroke="black"
                                                strokeWidth="1"
                                            />
                                            <circle cx="12" cy="9" r="2.5" fill="black" />
                                        </svg>

                                        <span className="text-2xl font-semibold">{weather?.location?.name} , {weather?.location?.country}</span>
                                    </p>
                                    <time className="mb-3 ms-4  font-normal" dateTime={formattedDate}>{formattedDate}</time>
                                </div>
                                <img className="overflow-hidden h-auto ms-12 " src={weather?.current?.condition?.icon} alt="icon" width={180} height={80} />
                            </div>
                            <div className="w-full flex flex-col items-start gap-1">
                                <p className="text-[72px] font-bold text-white text-center leading-[normal] flex items-start gap-1">{weather?.current?.temp_c} <span className="text-2xl font-semibold mt-3">℃</span> </p>
                                <span className="text-gray-300">Feels like {weather?.current?.feelslike_c} ℃ </span>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </aside>
    );
}
