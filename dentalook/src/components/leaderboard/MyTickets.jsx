import { useEffect, useState } from "react";
import TablePagination from "../Tablepagination";

export default function Mytickets() {
    const [data, setData] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    useEffect(() => {
        fetch('/data/mytickets.json')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();

            })
            .then(json => {
                setData(json.mytickets)
            })
    }, [])



    const totalItems = data.length
    const totalPages = Math.ceil(totalItems / rowsPerPage)

    const startIndex = (currentPage - 1) * rowsPerPage
    const endIndex = startIndex + rowsPerPage
    const currentData = data.slice(startIndex, endIndex)



    const Header = [
        "Ticket Name", "Date Added", "Department", "Status", "Days Open"
    ]
    return (
        <>
            <div className="w-full p-8 rounded-[16px] border border-[#E2E8F0] bg-white">
                <div>
                    <h2 className="text-xl/6 font-semibold text-[#333]">Submitted By Me</h2>
                    <p className="text-[11px] text-[#63716E] mt-1">Tickets that you have submitted </p>
                </div>
                <div className='py-4 overflow-x-auto'>

                    <table className="w-full font-['DM_Sans'] ">
                        <thead>
                            <tr className=' border-b border-[#E5E6E6]'>
                                {Header.map((col, index) => (
                                    <th key={index} className='px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap '>
                                        <div className={`flex items-center  gap-1 ${index === 0 ? "justify-start" : "justify-center"} `}>
                                            <span className=' '>{col}</span>
                                            <span>
                                                <svg xmlns="http:www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M6.21604 8.20801C6.35204 8.20801 6.45604 8.16401 6.52804 8.07601L9.67204 4.69201C9.75204 4.61201 9.79004 4.51201 9.78604 4.39201C9.78204 4.27201 9.73804 4.17201 9.65404 4.09201C9.57004 4.01201 9.46804 3.97201 9.34804 3.97201C9.22804 3.97201 9.12804 4.01601 9.04804 4.10401L6.21604 7.15201L3.38404 4.10401C3.30404 4.01601 3.20404 3.97201 3.08404 3.97201C2.96404 3.97201 2.86204 4.01201 2.77804 4.09201C2.69404 4.17201 2.65004 4.27201 2.64604 4.39201C2.64204 4.51201 2.68004 4.61201 2.76004 4.69201L5.90404 8.07601C5.99204 8.16401 6.09604 8.20801 6.21604 8.20801Z" fill="#0A0E1A" />
                                                </svg>
                                            </span>
                                        </div>
                                    </th>
                                ))}

                            </tr>

                        </thead>
                        <tbody>
                            {currentData.map((tdata, index) => (
                                <tr key={index} className=' border-b border-[#E5E6E6]'>
                                    <td className='px-6 py-4 whitespace-nowrap text-start text-xs font-medium text-[#333] '>
                                        <div className="flex items-center gap-2">
                                            <span>
                                                <svg className={`${tdata.status === "Received" && "fill-[#2F80ED]"} ${tdata.status === "Assigned" && "fill-[#FF5C00]"}
                                                     ${tdata.status === "Stuck" && "fill-[#800000]"} ${tdata.status === "Completed" && "fill-[#339D5C]"}
                                                    `} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M5.94002 18.9901H15C15.65 18.9901 16.26 18.6801 16.63 18.1501L20.58 12.5801C20.702 12.4113 20.7677 12.2083 20.7677 12.0001C20.7677 11.7918 20.702 11.5889 20.58 11.4201L16.62 5.84007C16.439 5.57855 16.1967 5.36529 15.9143 5.21888C15.632 5.07247 15.3181 4.99735 15 5.00007H5.94002C5.13002 5.00007 4.66002 5.93007 5.13002 6.59007L9.00002 12.0001L5.13002 17.4101C4.66002 18.0701 5.13002 18.9901 5.94002 18.9901Z" />
                                                </svg>
                                            </span>
                                            <span>{tdata.ticketName}</span>
                                        </div>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap text-center text-xs text-[#333]'>{tdata.dateAdded}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-center text-xs text-[#333]'>
                                        {tdata.department}
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap text-center w-full'>
                                        <span className={`px-7 py-1  rounded-[8px]  text-xs  w-full ${tdata.status === "Received" ? "bg-[rgba(47,128,237,0.10)] text-[#2F80ED]" : tdata.status === "Assigned" ? "bg-[rgba(255,92,0,0.10)] text-[#FF5C00]" : tdata.status === "Stuck" ? "bg-[rgba(235,87,87,0.10)] text-[#EB5757]" : "bg-[rgba(51,157,92,0.10)]  text-[#339D5C]"} `}>
                                            {tdata.status}
                                        </span>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap text-center w-[121px] '>
                                        <span className='px-7 py-1 block rounded-[8px]  bg-[rgba(231,231,231,0.50)] text-xs text-[#C9C9C9] '>
                                            {tdata.daysOpen}
                                        </span>
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>
                <TablePagination
                    currentPage={currentPage}
                    totalItems={totalItems}
                    rowsPerPage={rowsPerPage}
                    onPageChange={setCurrentPage}
                    onRowsPerPageChange={setRowsPerPage}
                />

            </div>
        </>
    )
}