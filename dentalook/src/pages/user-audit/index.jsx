
import { useEffect, useState } from "react";
import FilterFields from "../../components/Filters";
import UserTable from "./UserTable";
import Usercharts from "./Usercharts";

export default function UserAudit() {

    const [users, setUsers] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const res = await fetch("/data/users.json");
                const data = await res.json();
                console.log(data);
                setUsers(data.employees);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        loadUsers();
    }, []);

    const UserData = [
        {
            label: "Users",
            value: "80",
            unit: "Users"
        },
        {
            label: "Logins",
            value: "3,950",
        },
        {
            label: "Avg/Users",
            value: "49.7",
            unit: "Users"
        },
        {
            label: "Leave Request",
            value: "221",
            unit: "Request"
        },
    ]
    return (
        <>
            <div className="w-full ">
                <div className="w-full">
                    <FilterFields
                        heading="Users Audit"
                        showInput
                    />
                </div>
                <div className="my-4  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {UserData.map((user) => (
                        <div key={user.label} className="bg-white p-4.25 border border-[#E2E8F0] rounded-[16px] flex flex-col items-start gap-4 justify-start font-['Urbanist']">
                            <span className="text-sm/5 font-medium capitalize text-[#757575] ">{user.label}</span>
                            <div className="flex items-baseline gap-1">
                                <p className="text-[32px]/10 font-semibold text-[#0F172B]">{user.value}</p>
                                <span className="text-xs/5 font-medium capitalize text-[#757575]">{user.unit} </span>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="p-8 bg-white border border-[#E2E8F0] rounded-[16px] w-full">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg/8 font-semibold text-[#17181A]">Employee List</h3>
                        <div className="flex items-center gap-2.5">
                            <form onSubmit={(e) => e.preventDefault()} >
                                <div className="max-w-[223px] w-full px-2.5 py-2.75 bg-[#F7F7F7] rounded-lg flex items-center gap-1.5">
                                    <button type="submit" aria-label="search button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 2.5C4.62665 2.5 2.5 4.62665 2.5 7.25C2.5 9.87335 4.62665 12 7.25 12C9.87335 12 12 9.87335 12 7.25C12 4.62665 9.87335 2.5 7.25 2.5ZM1.5 7.25C1.5 4.07436 4.07436 1.5 7.25 1.5C10.4256 1.5 13 4.07436 13 7.25C13 10.4256 10.4256 13 7.25 13C4.07436 13 1.5 10.4256 1.5 7.25Z" fill="#203430" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6089 10.6089C10.8042 10.4137 11.1208 10.4137 11.3161 10.6089L14.3536 13.6464C14.5488 13.8417 14.5488 14.1583 14.3536 14.3536C14.1583 14.5488 13.8417 14.5488 13.6464 14.3536L10.6089 11.3161C10.4137 11.1208 10.4137 10.8042 10.6089 10.6089Z" fill="#203430" />
                                        </svg>
                                    </button>
                                    <input type="text"
                                        placeholder="Search employee"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="w-full h-full text-xs font-['DM_Sans'] text-[#63716E] outline-none" />

                                </div>
                            </form>
                            <div className=" font-['DM_Sans'] relative ">
                                <button className="px-3 py-2 flex items-center gap-1 cursor-pointer">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M14.4125 3.09564C14.3355 2.91784 14.208 2.76658 14.0458 2.66068C13.8835 2.55477 13.6937 2.49891 13.5 2.50002H2.49998C2.30644 2.5004 2.11717 2.55694 1.95512 2.66277C1.79308 2.76861 1.66523 2.91919 1.58709 3.09626C1.50894 3.27332 1.48386 3.46926 1.51488 3.6603C1.54591 3.85134 1.6317 4.02928 1.76186 4.17252L1.76686 4.17814L5.99998 8.69814V13.5C5.99994 13.681 6.04902 13.8586 6.14198 14.0139C6.23494 14.1692 6.36831 14.2963 6.52785 14.3818C6.68739 14.4672 6.86714 14.5078 7.04792 14.4991C7.22869 14.4904 7.40373 14.4328 7.55436 14.3325L9.55436 12.9988C9.69146 12.9074 9.80388 12.7837 9.88162 12.6384C9.95936 12.4932 10 12.331 9.99998 12.1663V8.69814L14.2337 4.17814L14.2387 4.17252C14.3703 4.02993 14.4569 3.85176 14.4878 3.66025C14.5187 3.46873 14.4925 3.27236 14.4125 3.09564ZM9.13623 8.16127C9.04974 8.25297 9.00107 8.37396 8.99998 8.50002V12.1663L6.99998 13.5V8.50002C7.00002 8.37305 6.95176 8.25083 6.86498 8.15814L2.49998 3.50002H13.5L9.13623 8.16127Z" fill="#333333" />
                                            <path d="M14.4125 3.09564C14.3355 2.91784 14.208 2.76658 14.0458 2.66068C13.8835 2.55477 13.6937 2.49891 13.5 2.50002H2.49998C2.30644 2.5004 2.11717 2.55694 1.95512 2.66277C1.79308 2.76861 1.66523 2.91919 1.58709 3.09626C1.50894 3.27332 1.48386 3.46926 1.51488 3.6603C1.54591 3.85134 1.6317 4.02928 1.76186 4.17252L1.76686 4.17814L5.99998 8.69814V13.5C5.99994 13.681 6.04902 13.8586 6.14198 14.0139C6.23494 14.1692 6.36831 14.2963 6.52785 14.3818C6.68739 14.4672 6.86714 14.5078 7.04792 14.4991C7.22869 14.4904 7.40373 14.4328 7.55436 14.3325L9.55436 12.9988C9.69146 12.9074 9.80388 12.7837 9.88162 12.6384C9.95936 12.4932 10 12.331 9.99998 12.1663V8.69814L14.2337 4.17814L14.2387 4.17252C14.3703 4.02993 14.4569 3.85176 14.4878 3.66025C14.5187 3.46873 14.4925 3.27236 14.4125 3.09564ZM9.13623 8.16127C9.04974 8.25297 9.00107 8.37396 8.99998 8.50002V12.1663L6.99998 13.5V8.50002C7.00002 8.37305 6.95176 8.25083 6.86498 8.15814L2.49998 3.50002H13.5L9.13623 8.16127Z" fill="black" fill-opacity="0.2" />
                                        </svg>
                                    </span>
                                    <span className="text-xs font-medium text-[#333]">Filter</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.128141 0.128141C0.298995 -0.0427136 0.576005 -0.0427136 0.746859 0.128141L3.9375 3.31878L7.12814 0.128141C7.299 -0.0427136 7.57601 -0.0427136 7.74686 0.128141C7.91771 0.298995 7.91771 0.576005 7.74686 0.746859L4.24686 4.24686C4.076 4.41771 3.799 4.41771 3.62814 4.24686L0.128141 0.746859C-0.0427136 0.576005 -0.0427136 0.298995 0.128141 0.128141Z" fill="#333333" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.128141 0.128141C0.298995 -0.0427136 0.576005 -0.0427136 0.746859 0.128141L3.9375 3.31878L7.12814 0.128141C7.299 -0.0427136 7.57601 -0.0427136 7.74686 0.128141C7.91771 0.298995 7.91771 0.576005 7.74686 0.746859L4.24686 4.24686C4.076 4.41771 3.799 4.41771 3.62814 4.24686L0.128141 0.746859C-0.0427136 0.576005 -0.0427136 0.298995 0.128141 0.128141Z" fill="black" fill-opacity="0.2" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="my-4">
                        <UserTable
                            users={users}
                            onSelectionChange={(ids) => console.log("Selected:", ids)}
                            searchValue={search}
                        />

                    </div>
                </div>

                <Usercharts />

            </div>
        </>
    )
}
