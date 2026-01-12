


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import FilterFields from "../../components/Filters";
import DonutChart from "../../components/charts/DonutChart";
import BarChart from "../../components/charts/Barchart";
import LineChart from "../../components/charts/LineChart";
import { color } from "echarts";

export default function Dashboard() {


    const [chartType, setChartType] = useState({});
    const [lineChart, setLineChart] = useState(false);





    const TicketCards = [
        {
            title: "received tickets",
            number: "03"
        },
        {
            title: "assigned tickets",
            number: "05"
        },
        {
            title: "stuck tickets",
            number: "07"
        },
        {
            title: "Completed tickets",
            number: "02"
        },
        {
            title: "resolution time",
            number: "06"
        },
    ]



    const chartData = [
        {
            title: "All Tickets",
            data: [
                { name: "Resolved Tickets", value: 27, color: "#34A853" },
                { name: "Active Tickets", value: 30, color: "#FF6A00" },
                { name: "All Tickets", value: 17, color: "#2F80ED" },
                { name: "Stuck Tickets", value: 13, color: "#EB5757" },
            ]
        },
        {
            title: "Tickets by Department",
            data: [
                { name: "Finance", value: 100, color: "#64CB98" },
                { name: "Human Resources", value: 200, color: "#EB5757" },
                { name: "IT Department", value: 200, color: "#2F80ED" },
                { name: "Product", value: 200, color: "#FF9502" },
            ]
        },
        {
            title: "Resolution Time",
            data: [
                { name: "Above Average", value: 15.4, color: "#D69992" },
                { name: "Below Average", value: 84.6, color: "#B3D2A4" },
            ]
        },
        {
            title: "Tickets by Province",
            data: [
                { name: "AB", value: 50, color: "#FF9502" },
                { name: "SK", value: 10, color: "#64CB98" },
                { name: "ON", value: 35, color: "#2F80ED" },
            ]
        },
        {
            title: "Tickets by RM",
            data: [
                { name: "Gavin Brooks", value: 50, color: "#34A853" },
                { name: "Elena Rossi", value: 8, color: "#EB5757" },
                { name: "Farah Singh", value: 40, color: "#2F80ED" },
                { name: "Alicia Khan", value: 45, color: "#64CB98" },
            ]
        },
        {
            title: "Tickets by Clinic",
            data: [
                { name: "Clinic 01", value: 50, color: "#2F80ED" },
                { name: "Clinic 02", value: 10, color: "#64CB98" },
                { name: "Clinic 03", value: 35, color: "#EB5757" },
                { name: "Clinic 04", value: 42, color: "#FF6A00" },
                { name: "Clinic 05", value: 33, color: "#FF9502" },
            ]
        },
    ];

    const handleChartTypeChange = (index, type) => {
        setChartType((prev) => ({
            ...prev,
            [index]: type,
        }));
    };

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
        <>

            <div className="w-full p-8 bg-[#F9FBFC]">
                <Link to="/tickets" className="flex items-center justify-end mb-4">
                    <button className="cursor-pointer w-50 bg-[#34B3F1] p-[10px_10px_10px_14px] rounded-xl flex items-center gap-2.5 text-sm font-medium text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M6 12H12M12 12H18M12 12V18M12 12V6"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Add New Ticket
                    </button>
                </Link>

                <div className="flex flex-col items-start gap-4">
                    <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] p-8 flex items-start justify-between gap-4">
                        <div>
                            <h1 className="text-black text-2xl font-bold leading-8">
                                Service Desk Dashboard
                            </h1>
                            <p className="text-sm leading-5 text-[#757575]">
                                Monitor ticket volume, progress, and
                            </p>
                        </div>
                        <div>
                            <FilterFields
                            />
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-5 gap-2">
                        {TicketCards.map((card, index) => (
                            <div key={index} className="w-full p-4 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col items-start gap-3">
                                <div className="flex items-center gap-2">
                                    <span>
                                        <svg className={`${index === 0 && "fill-[#2F80ED]"} ${index === 1 && "fill-[#FF5C00]"}
                                     ${index === 2 && "fill-[#800000]"} ${index === 3 && "fill-[#339D5C]"}
                                      ${index === 4 && "fill-[#E7E7E7]"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M5.94002 18.9901H15C15.65 18.9901 16.26 18.6801 16.63 18.1501L20.58 12.5801C20.702 12.4113 20.7677 12.2083 20.7677 12.0001C20.7677 11.7918 20.702 11.5889 20.58 11.4201L16.62 5.84007C16.439 5.57855 16.1967 5.36529 15.9143 5.21888C15.632 5.07247 15.3181 4.99735 15 5.00007H5.94002C5.13002 5.00007 4.66002 5.93007 5.13002 6.59007L9.00002 12.0001L5.13002 17.4101C4.66002 18.0701 5.13002 18.9901 5.94002 18.9901Z" />
                                        </svg>
                                    </span>
                                    <p className=" text-xs/4 text-[#757575] capitalize">{card.title}</p>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[32px] font-semibold leading-10 text-[#0F172B]">{card.number}</span>
                                    <span className="text-sm/5 font-medium text-[#757575]">{index === 4 ? "Days" : "Tickets"}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-8 items-start h-full w-full">
                    {chartData.map((chart, index) => (

                        <div key={index} className="w-full h-107 bg-white p-8 rounded-2xl border border-[#E2E8F0] flex flex-col items-start">
                            <div className="pb-4 border-b border-[#E2E8F0] w-full flex items-center justify-between">
                                <span className="text-xl/8 font-bold text-[#17181A]">{chart.title}</span>
                                <div className="max-w-[126px] h-[33px] w-full flex overflow-hidden">
                                    <button className={`w-full text-xs/4  border  rounded-[6px_0_0_6px]  ${chartType[index] === "bar" ? "text-white bg-[#087BB3] border-[#087BB3] " : "text-[#809fb8] border-gray-300"}`} onClick={() => handleChartTypeChange(index, "bar")}>Bar</button>
                                    <button className={`w-full text-xs/4   border  rounded-[0_6px_6px_0]  ${chartType[index] !== "bar" ? "text-white bg-[#087BB3] border-[#087BB3]" : "text-[#809fb8] border-gray-300"}`} onClick={() => handleChartTypeChange(index, "pie")}>Pie</button>
                                </div>
                            </div>
                            <div className=" w-full flex items-center justify-center">
                                {chartType[index] === "bar" ? (
                                    <BarChart data={chart.data} height="350px" />
                                ) : (

                                    <DonutChart
                                        title={chart.title}
                                        data={chart.data} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 w-full p-8  rounded-[10px] border border-[#E2E8F0] bg-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <h2 className="text-[#17181A] text-xl/8 font-bold">Tickets by Stage</h2>
                            <div className="flex items-center">
                                <button className={`py-2 px-2.5 text-xs/4  border  rounded-[6px_0_0_6px]  ${!lineChart ? " bg-[#087BB3]/10 border-[#087BB3]/10 " : " border-gray-300"}`} onClick={() => setLineChart(false)} aria-label="chart toggle">
                                    <svg className={`${!lineChart ? "stroke-[#087BB3]" : "stroke-[#63716E]"}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 9.16683V16.6668M7.5 9.16683H3.83301C3.3663 9.16683 3.13318 9.16683 2.95492 9.25766C2.79811 9.33755 2.67072 9.46494 2.59083 9.62174C2.5 9.8 2.5 10.0335 2.5 10.5002V16.6668H7.5M7.5 9.16683V4.66691C7.5 4.2002 7.5 3.96667 7.59083 3.78841C7.67072 3.63161 7.79811 3.50422 7.95492 3.42432C8.13317 3.3335 8.3663 3.3335 8.83301 3.3335H11.1663C11.6331 3.3335 11.8669 3.3335 12.0452 3.42432C12.202 3.50422 12.329 3.63161 12.4089 3.78841C12.4997 3.96667 12.5 4.2002 12.5 4.66691V6.66683M7.5 16.6668H12.5M12.5 16.6668L17.5 16.6669V8.00024C17.5 7.53353 17.4997 7.3 17.4089 7.12174C17.329 6.96494 17.2024 6.83755 17.0456 6.75766C16.8674 6.66683 16.6334 6.66683 16.1667 6.66683H12.5M12.5 16.6668V6.66683" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className={`py-2 px-2.5 text-xs/4  border  rounded-[0_6px_6px_0]  ${lineChart ? " bg-[#087BB3]/10 border-[#087BB3]/10" : " border-gray-300"}`} onClick={() => setLineChart(true)} aria-label="chart toggle">
                                    <svg className={`${lineChart ? "stroke-[#087BB3]" : "stroke-[#63716E]"}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M2.5 12.5V13.9998C2.5 14.9333 2.5 15.3996 2.68166 15.7562C2.84144 16.0698 3.09623 16.3252 3.40983 16.485C3.766 16.6665 4.23249 16.6665 5.16409 16.6665H17.5002M2.5 12.5V4.1665M2.5 12.5L5.71116 9.82406L5.71382 9.82193C6.29472 9.33784 6.58573 9.09533 6.90129 8.99683C7.27406 8.88046 7.67559 8.89887 8.0363 9.0485C8.34208 9.17536 8.61021 9.44349 9.14647 9.97974L9.15185 9.98512C9.69643 10.5297 9.96944 10.8027 10.2801 10.9293C10.6478 11.0791 11.0571 11.092 11.4339 10.967C11.7534 10.861 12.0452 10.6061 12.6286 10.0956L17.5 5.83317" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="border border-[#E2E8F0] rounded-[6px] flex items-center">
                            <button className="px-2.5 py-2 border-r border-[#E2E8F0] text-xs font-medium text-[#809FB8]">Received Tickets</button>
                            <button className="px-2.5 py-2 border-r border-[#E2E8F0] text-xs font-medium text-[#809FB8]">Completed Tickets</button>
                            <button className="px-2.5 py-2 border-r border-[#E2E8F0] text-xs font-medium text-[#809FB8]">Assigned Tickets</button>
                            <button className="px-2.5 py-2 text-xs font-medium text-[#809FB8]">Stuck Tickets</button>
                        </div>
                    </div>
                    <div className="py-4 w-full">
                        {lineChart ? (
                            <LineChart
                                data={lineChartData}

                            />

                        ) : (
                            <BarChart data={TicketsbyStage} height="300px" ShowAllLabels={true} barwidth="100%" />
                        )}
                    </div>
                </div>
            </div>


        </>
    );
}
