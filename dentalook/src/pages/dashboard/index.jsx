


import { useState } from "react";
import { Link } from "react-router";
import FilterFields from "../../components/Filters";
import DonutChart from "../../components/charts/DonutChart";
import BarChart from "../../components/charts/Barchart";
import TicketsByStageSection from "./TicketsByStageSection";
import ResolutionTimeByDepartment from "./ResolutionTimeByDepartment";

export default function Dashboard() {



    const [chartType, setChartType] = useState({});

    const handleChartTypeChange = (index, type) => {
        setChartType((prev) => ({
            ...prev,
            [index]: type,
        }));
    };


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
                                    <BarChart data={chart.data} height="300px" />
                                ) : (

                                    <DonutChart
                                        title={chart.title}
                                        data={chart.data} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <TicketsByStageSection />

                <ResolutionTimeByDepartment />

            </div >


        </>
    );
}
