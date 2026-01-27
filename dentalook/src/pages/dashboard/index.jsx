import { useState } from "react"
import FilterFields from "../../components/Filters"
import { Link } from "react-router"
import TicketsTable from "../../components/dashboard/TicketsTable"

export default function Dashboard() {

    const [viewTickets, setViewTickets] = useState("all")



    const Categories = [
        {
            name: "All tickets",
            label: "all",
            value: "44",
        },
        {
            name: "Received tickets",
            label: "received",
            value: "8",
            bgcolor: "bg-[#2F80ED]"
        },
        {
            name: "Assigned tickets",
            label: "assigned",
            value: "16",
            bgcolor: "bg-[#FF5C00]"
        },
        {
            name: "Stuck tickets",
            label: "stuck",
            value: "5",
            bgcolor: "bg-[#800000]"
        },
        {
            name: "Completed tickets",
            label: "completed",
            value: "15",
            bgcolor: "bg-[#339D5C]"
        },
    ]

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


    const filteredCategories =
        viewTickets === "all"
            ? Categories.slice(1)
            : Categories.filter(cat => cat.label === viewTickets);
    return (

        <>
            <div className="w-full">
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
                    <div className="">
                        <FilterFields
                            heading="Service Desk Deshboard"
                            showInput={false}
                        />
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
                        {TicketCards.map((card, index) => (
                            <div key={index} className="w-full border border-[#E2E8F0] rounded-lg p-4 bg-white duration-200 shadow-sm flex flex-col items-start gap-3">
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

                <div className="mt-8 mb-4 px-4 py-2 bg-[#FDFDFD] border border-[#E2E8F0] rounded-md">
                    <div className="flex items-center justify-between overflow-x-auto ">
                        {Categories.map((cat) => (
                            <div key={cat.label}
                                onClick={() => setViewTickets(cat.label)}
                                className={`w-full cursor-pointer px-3 py-2 flex flex-col md:flex-row items-center justify-center gap-4 w-full rounded-sm text-sm/5 font-medium ${viewTickets === cat.label ? "text-[#0F172A] shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] bg-white " : "text-[#64748B] hover:text-[#0F172A]"} `}>
                                {cat.name}
                                <div className={`w-6 h-6  rounded-full flex items-center justify-center text-xs font-medium ${cat.label === "all" ? "text-[#0F172A]" : "text-white "} ${cat.bgcolor} `}>{cat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4 w-full">
                    {filteredCategories.map(item => (
                        <div key={item.label} className="w-full">
                            <TicketsTable
                                color={item.bgcolor}
                                TicketType={item.name}
                            />
                        </div>
                    ))}
                </div>

            </div>

        </>
    )
}