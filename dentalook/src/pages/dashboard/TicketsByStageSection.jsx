
import BarChart from '../../components/charts/Barchart';
import LineChart from '../../components/charts/LineChart';
import React, { useState } from 'react'

const TicketsByStageSection = () => {

    const [lineChart, setLineChart] = useState(false);

    // Track which series are visible (all visible by default)
    const [visibleSeries, setVisibleSeries] = useState({
        "Received Tickets": true,
        "Assigned Tickets": true,
        "Stuck Tickets": true,
        "Completed Tickets": true,
    });





    // Toggle legend visibility
    const toggleLegend = (legendName) => {
        setVisibleSeries(prev => ({
            ...prev,
            [legendName]: !prev[legendName]
        }));
    };

    const Legends = ["Received Tickets", "Completed Tickets", "Assigned Tickets", "Stuck Tickets",]

    const TicketsbyStage = [
        { name: "Received Tickets", value: 47, color: "#2F80ED" },
        { name: "Assigned Tickets", value: 15, color: "#FF6A00" },
        { name: "Stuck Tickets", value: 30, color: "#EB5757" },
        { name: "Completed Tickets", value: 45, color: "#339D5C" },
    ]

    const lineChartData = [
        {
            name: "Received Tickets",
            values: [32, 42, 38, 45, 44, 52, 47, 42, 46, 40],
            color: "#2F80ED"
        },
        {
            name: "Assigned Tickets",
            values: [20, 25, 30, 32, 25, 25, 30, 35, 30, 33],
            color: "#FF6A00"
        },
        {
            name: "Stuck Tickets",
            values: [25, 35, 45, 40, 48, 46, 42, 38, 45, 35],
            color: "#EB5757"
        },
        {
            name: "Completed Tickets",
            values: [35, 45, 52, 58, 62, 55, 60, 65, 58, 52],
            color: "#339D5C"
        },
    ]

    return (
        <div className="mt-8 w-full p-8  rounded-[10px] border border-[#E2E8F0] bg-white">
            <div className="flex items-start justify-between">
                <h2 className="text-[#17181A] text-xl/8 font-bold max-w-[240px]">{!lineChart ?"Tickets by Stage":"Tickets by Month"}</h2>
                <div className="flex items-center flex-wrap max-w-[461px]">
                    {Legends.map((legend, index) => (
                        <button
                            key={index}
                            onClick={() => toggleLegend(legend)}
                            className={`px-2.5 py-2 border border-gray-200 text-xs/3 font-medium transition-all ${visibleSeries[legend]
                                ? "text-white bg-[#087BB3]"
                                : "text-[#809FB8]"
                                } ${index === 0
                                    ? "rounded-[6px_0_0_6px]"
                                    : index === Legends.length - 1
                                        ? "rounded-[0_6px_6px_0]"
                                        : "rounded-none"
                                }`}
                        >
                            {legend}
                        </button>
                    ))}
                </div>
                <div className="flex items-center ">
                    <button className={`py-2 px-2.5 text-xs/4  border  rounded-[6px_0_0_6px]  ${!lineChart ? " bg-[#087BB3]/10 border-[#087BB3]/10 " : " border-gray-300"}`} onClick={() => setLineChart(false)} aria-label="chart toggle">
                        <svg className={`${!lineChart ? "stroke-[#087BB3]" : "stroke-[#63716E]"}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 9.16683V16.6668M7.5 9.16683H3.83301C3.3663 9.16683 3.13318 9.16683 2.95492 9.25766C2.79811 9.33755 2.67072 9.46494 2.59083 9.62174C2.5 9.8 2.5 10.0335 2.5 10.5002V16.6668H7.5M7.5 9.16683V4.66691C7.5 4.2002 7.5 3.96667 7.59083 3.78841C7.67072 3.63161 7.79811 3.50422 7.95492 3.42432C8.13317 3.3335 8.3663 3.3335 8.83301 3.3335H11.1663C11.6331 3.3335 11.8669 3.3335 12.0452 3.42432C12.202 3.50422 12.329 3.63161 12.4089 3.78841C12.4997 3.96667 12.5 4.2002 12.5 4.66691V6.66683M7.5 16.6668H12.5M12.5 16.6668L17.5 16.6669V8.00024C17.5 7.53353 17.4997 7.3 17.4089 7.12174C17.329 6.96494 17.2024 6.83755 17.0456 6.75766C16.8674 6.66683 16.6334 6.66683 16.1667 6.66683H12.5M12.5 16.6668V6.66683" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className={`py-2 px-2.5 text-xs/4  border  rounded-[0_6px_6px_0]  ${lineChart ? " bg-[#087BB3]/10 border-[#087BB3]/10" : " border-gray-300"}`} onClick={() => setLineChart(true)} aria-label="chart toggle">
                        <svg className={`${lineChart ? "stroke-[#087BB3]" : "stroke-[#63716E]"}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.5 12.5V13.9998C2.5 14.9333 2.5 15.3996 2.68166 15.7562C2.84144 16.0698 3.09623 16.3252 3.40983 16.485C3.766 16.6665 4.23249 16.6665 5.16409 16.6665H17.5002M2.5 12.5V4.1665M2.5 12.5L5.71116 9.82406L5.71382 9.82193C6.29472 9.33784 6.58573 9.09533 6.90129 8.99683C7.27406 8.88046 7.67559 8.89887 8.0363 9.0485C8.34208 9.17536 8.61021 9.44349 9.14647 9.97974L9.15185 9.98512C9.69643 10.5297 9.96944 10.8027 10.2801 10.9293C10.6478 11.0791 11.0571 11.092 11.4339 10.967C11.7534 10.861 12.0452 10.6061 12.6286 10.0956L17.5 5.83317" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="py-4 w-full">
                {lineChart ? (
                    <LineChart
                        data={lineChartData}
                        visibleSeries={visibleSeries}
                    />
                ) : (
                    <BarChart data={TicketsbyStage}
                        height="300px"
                        ShowAllLabels={true}
                        barwidth="80%"
                        visibleSeries={visibleSeries} />
                )}
            </div>
        </div>
    )
}

export default TicketsByStageSection
