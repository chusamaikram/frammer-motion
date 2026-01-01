import Button from "../../components/common/Button";
import MainHeading from "../../components/common/MainHeading";
import FaqSection from "./FaqSection";

import usePageTitle from "../../hooks/usePageTitle"
const Career = [
    {
        title: "Account Manager",
        desc: "Own and grow customer relationships by driving adoption, uncovering expansion opportunities, and ensuring long-term account success.",
    },
    {
        title: "Client Development Director",
        desc: "Lead strategic outreach to high-value prospects, build enterprise-level partnerships, and accelerate revenue growth through consultative selling.",
    },
    {
        title: "Business Development Manager",
        desc: "Identify new markets, generate pipeline, and convert qualified opportunities through proactive prospecting and solution-focused engagement.",
    },
    {
        title: "Lead Developer",
        desc: "Architect and guide the technical roadmap while overseeing development execution, ensuring scalable, high-performance product delivery.",
    },
    {
        title: "AI Developer",
        desc: "Design, train, and optimize AI models that power intelligent workflows, predictive insights, and frictionless user experiences across the platform.",
    },
]

const FaqCards = [
    {
        question: "How does dot.it integrate with my current CRM tools?",
        answer: "dot.it is an AI engagement platform specially designed to automate your workflows so your team can sell smarter. The result: every interaction is informed, faster, and more personalized.",
    },
    {
        question: "Who is dot.it designed for?",
        answer: "dot.it is an AI engagement platform specially designed to automate your workflows so your team can sell smarter. The result: every interaction is informed, faster, and more personalized.",
    },
    {
        question: "What tasks can dot.it automate?",
        answer: "dot.it is an AI engagement platform specially designed to automate your workflows so your team can sell smarter. The result: every interaction is informed, faster, and more personalized.",
    },
    {
        question: "What makes dot.it different from other CRM tools?",
        answer: "dot.it is an AI engagement platform specially designed to automate your workflows so your team can sell smarter. The result: every interaction is informed, faster, and more personalized.",
    },
]


export default function Careers() {
usePageTitle("Career |Dot it");
    return (
        <>
            <section className="mt-[71px] py-20 bg-[#FAFAFA]">
                <div className="container">
                    <MainHeading
                        BeforeColoredtext="Join"
                        coloredText=" our"
                        AfterColoredtext=" growing team"
                        descStyle="max-w-[636px] text-center"
                        desc="We're hiring creators who want to solve meaningful problems with AI, not chase hype. Our team values clarity, speed, and work that creates lasting impact ."
                    />
                </div>

            </section>
            <section className="py-8 sm:py-20">
                <div className="container">
                    <h2 className="text-3xl sm:text-4xl font-semibold leading-9.5">Open Roles</h2>
                    <div className="mt-10 grid grid-cols-1 gap-6">
                        {Career.map((career, index) => (
                            <div key={index} className="flex flex-col items-start">
                                <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-y-4 justify-between">
                                    <div className="flex flex-col items-start gap-2">
                                        <h3 className="text-2xl font-medium leading-8">{career.title}</h3>
                                        <p className="text-base font-medium leading-6 text-start md:max-w-[675px] text-[#777B8B]">{career.desc}</p>
                                    </div>
                                    <Button variant="arrow" href="https://tally.so/r/81zKgr" >Apply</Button>
                                </div>
                                {index == 4 ? "" : (<span className="my-6 border-t border-[#E6E9ED] w-full"></span>)}

                            </div>

                        ))}
                    </div>
                </div>
            </section >
            <section className="bg-[#E6EFFA] py-8 sm:py-20">
                <div className="container">
                    <div className="flex flex-col items-center justify-center mx-auto gap-2">
                        <h2 className="text-3xl sm:text-4xl font-semibold leading-11 text-[#0160C9]">Our Mission</h2>
                        <p className="text-lg sm:text-2xl leading-8 text-black text-center max-w-[778px]">Empowering sales professionals globally by seamlessly integrating what they have done for years with forward thinking technology through innovation, user-centric design, and the belief that every email is an opportunity waiting to be seized.</p>
                    </div>
                </div>
            </section>

            <section className="py-8 sm:py-20" id="faq">
                <div className="container">
                    <div className="flex flex-col items-center justify-center mx-auto gap-4">
                        <h2 className="text-3xl sm:text-4xl font-semibold leading-11">Frequently Asked Questions</h2>
                        <p className="max-w-[574px] text-base sm:text-base sm:text-lg leading-7 text-center">Start with dot.it and watch every email become an opportunity and every lead a seamless sale.  Embrace the future of sales management.</p>

                    </div>
                    <div className="mt-10 flex flex-col items-center justify-center mx-auto">
                        <FaqSection FaqCards={FaqCards} />

                    </div>
                </div>
            </section>
        </>

    )
}