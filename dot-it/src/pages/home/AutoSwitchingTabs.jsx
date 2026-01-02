// import { useEffect, useState } from "react"
// import TabsData from "../../components/TabsData";
// import RevenueTeams from "../../assets/images/revenue-teams.webp"
// import CustomerSuccess from "../../assets/images/customer-success.webp"
// import Leadership from "../../assets/images/leadership.webp"
// import Operations from "../../assets/images/operations.webp"

// export default function AutoSwitchingTabs() {

//     const [active, setActive] = useState(0)


//     const TabsButton = ["Revenue Teams", "Customer Success", "Operations", "Leadership"]

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActive((prev) => (prev + 1) % TabsButton.length);
//         }, 4000);

//         return () => clearInterval(interval);
//     }, []);

//     return (

//         <>
//             <section className="py-8 sm:py-20 bg-[#E6EFFA]">
//                 <div className="container">
//                     <div className="overflow-x-auto ">
//                         <div className="w-fit min-w-max mx-auto bg-[#F9FAFB] rounded-full border border-[#F2F4F7]  p-2">
//                             <ul className="flex items-center justify-center gap-2 ">
//                                 {TabsButton.map((btn, index) => (
//                                     <li key={index} className={`py-2 px-3 rounded-full flex items-center justify-center text-base font-semibold leading-6  ${active === index ? "text-[#012246]  bg-white" : "text-[#667085]"} `}>
//                                         <button className=" cursor-pointer "
//                                             onClick={() => setActive(index)}>{btn}</button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                     {active === 0 && (
//                         <TabsData
//                             heading="Revenue Teams"
//                             desc="Automate data capture, email follow ups and CRM updates so reps can focus more on selling, all in one place."
//                             img={RevenueTeams}
//                             width={583}
//                             height={517} />
//                     )}
//                     {active === 1 && (
//                         <TabsData
//                             heading="Customer Success"
//                             desc="Keep every client interaction logged and insights actionable., so you can easily anticipate, track touchpoints, and deliver seamless service."
//                             img={CustomerSuccess}
//                             width={448}
//                             height={490} />
//                     )}

//                     {active === 2 && (
//                         <TabsData
//                             heading="Operations"
//                             desc="Optimize your operations with clean, connected data. dot.it cuts the manual steps and gives you dependable reporting and planning at your fingertips."
//                             img={Operations}
//                             width={455}
//                             height={490} />
//                     )}
//                     {active === 3 && (

//                         <TabsData
//                             heading="Leadership"
//                             desc="Have complete visibility into your team’s pipeline, performance, and forecasting with data you can use to drive decisions that sharpen your strategy for sustained growth."
//                             img={Leadership}
//                             width={453}
//                             height={490} />
//                     )}


//                 </div>
//             </section>
//         </>
//     )
// }

import { useEffect, useState } from "react";
import TabsData from "../../components/TabsData";
import RevenueTeams from "../../assets/images/revenue-teams.webp";
import CustomerSuccess from "../../assets/images/customer-success.webp";
import Leadership from "../../assets/images/leadership.webp";
import Operations from "../../assets/images/operations.webp";

export default function AutoSwitchingTabs() {
    const [active, setActive] = useState(0);

    const TabsButton = [
        "Revenue Teams",
        "Customer Success",
        "Operations",
        "Leadership",
    ];

    const tabsContent = [
        {
            heading: "Revenue Teams",
            desc: "Automate data capture, email follow ups and CRM updates so reps can focus more on selling, all in one place.",
            img: RevenueTeams,
            width: 583,
            height: 517,
        },
        {
            heading: "Customer Success",
            desc: "Keep every client interaction logged and insights actionable, so you can easily anticipate, track touchpoints, and deliver seamless service.",
            img: CustomerSuccess,
            width: 448,
            height: 490,
        },
        {
            heading: "Operations",
            desc: "Optimize your operations with clean, connected data. dot.it cuts the manual steps and gives you dependable reporting and planning at your fingertips.",
            img: Operations,
            width: 455,
            height: 490,
        },
        {
            heading: "Leadership",
            desc: "Have complete visibility into your team’s pipeline, performance, and forecasting with data you can use to drive decisions that sharpen your strategy for sustained growth.",
            img: Leadership,
            width: 453,
            height: 490,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % TabsButton.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-8 sm:py-20 bg-[#E6EFFA]">
            <div className="container">
                <div className="overflow-x-auto">
                    <div className="w-fit min-w-max mx-auto bg-[#F9FAFB] rounded-full border border-[#F2F4F7] p-2">
                        <ul className="flex items-center gap-2">
                            {TabsButton.map((btn, index) => (
                                <li
                                    key={index}
                                    className={`py-2 px-3 rounded-full font-semibold transition-colors duration-300
                                    ${active === index
                                            ? "text-[#012246] bg-white"
                                            : "text-[#667085]"
                                        }`}
                                >
                                    <button onClick={() => setActive(index)}>
                                        {btn}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

               
                <TabsData
                    key={active}  
                    {...tabsContent[active]}
                />
            </div>
        </section>
    );
}
