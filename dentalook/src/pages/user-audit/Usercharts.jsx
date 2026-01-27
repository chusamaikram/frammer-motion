import DonutChart from '../../components/charts/DonutChart'
import React from 'react'

const Usercharts = () => {



    const roleWiseLogins = [
        {
            name: "Provider",
            value: 98,
            color: "#2871FF", 
        },
        {
            name: "Practice Manager",
            value: 72,
            color: "#FF9502", 
        },
        {
            name: "Support Team",
            value: 42,
            color: "#64CB98", 
        },
        {
            name: "Leadership",
            value: 28,
            color: "#34B3F1", 
        },
    ];
    const loginActivityAging = [
        {
            name: "0–3 days",
            value: 25,
            color: "#2871FF",
        },
        {
            name: "4–8 days",
            value: 27,
            color: "#FF9502",
        },
        {
            name: "8–14 days",
            value: 21,
            color: "#64CB98",
        },
        {
            name: "15–30 days",
            value: 30,
            color: "#34B3F1",
        },
    ];


    return (
        <div>
            <div className='w-full mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className="p-4 sm:p-8 rounded-[16px] bg-white border border-[#E2E8F0]">
                    <h4 className="text-lg/8 font-bold font-['Roboto'] text-[#17181A] pb-4 border-b border-[#E2E8F0]">Login by Regions</h4>
                    <div className="mt-4 flex items-center justify-center w-full">
                        <DonutChart
                            title='Login by Regions'
                            data={roleWiseLogins}
                            centerlabel='Logins'
                            showLegend
                        />
                    </div>
                </div>
                <div className="p-4 sm:p-8 rounded-[16px] bg-white border border-[#E2E8F0]">
                    <h4 className="text-lg/8 font-bold font-['Roboto'] text-[#17181A] pb-4 border-b border-[#E2E8F0]">Login by Province</h4>
                    <div className="mt-4 flex items-center justify-center">

                        <DonutChart
                            title='Login by Province'
                            data={loginActivityAging}
                            centerlabel='Logins'
                            showLegend
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Usercharts
