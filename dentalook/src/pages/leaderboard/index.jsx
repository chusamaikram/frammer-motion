import { useEffect, useState } from "react"
import FilterFields from "../../components/Filters"
import { DepartmentIcon, MyTicketIcon, OperationsIcon } from "../../assets/svg"
import TableCard from "../../components/leaderboard/TableCard"
import Mytickets from "../../components/leaderboard/MyTickets"

export default function Leaderboard() {

    const [tabView, setTabView] = useState("operations")

    const [data, setData] = useState({
        provinceData: [],
        regionalData: [],
        clinicData: [],
        departmentData: []

    });

    useEffect(() => {
        fetch('/data/operations.json')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(json => {
                console.log('api response', json); // log raw response
                setData({
                    provinceData: json.operationsView.provinceView,
                    regionalData: json.operationsView.regionalManagersOverview,
                    clinicData: json.operationsView.clinicsOverview,
                    departmentData: json.operationsView.DepartmentView
                });
            })
            .catch(err => console.error('fetch failed', err));
    }, []);





    const Tabs = [
        {
            id: "operations",
            label: "Operations View",
            icon: <OperationsIcon tabView={tabView} />
        },
        {
            id: "department",
            label: "Department View",
            icon: <DepartmentIcon tabView={tabView} />
        },
        {
            id: "my",
            label: "My Tickets",
            icon: <MyTicketIcon tabView={tabView} />
        },
    ]
    return (
        <>
            <div className="w-full ">
                <div className="w-full">
                    <FilterFields
                        heading="Leaderboard" />
                </div>

                    <div className="grid grid-cols-3 gap-5 my-4 ">
                        {Tabs.map((tab) => (
                            <button key={tab.id}
                                onClick={() => setTabView(tab.id)} >
                                <div className={` ${tabView === tab.id ? "bg-[rgba(8,123,179,0.05)]" : "bg-white "} cursor-pointer p-4 border border-[#E2E8F0] rounded-[16px] flex flex-col sm:flex-row items-center gap-3 w-full h-full`}>
                                    <span className={`w-9 h-9 flex  items-center justify-center rounded-[8px] ${tabView === tab.id ? "bg-[#087BB3]" : "bg-[#F7F7F7]"}`}>{tab.icon}</span>
                                    <p className="text-sx text-[#63716E] font-['DM_Sans']">{tab.label}</p>
                                </div>
                            </button>
                        ))}

                    </div>
                {tabView === "operations" ?
                    <>

                        <div className="mt-4">
                            <TableCard
                                heading="Province View"
                                desc="Tickets resolution performance by province"
                                status="province"
                                data={data.provinceData} />
                        </div>
                        <div className="mt-4">
                            <TableCard
                                heading="Region Overview"
                                desc="Tickets submission and resolution status by region"
                                status="region"
                                data={data.regionalData} />
                        </div>
                        <div className="mt-4">
                            <TableCard
                                heading="Clinics Overview"
                                desc="Tickets submission and resolution status by region"
                                status="clinic"
                                data={data.clinicData} />
                        </div>
                    </>
                    :
                    tabView === "department" ?
                        <>
                            <div className="my-4">
                                <TableCard
                                    heading="Department View"
                                    desc="Tickets resolution performance by department"
                                    status="department"
                                    data={data.departmentData}
                                />
                            </div>
                            <TableCard
                                heading="Agent View"
                                desc="Tickets resolution performance by agent"
                                status="department"
                                data={data.departmentData}
                                agent
                            />
                        </>
                        :
                        <div className="mt-4">
                            <Mytickets />
                        </div>
                }
            </div>
        </>
    )
}