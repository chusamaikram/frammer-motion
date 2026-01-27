


import { useState } from "react";
import FilterFields from "../../components/Filters";
import DonutChart from "../../components/charts/DonutChart";
import BarChart from "../../components/charts/Barchart";
import TicketsByStageSection from "./TicketsByStageSection";
import ResolutionTimeByDepartment from "./ResolutionTimeByDepartment";

export default function Analytics() {



    const [chartType, setChartType] = useState({});

    const handleChartTypeChange = (index, type) => {
        setChartType((prev) => ({
            ...prev,
            [index]: type,
        }));
    };


    



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

            <div className="w-full  ">
                <div>
                    <FilterFields
                        heading="Service Desk Analytics"
                        desc="Monitor ticket volume, progress, and"
                    />
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 items-start h-full w-full">
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
