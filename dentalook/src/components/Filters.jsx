import { useEffect, useRef, useState } from "react";
import CalendarDropdown from "./Calender";


export default function FilterFields() {

    const [openId, setOpenId] = useState(null);
    const [selected, setSelected] = useState({});
    const dropdownRef = useRef(null);



    /* ---------------- Outside Click ---------------- */
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenId(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    /* ---------------- Toggle Dropdown ---------------- */
    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    /* ---------------- Handle Multi Select ---------------- */
    const handleSelect = (filterId, option) => {
        setSelected((prev) => {
            const current = prev[filterId] || [];

            return {
                ...prev,
                [filterId]: current.includes(option)
                    ? current.filter((item) => item !== option)
                    : [...current, option],
            };
        });
    };

    /* ---------------- Selected Label ---------------- */
    const getSelectedLabel = (filter) => {
        const values = selected[filter.id];
        if (!values || values.length === 0) return filter.name;
        return values.join(", ");
    };

    const FiltersData = [
        {
            id: 1,
            name: "Provinces",
            options: ["Punjab", "Sindh", "KPK", "Balochistan"],
        },
        {
            id: 2,
            name: "Region",
            options: ["Region 1", "Region 2", "Region 3", "Region 4"],
        },
        {
            id: 3,
            name: "Clinics",
            options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"],
        },
        {
            id: 4,
            name: "Department",
            options: ["Department 1", "Department 2", "Department 3", "Department 4"],
        },
        {
            id: 5,
            name: "Users",
            options: ["User 1", "User 2", "User 3", "User 4"],
        },
    ];


    return (
        <div className="grid grid-cols-2 sm:flex 2xl:flex-nowrap flex-wrap gap-2 sm:justify-end" ref={dropdownRef}>
            {FiltersData.map((filter) => (
                <div key={filter.id} className="max-w-[110px] grow">
                    <div
                        className="cursor-pointer w-full relative px-3 py-2 rounded-3xl flex items-center gap-2 border border-[#E0E0E0]"
                        onClick={() => handleToggle(filter.id)}
                    >
                        {/* Parent Input */}
                        <input
                            type="text"
                            readOnly
                            className="outline-none w-full text-xs text-[#0A0E1A] border-0 cursor-pointer truncate"
                            value={getSelectedLabel(filter)}
                        />

                        {/* Arrow */}
                        <svg
                            className={`${openId === filter.id ? "rotate-180" : ""
                                } transition-all duration-300`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                        >
                            <path
                                d="M6.21604 8.20801C6.35204 8.20801 6.45604 8.16401 6.52804 8.07601L9.67204 4.69201C9.75204 4.61201 9.79004 4.51201 9.78604 4.39201C9.78204 4.27201 9.73804 4.17201 9.65404 4.09201C9.57004 4.01201 9.46804 3.97201 9.34804 3.97201C9.22804 3.97201 9.12804 4.01601 9.04804 4.10401L6.21604 7.15201L3.38404 4.10401C3.30404 4.01601 3.20404 3.97201 3.08404 3.97201C2.96404 3.97201 2.86204 4.01201 2.77804 4.09201C2.69404 4.17201 2.65004 4.27201 2.64604 4.39201C2.64204 4.51201 2.68004 4.61201 2.76004 4.69201L5.90404 8.07601C5.99204 8.16401 6.09604 8.20801 6.21604 8.20801Z"
                                fill="#0A0E1A"
                            />
                        </svg>

                        {/* Dropdown */}
                        <div
                            className={`absolute top-full left-0 z-10 mt-1 min-w-full border border-gray-300 bg-white shadow rounded-lg ${openId === filter.id ? "flex" : "hidden"
                                } flex flex-col items-start`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-2 border-b border-gray-200 w-full">
                                <input
                                    type="text"
                                    placeholder="search options"
                                    className="text-xs px-3 py-2 outline-none w-full border border-gray-300 rounded"
                                />
                            </div>

                            <ul className="p-1 flex flex-col items-start w-full">
                                {filter.options.map((option, index) => (
                                    <li
                                        key={index}
                                        className="w-full whitespace-nowrap p-2 rounded-lg hover:bg-gray-200 cursor-pointer text-xs/[18px] text-[#0A0E1A] flex items-center gap-2"
                                        onClick={() =>
                                            handleSelect(filter.id, option)
                                        }
                                    >
                                        <input
                                            type="checkbox"
                                            checked={
                                                selected[filter.id]?.includes(option) || false
                                            }
                                            readOnly
                                            className="shrink-0 w-4 h-4 text-[#3CB097] border-gray-300 rounded"
                                        />
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
            <CalendarDropdown />
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="px-3 py-2 rounded-2xl border border-[#E0E0E0] flex items-center justify-center gap-18 max-w-[182px] ">
                    <input type="text" className="text-xs/4.5 text-[#757575] w-full outline-none" placeholder="Quick search" />
                    <button type="submit" aria-label="search button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 10L14 14M6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333Z" stroke="#809FB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                </div>
            </form>
            <button className="text-xs/4 font-semibold text-[#087BB3] cursor-pointer ">Clear Filters</button>
        </div>
    )
}