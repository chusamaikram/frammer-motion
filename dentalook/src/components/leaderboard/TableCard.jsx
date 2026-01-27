

import React, { useEffect, useState } from 'react'
import TablePagination from '../Tablepagination'


const TableCard = ({ status, heading, desc, data, agent = false }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const totalItems = data.length
    const totalPages = Math.ceil(totalItems / rowsPerPage)

    const startIndex = (currentPage - 1) * rowsPerPage
    const endIndex = startIndex + rowsPerPage
    const currentData = data.slice(startIndex, endIndex)

    const Header = ["Total", "Received", "Assigned", "Stuck", "Completed", "Resolution Time (Days)"
    ]


    return (
        <>

            <div className="w-full p-8 rounded-[16px] border border-[#E2E8F0] bg-white font-['DM_Sans']">
                <div>
                    <h2 className="text-xl/6 font-semibold text-[#333]">{heading}</h2>
                    <p className="text-[11px] text-[#63716E] mt-1">{desc} </p>
                </div>
                <div className='py-4 overflow-x-auto'>

                    <table className="w-full font-['DM_Sans'] ">
                        <thead>
                            <tr className=' border-b border-[#E5E6E6]'>
                                {agent &&
                                    <th className='px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap '>
                                        <div className={`flex items-center  gap-1 justify-start `}>
                                            <span>Agent</span>
                                            <span>
                                                <svg xmlns="http:www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M6.21604 8.20801C6.35204 8.20801 6.45604 8.16401 6.52804 8.07601L9.67204 4.69201C9.75204 4.61201 9.79004 4.51201 9.78604 4.39201C9.78204 4.27201 9.73804 4.17201 9.65404 4.09201C9.57004 4.01201 9.46804 3.97201 9.34804 3.97201C9.22804 3.97201 9.12804 4.01601 9.04804 4.10401L6.21604 7.15201L3.38404 4.10401C3.30404 4.01601 3.20404 3.97201 3.08404 3.97201C2.96404 3.97201 2.86204 4.01201 2.77804 4.09201C2.69404 4.17201 2.65004 4.27201 2.64604 4.39201C2.64204 4.51201 2.68004 4.61201 2.76004 4.69201L5.90404 8.07601C5.99204 8.16401 6.09604 8.20801 6.21604 8.20801Z" fill="#0A0E1A" />
                                                </svg>
                                            </span>
                                        </div>
                                    </th>
                                }
                                {status === "clinic" &&
                                    <th className='px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap '>
                                        <div className={`flex items-center  gap-1 justify-start `}>
                                            <span>Rank</span>
                                            <span>
                                                <svg xmlns="http:www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M6.21604 8.20801C6.35204 8.20801 6.45604 8.16401 6.52804 8.07601L9.67204 4.69201C9.75204 4.61201 9.79004 4.51201 9.78604 4.39201C9.78204 4.27201 9.73804 4.17201 9.65404 4.09201C9.57004 4.01201 9.46804 3.97201 9.34804 3.97201C9.22804 3.97201 9.12804 4.01601 9.04804 4.10401L6.21604 7.15201L3.38404 4.10401C3.30404 4.01601 3.20404 3.97201 3.08404 3.97201C2.96404 3.97201 2.86204 4.01201 2.77804 4.09201C2.69404 4.17201 2.65004 4.27201 2.64604 4.39201C2.64204 4.51201 2.68004 4.61201 2.76004 4.69201L5.90404 8.07601C5.99204 8.16401 6.09604 8.20801 6.21604 8.20801Z" fill="#0A0E1A" />
                                                </svg>
                                            </span>
                                        </div>
                                    </th>
                                }
                                <th className='px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap '>
                                    <div className={`flex items-center  gap-1 justify-start `}>
                                        <span className=' '>{status}</span>
                                        <span>
                                            <svg xmlns="http:www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M6.21604 8.20801C6.35204 8.20801 6.45604 8.16401 6.52804 8.07601L9.67204 4.69201C9.75204 4.61201 9.79004 4.51201 9.78604 4.39201C9.78204 4.27201 9.73804 4.17201 9.65404 4.09201C9.57004 4.01201 9.46804 3.97201 9.34804 3.97201C9.22804 3.97201 9.12804 4.01601 9.04804 4.10401L6.21604 7.15201L3.38404 4.10401C3.30404 4.01601 3.20404 3.97201 3.08404 3.97201C2.96404 3.97201 2.86204 4.01201 2.77804 4.09201C2.69404 4.17201 2.65004 4.27201 2.64604 4.39201C2.64204 4.51201 2.68004 4.61201 2.76004 4.69201L5.90404 8.07601C5.99204 8.16401 6.09604 8.20801 6.21604 8.20801Z" fill="#0A0E1A" />
                                            </svg>
                                        </span>
                                    </div>
                                </th>
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
                                    {status === "clinic" &&
                                        <td className='px-6 py-4 whitespace-nowrap text-start text-xs font-medium text-[#333] '>0{index + 1}</td>
                                    }
                                    {agent &&
                                        <td className='px-6 py-4 whitespace-nowrap text-start text-xs font-medium text-[#333] '>
                                            <div className="flex items-center gap-2">
                                                <div className='w-6 h-6 rounded-full overflow-hidden'>
                                                    <img className='object-cover w-full h-full' src={tdata.agentImage} alt={tdata.agentName} />
                                                </div>
                                                <span>{tdata.agentName}</span>
                                            </div>
                                        </td>
                                    }
                                    <td className='px-6 py-4 whitespace-nowrap text-start text-xs font-medium text-[#333] '>{status === "province" ? tdata.provinceName : status === "clinic" ? tdata.clinicName : status === "department" ? tdata.department : tdata.region}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-center text-xs text-[#333]'>{tdata.tickets?.total ?? 0}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-center'>
                                        <span className='px-7 py-1  rounded-[8px]  bg-[rgba(47,128,237,0.10)] text-xs text-[#2F80ED] w-full'>
                                            {tdata.tickets.received}
                                        </span>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap text-center'>
                                        <span className='px-7 py-1  rounded-[8px]  bg-[rgba(255,92,0,0.10)] text-xs text-[#FF5C00] w-full'>
                                            {tdata.tickets.assigned}
                                        </span>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap text-center'>
                                        <span className='px-7 py-1  rounded-[8px]  bg-[rgba(235,87,87,0.10)] text-xs text-[#EB5757] w-full'>
                                            {tdata.tickets.stuck}
                                        </span>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap text-center'>
                                        <span className='px-7 py-1  rounded-[8px]  bg-[rgba(51,157,92,0.10)] text-xs text-[#339D5C] w-full'>
                                            {tdata.tickets.completed}
                                        </span>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap text-center w-[121px] '>
                                        <span className='px-7 py-1 block rounded-[8px]  bg-[rgba(231,231,231,0.50)] text-xs text-[#C9C9C9] '>
                                            {tdata.resolutionTimeDays}
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
                    onRowsPerPageChange={setRowsPerPage} />

            </div>


        </>


    )
}

export default TableCard
