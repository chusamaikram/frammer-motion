
import { useState, useRef, useEffect } from "react";
import { DateRange, Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style
import "react-date-range/dist/theme/default.css"; // theme

export default function CalendarDropdown() {
    // Single date picker
    const [singleDate, setSingleDate] = useState(new Date());
    const [openSingle, setOpenSingle] = useState(false);

    // Date range picker
    const [dateRange, setDateRange] = useState([
        { startDate: new Date(), endDate: new Date(), key: "selection" },
    ]);
    const [openRange, setOpenRange] = useState(false);

    // Dropdown ref for outside click handling
    const singleRef = useRef(null);
    const rangeRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (singleRef.current && !singleRef.current.contains(event.target)) {
                setOpenSingle(false);
            }
            if (rangeRef.current && !rangeRef.current.contains(event.target)) {
                setOpenRange(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const formattedSingle = format(singleDate, "MMM d, yyyy");
    const formattedRange = `${format(dateRange[0].startDate, "MMM d, yyyy")} - ${format(
        dateRange[0].endDate,
        "MMM d, yyyy"
    )}`;


    return (
        <>
            <div className="flex flex-wrap items-center gap-2">
                {/* ---------------- Single Date Picker ---------------- */}
                <div className="max-w-[150px] relative" ref={singleRef}>
                    <div
                        className="cursor-pointer w-full px-3 py-2 rounded-3xl flex items-center gap-2 border border-[#E0E0E0]"
                        onClick={() => setOpenSingle(!openSingle)}
                    >
                        <input
                            type="text"
                            readOnly
                            value={formattedSingle}
                            className="outline-none w-full text-xs cursor-pointer border-0"
                        />
                        <svg
                            className={`${openSingle ? "rotate-180" : ""} transition-all duration-300`}
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
                    </div>

                    {openSingle && (
                        <div className="absolute top-full left-0 z-10 mt-1 border border-gray-300 bg-white shadow rounded-lg p-2">
                            <Calendar date={singleDate} onChange={setSingleDate} />
                        </div>
                    )}
                </div>

                {/* ---------------- Date Range Picker ---------------- */}
                <div className="max-w-[250px] relative" ref={rangeRef}>
                    <div
                        className="cursor-pointer w-full px-3 py-2 rounded-3xl flex items-center gap-2 border border-[#E0E0E0]"
                        onClick={() => setOpenRange(!openRange)}
                    >
                        <input
                            type="text"
                            readOnly
                            value={formattedRange}
                            className="outline-none w-full text-xs cursor-pointer border-0"
                        />
                        <svg
                            className={`${openRange ? "rotate-180" : ""} transition-all duration-300`}
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
                    </div>

                    {openRange && (
                        <div className="absolute top-full right-0 z-10 mt-1 border border-gray-300 bg-white shadow rounded-lg p-2">
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDateRange([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dateRange}
                                months={2}          // show 2 calendars
                                direction="horizontal" // calendars side by side
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
