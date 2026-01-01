import { useState } from "react"
import telecommunication from "../../assets/images/telecommunication.webp"
import finance from "../../assets/images/finance.webp"
import automotive from "../../assets/images/automotive.webp"
import marketResearch from "../../assets/images/market-research.webp"
import construction from "../../assets/images/construction.webp"
import legal from "../../assets/images/legal.webp"
import aviation from "../../assets/images/aviation.webp"
import consulting from "../../assets/images/consulting.webp"
import crm from "../../assets/images/crm.webp"
import { Link } from "react-router-dom"
export default function UseCaseSection() {

    const [active, setActive] = useState(1)

    const Data = [
        {
            img: finance,
            title: "Finance",
            desc: "dot.it helps wealth managers, fintech sales teams, and commercial bankers spot funding signals by unifying emails, client reviews, and portfolio conversations into one AI-driven view of deal readiness.",
        },
        {
            img: telecommunication,
            title: "Telecommunication",
            desc: "dot.it supports telecom providers selling enterprise packages by tracking every stakeholder conversation across IT, procurement, and operations to predict which accounts are ready to upgrade bandwidth or switch plans.",
        },
        {
            img: automotive,
            title: "Automotive",
            desc: "dot.it helps OEM and dealership sales teams manage fleet, EV, and supplier negotiations by consolidating buyer emails, spec changes, and follow-ups to accelerate contract decisions.",
        },
        {
            img: marketResearch,
            title: "Market Research",
            desc: "dot.it enables insights firms to manage RFPs, client interviews, and study proposals by capturing every client question and surfacing which brands are most likely to greenlight the next project.",
        },
        {
            img: construction,
            title: "Manufecturing & Construction",
            desc: "dot.it supports machinery makers, industrial suppliers, contractors, and specialty trades by organizing RFQs, bids/specs, technical clarifications, and subcontractor communications so teams can instantly identify which buyers and projects are closest to purchase.",
        },
        {
            img: legal,
            title: "Legal",
            desc: "dot.it helps law firms—especially in corporate, IP, and employment practices—track client intake conversations, contract edits, and deadlines, revealing which cases are most likely to convert or expand.",
        },
        {
            img: aviation,
            title: "Aviation",
            desc: "dot.it supports MRO, aircraft sales, and aviation services teams by unifying compliance emails, maintenance quotes, and procurement discussions to predict when operators or brokers are ready to move forward.",
        },
        {
            img: consulting,
            title: "Consulting",
            desc: "dot.it helps strategy, IT, and boutique consulting firms manage pipeline conversations, proposal revisions, and stakeholder alignment to identify which clients are primed for a new engagement.",
        },
        {
            img: crm,
            title: "Anyone using CRM + Email",
            desc: "dot.it connects CRM activity with real conversations—emails, threads, client updates—to reveal intent signals and guide reps on exactly what to do next.",
        },
    ]
    return (
        <section className=" py-10 sm:py-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-15">
                    <div className="flex flex-col l text-white bg-cover bg-center rounded-lg p-5  sm:p-10 justify-end h-full min-h-[300px] sm:h-[629px] transition-all duration-500" style={{ backgroundImage: `URL(${Data[active].img})` }}>
                        <h3 className=" text-4xl leading-11 font-semibold">Built for Every Industry</h3>
                        <p className="font-normal text-base sm:text-lg leading-6 sm:leading-7 tracking-[-0.02em] pt-4 sm:max-w-[540px]">Start with dot.it and watch every email become an opportunity and every lead a seamless sale. Embrace the future of sales management.</p>
                        <button className="w-fit mt-4 px-5 py-2.5 bg-white rounded-full text-sm font-semibold text-[#0160C9] flex items-center justify-center"><Link className="" to=''>View Use Case</Link></button>
                    </div>
                    <div className="grid grid-cols-1 ">
                        <div className="w-full">
                            {Data.map((card, index) => {
                                const isActive = active === index;

                                return (
                                    <div
                                        key={index}
                                        className={`border-b border-[#E9EAEB] rounded-xl transition-all hover:bg-gray-50 }`}
                                    >
                                        <button
                                            onClick={() => setActive(index)}
                                            className="py-4 px-4 flex items-center justify-between w-full text-xl font-medium cursor-pointer"
                                        >
                                            {card.title}
                                            <span className="text-2xl">
                                                {isActive ? "−" : "+"}
                                            </span>
                                        </button>

                                        {isActive && (
                                            <p className="px-4 pb-4 text-base text-[#414651]">
                                                {card.desc}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}