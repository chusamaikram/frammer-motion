
import React, { useState } from 'react'
import Table from './Table'


const TicketsData = [
    {
        status: "received",
        Tabledata: [
            {
                ticket: "Project X dashboard UI prototype ",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                assignee: [

                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
            {
                ticket: "Project X dashboard UI prototype",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                  assignee: [

                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
            {
                ticket: "Project X dashboard UI prototype",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                  assignee: [

                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
        ]
    },
    {
        status: "assigned",
        Tabledata: [
            {
                ticket: "Project X dashboard UI prototype ",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                  assignee: [
                    {
                        name: "Surya Rana",
                        img: "https://i.pravatar.cc/100?img=1",
                    },
                    {
                        name: "Nicole Li",
                        img: "https://i.pravatar.cc/100?img=2",
                    },
                    {
                        name: "Mazahreh",
                        img: "https://i.pravatar.cc/100?img=2",
                    },

                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
            {
                ticket: "Project X dashboard UI prototype",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                  assignee: [
                    {
                        name: "Surya Rana",
                        img: "https://i.pravatar.cc/100?img=1",
                    },
                    {
                        name: "Nicole Li",
                        img: "https://i.pravatar.cc/100?img=2",
                    },
                    {
                        name: "Mazahreh",
                        img: "https://i.pravatar.cc/100?img=2",
                    },

                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
            {
                ticket: "Project X dashboard UI prototype",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                  assignee: [
                    {
                        name: "Surya Rana",
                        img: "https://i.pravatar.cc/100?img=1",
                    },
                    
                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
        ]
    },
    {
        status: "stuck",
        Tabledata: [
            {
                ticket: "Project X dashboard UI prototype ",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                  assignee: [
                   
                    {
                        name: "Nicole Li",
                        img: "https://i.pravatar.cc/100?img=2",
                    },
                    {
                        name: "Mazahreh",
                        img: "https://i.pravatar.cc/100?img=2",
                    },

                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
            {
                ticket: "Project X dashboard UI prototype",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                  assignee: [
                    {
                        name: "Surya Rana",
                        img: "https://i.pravatar.cc/100?img=1",
                    },
                    {
                        name: "Nicole Li",
                        img: "https://i.pravatar.cc/100?img=2",
                    },
                    {
                        name: "Mazahreh",
                        img: "https://i.pravatar.cc/100?img=2",
                    },

                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
            {
                ticket: "Project X dashboard UI prototype",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                  assignee: [
                    {
                        name: "Mazahreh",
                        img: "https://i.pravatar.cc/100?img=2",
                    },

                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
        ]
    },
    {
        status: "completed",
        Tabledata: [
            {
                ticket: "Project X dashboard UI prototype ",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                 assignee: [
                    {
                        name: "Surya Rana",
                        img: "https://i.pravatar.cc/100?img=1",
                    },
                    {
                        name: "Nicole Li",
                        img: "https://i.pravatar.cc/100?img=2",
                    },
                    {
                        name: "Mazahreh",
                        img: "https://i.pravatar.cc/100?img=2",
                    },

                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
            {
                ticket: "Project X dashboard UI prototype",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                  assignee: [
                    {
                        name: "Surya Rana",
                        img: "https://i.pravatar.cc/100?img=1",
                    },
                    {
                        name: "Nicole Li",
                        img: "https://i.pravatar.cc/100?img=2",
                    },

                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
            {
                ticket: "Project X dashboard UI prototype",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                  assignee: [
                    {
                        name: "Surya Rana",
                        img: "https://i.pravatar.cc/100?img=1",
                    },
                   
                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
            {
                ticket: "Project X dashboard UI prototype ",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                 assignee: [
                    {
                        name: "Surya Rana",
                        img: "https://i.pravatar.cc/100?img=1",
                    },
                    {
                        name: "Nicole Li",
                        img: "https://i.pravatar.cc/100?img=2",
                    },
                    {
                        name: "Mazahreh",
                        img: "https://i.pravatar.cc/100?img=2",
                    },

                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
            {
                ticket: "Project X dashboard UI prototype",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                  assignee: [
                    {
                        name: "Surya Rana",
                        img: "https://i.pravatar.cc/100?img=1",
                    },
                    {
                        name: "Nicole Li",
                        img: "https://i.pravatar.cc/100?img=2",
                    },

                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
            {
                ticket: "Project X dashboard UI prototype",
                date: "Fri Aug 15",
                submittedBy:"Usama Ikram",
                rm: "Mandi",
                clinic: "67th Streat Dental",
                department: "HR",
                  assignee: [
                    {
                        name: "Surya Rana",
                        img: "https://i.pravatar.cc/100?img=1",
                    },
                   
                ],
                deadline: "15th July 2025",
                daysOpen: "12 Days",
            },
        ]
    },



];

const TicketsTable = (props) => {
    const [openTable, SetOpenTable] = useState(false)

    const statusKey = props.TicketType.split(" ")[0].toLowerCase();

    const tableSection = TicketsData.find(
        item => item.status === statusKey
    );



    return (
        <div className={` bg-white border border-[#E5E7EE] rounded-md shadow-[0_0_9px_0_rgba(100,100,117,0.05)] w-full `}>
            <div onClick={() => SetOpenTable(!openTable)} className='px-7 py-4 w-full cursor-pointer flex items-center gap-4 hover:bg-gray-50'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#8B909C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className={`lucide lucide-chevron-right-icon lucide-chevron-right transition-all duration-200 ${openTable ? "rotate-90" : "rotate-0"}`}><path d="m9 18 6-6-6-6" /></svg>
                </span>
                <div className='w-full flex items-center gap-2'>
                    <div className={`w-3 h-3 rounded-full flex items-center justify-center ${props.color}`}></div>
                    <h4 className='text-lg font-semibold text-[#0F172B]'>{props.TicketType}</h4>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium ${props.color}`}>{tableSection.Tabledata.length}</div>
                </div>
            </div>
            {openTable &&
                <div className={` py-4 w-full transition-all duration-200  ${openTable ? "h-auto" : "h-0"}`}>
                    <Table data={tableSection?.Tabledata || []} status={statusKey} />
                </div>
            }

        </div>

    )
}

export default TicketsTable
