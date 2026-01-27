import React, { useState } from "react";
import TicketModel from "./TicketModel";
import TablePagination from "../Tablepagination";

// Reusable table component
export default function Table({ data, status }) {

  const [menuOpen, setMenuOpen] = useState({})

  const [modelOpen, setModelOpen] = useState(false)

  const [ticketDetails, setticketDetails] = useState({
    name: "",
    submitBy: "",
    department: "",
    clinic: "",
  })
  /* pagination */
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(5)



  const toggleMenu = (idx) => {
    setMenuOpen((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const handleRowClick = (row) => {
    setticketDetails({
      name: row.ticket,
      submitBy: row.submittedBy,
      department: row.department,
      clinic: row.clinic,
    });

    setModelOpen(true);
  };
  /*pagination controller */

  const totalItems = data.length
  const totalPages = Math.ceil(totalItems / rowsPerPage)

  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const currentData = data.slice(startIndex, endIndex)


  return (
    <>
      <div className="w-full bg-white overflow-x-auto ">
        <table className="min-w-max  ">
          <thead className="bg-[#F7F7F7]">
            <tr className="">
              <th className="px-7 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Ticket Name</th>
              <th className="px-7 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Date Added</th>
              <th className="px-7 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Submitted By</th>
              <th className="px-7 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">RM</th>
              <th className="px-7 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Clinic</th>
              <th className="px-7 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Department</th>
              <th className="px-7 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Assignee</th>
              <th className="px-7 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Deadline</th>
              <th className="px-7 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Days Open</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentData.map((row, idx) => (
              <tr
                onClick={() => handleRowClick(row)}
                key={idx}
                className="hover:bg-gray-50 transition cursor-pointer">
                <td className="px-7 py-3 text-sm text-gray-700  ">
                  <div className="flex items-center gap-2">
                    <span>
                      <svg className={`${status === "received" ? "fill-[#2F80ED]" : status === "assigned" ? "fill-[#FF5C00]" :
                        status === "stuck" ? "fill-[#800000]" : "fill-[#339D5C]"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.94002 18.9901H15C15.65 18.9901 16.26 18.6801 16.63 18.1501L20.58 12.5801C20.702 12.4113 20.7677 12.2083 20.7677 12.0001C20.7677 11.7918 20.702 11.5889 20.58 11.4201L16.62 5.84007C16.439 5.57855 16.1967 5.36529 15.9143 5.21888C15.632 5.07247 15.3181 4.99735 15 5.00007H5.94002C5.13002 5.00007 4.66002 5.93007 5.13002 6.59007L9.00002 12.0001L5.13002 17.4101C4.66002 18.0701 5.13002 18.9901 5.94002 18.9901Z" />
                      </svg>
                    </span>
                    {row.ticket}
                  </div>
                </td>
                <td className="px-7 py-3 text-sm text-gray-700 ">{row.date}</td>
                <td className="px-7 py-3 text-sm text-gray-700 ">{row.submittedBy}</td>
                <td className="px-7 py-3 text-sm text-gray-700">{row.rm}</td>
                <td className="px-7 py-3 text-sm text-gray-700">{row.clinic}</td>
                <td className="px-7 py-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="">
                      <svg className={`${status === "received" ? "fill-[#2F80ED]" : status === "assigned" ? "fill-[#FF5C00]" : status === "stuck" ? "fill-[#800000]" : "fill-[#339D5C]"}`} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M9.91499 4.3499L7.64999 2.0849C7.17499 1.6099 6.51999 1.3549 5.84999 1.3899L3.34999 1.5099C2.34999 1.5549 1.55499 2.3499 1.50499 3.3449L1.38499 5.8449C1.35499 6.5149 1.60499 7.1699 2.07999 7.6449L4.34499 9.9099C5.27499 10.8399 6.78499 10.8399 7.71999 9.9099L9.91499 7.7149C10.85 6.7899 10.85 5.2799 9.91499 4.3499ZM4.74999 6.1899C3.95499 6.1899 3.30999 5.5449 3.30999 4.7499C3.30999 3.9549 3.95499 3.3099 4.74999 3.3099C5.54499 3.3099 6.18999 3.9549 6.18999 4.7499C6.18999 5.5449 5.54499 6.1899 4.74999 6.1899Z" />
                      </svg></span>
                    <span>{row.department}</span>
                  </div>
                </td>
                <td className="px-7 py-3 text-sm text-gray-700">
                  <div className="flex -space-x-2 items-center">
                    {row.assignee.length === 0 ?
                      <span className="text-xs/4 text-[#9ca3af]"> Not assigned</span>
                      :
                      <img
                        src={row.assignee[0].img}
                        alt="assignee"
                        className="h-7.5 w-7.5 rounded-full border-2 border-white"
                      />
                    }

                    {row.assignee.length > 1 && (
                      <div className="flex h-7.5 w-7.5 items-center justify-center rounded-full border-2 border-white bg-[#F2F2F2] text-xs text-[#636E72] font-extrabold">
                        +{row.assignee.length - 1}
                      </div>
                    )}
                    <div className="relative">
                      <button onClick={(e) => { e.stopPropagation(); toggleMenu(idx) }} className="cursor-pointer ms-3 flex h-6.5 w-6.5 items-center justify-center rounded-full border border-[#BDBDBD] text-xs text-[#BDBDBD]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M10.9112 5.09187H6.54669V0.72741C6.54669 0.534489 6.47005 0.349469 6.33364 0.213054C6.19722 0.0766378 6.0122 0 5.81928 0C5.62636 0 5.44134 0.0766378 5.30492 0.213054C5.16851 0.349469 5.09187 0.534489 5.09187 0.72741V5.09187H0.72741C0.534489 5.09187 0.349469 5.16851 0.213054 5.30492C0.0766378 5.44134 0 5.62636 0 5.81928C0 6.0122 0.0766378 6.19722 0.213054 6.33364C0.349469 6.47005 0.534489 6.54669 0.72741 6.54669H5.09187V10.9112C5.09187 11.1041 5.16851 11.2891 5.30492 11.4255C5.44134 11.5619 5.62636 11.6386 5.81928 11.6386C6.0122 11.6386 6.19722 11.5619 6.33364 11.4255C6.47005 11.2891 6.54669 11.1041 6.54669 10.9112V6.54669H10.9112C11.1041 6.54669 11.2891 6.47005 11.4255 6.33364C11.5619 6.19722 11.6386 6.0122 11.6386 5.81928C11.6386 5.62636 11.5619 5.44134 11.4255 5.30492C11.2891 5.16851 11.1041 5.09187 10.9112 5.09187Z" fill="#BDBDBD" />
                        </svg>
                      </button>
                      {menuOpen[idx] &&
                        <div className="absolute z-50 min-w-30 max-h-48 overflow-y-auto bg-white rounded-lg shadow-lg top-full -left-1/2">
                          {row.assignee.map((assign, index) => (
                            <button key={index} className="block w-full cursor-pointer px-3 py-2 text-xs text-left hover:bg-gray-50">{assign.name}</button>
                          ))}
                        </div>
                      }

                    </div>

                  </div>
                </td>
                <td className="px-7 py-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.8334 8.83333C13.8334 12.0533 11.2201 14.6667 8.00008 14.6667C4.78008 14.6667 2.16675 12.0533 2.16675 8.83333C2.16675 5.61333 4.78008 3 8.00008 3C11.2201 3 13.8334 5.61333 13.8334 8.83333Z" stroke="#8B909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8 5.33325V8.66659" stroke="#8B909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6 1.33325H10" stroke="#8B909C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </span>

                    {row.deadline}
                  </div>
                </td>
                <td className="px-7 py-3 text-sm text-gray-700">{row.daysOpen}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div >
      <div className="px-8">
        <TablePagination
          currentPage={currentPage}
          totalItems={totalItems}
          rowsPerPage={rowsPerPage}
          onPageChange={setCurrentPage}
          onRowsPerPageChange={setRowsPerPage}
        />
      </div>
      {modelOpen &&
        < div className="fixed inset-0 bg-black/60 z-80 ">
          <div className="mx-auto my-4 max-w-6xl w-full bg-white h-[calc(100vh-30px)] relative  rounded-lg shadow-lg ">
            <div className="sticky top-4 rounded-[8px_8px_0_0] left-0 z-50 bg-white flex items-center justify-between w-full py-5 px-6 mb-5 border-b border-[#E5E6E6] ">
              <h2 className="text-base/5 font-semibold text-[#333]">{ticketDetails.name}</h2>
              <div className="flex items-center gap-4">
                <button className=" whitespace-nowrap text-[11px] leading-normal ff_inter font-semibold bg-[#339D5C1A] py-[5px] px-2 rounded-[15px] border text-[#339D5C] border-[#339D5C] cursor-pointer hover:text-[#2a7a4a]">Mark as Complete</button>
                <button onClick={() => setModelOpen(false)} className="cursor-pointer text-gray-500 text-lg hover:text-gray-800">X</button>
              </div>
            </div>
            <div className="">
              <TicketModel ticketDetails={ticketDetails} />
            </div>
          </div>
        </div >
      }
    </>
  );
}


