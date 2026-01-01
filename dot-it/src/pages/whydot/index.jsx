import whydotbg from "../../assets/images/why-dot-bg.webp"
import MainHeading from "../../components/common/MainHeading"
import PreFooter from "../../components/common/Prefooter"
import InvertedText from "../../components/Inverted-text"
import usePageTitle from "../../hooks/usePageTitle"
import UseCaseSection from "./UseCase-section"
import WhyTeamsLove from "./Why-teams-love"
export default function WhyDotPage() {

    usePageTitle("Why Dot It | Dot it")

    const Listing = ["Manual email sorting and prioritization",
        "Repetitive CRM data entry and updates",
        "Time-consuming digging and researching",
        "Manual lead qualification and scoring"
    ]
    return (
        <>
            <section className="mt-[71px] py-10 sm:py-20  bg-[#FAFAFA] ">
                <div className="container">
                    <MainHeading
                        headingStyle="max-w-[560px] text-center"
                        descStyle="max-w-[560px] text-center"
                        BeforeColoredtext="The most"
                        coloredText="intuitive"
                        AfterColoredtext="AI engagement platform"
                        desc="Discover how dot.it transforms sales engagement for modern teams with intelligent automation and seamless workflows."
                    />

                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] items-start gap-15">
                        <div className="flex flex-col items-start gap-6">
                            <h2 className="text-4xl leading-11 font-semibold ">Stop <span className="text-[#0160C9]"> wasting</span> time on tedious tasks</h2>
                            <p className="text-lg">Teams spend hours every week digging through and updating the CRM along with other tools, and chasing tasks that AI could handle.</p>
                            <ul className="flex flex-col items-start gap-4">
                                {Listing.map((list, index) => (
                                    <li key={index} className="flex items-center gap-2 text-lg">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="#F5F5F5" />
                                            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#717680" />
                                            <path d="M9.19065 15.5273C8.97344 15.7395 8.62656 15.7395 8.40935 15.5273C8.18484 15.308 8.18484 14.9468 8.40935 14.7275L11.2 12.0013L8.40935 9.27516C8.18484 9.05583 8.18484 8.6947 8.40935 8.47538C8.62656 8.26318 8.97344 8.26318 9.19065 8.47538L12 11.2198L14.8093 8.47538C15.0266 8.26318 15.3734 8.26318 15.5907 8.47538C15.8152 8.6947 15.8152 9.05583 15.5907 9.27516L12.8 12.0013L15.5907 14.7275C15.8152 14.9468 15.8152 15.308 15.5907 15.5273C15.3734 15.7395 15.0266 15.7395 14.8093 15.5273L12 12.7829L9.19065 15.5273Z" fill="#717680" />
                                        </svg>
                                        {list}

                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="flex items-start lg:items-end gap-6">
                            <div className="bg-[#0160C9] p-5 h-fit lg:h-[376px] max-w-max lg:max-w-[235px] w-full  rounded-xl flex flex-col items-start justify-between">
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-lg font-medium text-white">Productivity</span>
                                    <span className="text-[48px] leading-15 font-bold text-white">30%</span>
                                </div>
                                <p className="text-base text-[#E6E9ED] text-start">Less than 30% of sales reps' time is spent actually selling, with the remainder consumed by administrative tasks and tool management. (Salesforce)</p>
                            </div>
                            <div className="bg-[#E6EFFA] p-5 h-fit lg:h-[312px] max-w-max lg:max-w-[235px] w-full rounded-xl flex flex-col items-start justify-between">
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-lg font-medium ">Wasting time</span>
                                    <span className="text-[48px] leading-15 font-bold text-[#0160C9]">59 min</span>
                                </div>
                                <p className="text-base  text-start">Employees are wasting 59 minutes every day trying to find information hidden within different apps. (Qatalog)</p>
                            </div>
                            <div className="bg-[#E6EFFA] p-5 h-fit lg:h-[261px] max-w-max lg:max-w-[235px] w-full  rounded-xl flex flex-col items-start justify-between">
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-lg font-medium ">Project Delays</span>
                                    <span className="text-[48px] leading-15 font-bold text-[#0160C9]">61%</span>
                                </div>
                                <p className="text-base  text-start">61% of organizations experience project delays due to slow data integration, impacting sales timelines. (Snaplogic)</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <WhyTeamsLove />
            <UseCaseSection />
            <InvertedText />
            <PreFooter />

        </>
    )
}