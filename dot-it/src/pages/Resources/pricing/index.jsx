import { Link } from "react-router-dom";
import TestimonialSection from "../../home/Testimonials";
import PreFooter from "../../../components/common/Prefooter";
import MainHeading from "../../../components/common/MainHeading";
import usePageTitle from "../../../hooks/usePageTitle";

export default function PricePage() {

    usePageTitle("Pricing | Dot it")

    const pricingCard = [
        {
            heading: "Monthly Subscription",
            price: "$80",
            planDetails: "Per user/month, billed monthly",
            suitablefor: "For individuals and small teams:",
            listing: ["Monthly Billing Cycle", "Flexible", "No Long-Term Commitment"]
        },
        {
            heading: "Annual Subscription",
            price: "$70",
            planDetails: "Per user/month, billed annually",
            suitablefor: "For growing teams:",
            listing: ["Annual Billing Cycle", "Cost-Effective for Sustainable use", "Priority Customer Support"]
        },
        {
            heading: "Enterprise Plan",
            price: "Custom",
            planDetails: "",
            suitablefor: "For scaling and larger teams:",
            listing: ["Negotiable Billing Cycle", "Scalable Custom Solutions", "Priority Customer Support"]
        },
    ]
    return (
        <>
            <section className="mt-[71px] py-20 bg-[#FAFAFA]">
                <div className="container">
                    <MainHeading
                        BeforeColoredtext="Choosing the"
                        coloredText="right"
                        AfterColoredtext="plan"
                        descStyle="max-w-[560px] text-center"
                        desc="Choose a plan that fits your needs and budget, and let's embark on this journey of success together"
                    />

                </div>
            </section>
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                        {pricingCard.map((card, index) => (
                            <div key={index} className="p-7 h-full w-full hover:shadow-[0_0_3px_6px_#EAF4FF]  transition-all duration-500 group flex flex-col items-start gap-8 rounded-3xl border border-[#E6E6E6] hover:border-[#0160C9] hover:bg-[#F8FBFF]" >
                                <h2 className="text-2xl font-medium leading-8 text-black flex items-center justify-between w-full">
                                    {card.heading}
                                    {index === 1 && <span className="px-4 py-1.5 rounded-full flex items-center justif-center text-[#0160C9] border border-[#0160C9] bg-[#E6EFFA] text-sm font-medium leading-5">Popular</span>}


                                </h2>
                                <div className="flex flex-col items-start gap-1 h-full">
                                    <span className="text-4xl leading-11 font-semibold text-[#181D27]">{card.price}</span>
                                    <p className="text-base text-[#575757]">{card.planDetails}</p>
                                </div>
                                <div className="flex flex-col items-start gap-4">
                                    <h3 className="text-lg font-medium text-[#100F11]">{card.suitablefor}</h3>
                                    <ul className="flex flex-col items-start gap-2.5">
                                        {card.listing.map((list, index) => (
                                            <li key={index} className="flex items-center gap-2 text-lg text-[#575757] leading-7">
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="28" height="28" rx="14" fill="#FAFAFA" />
                                                    <path d="M9.33203 14.0013L12.6654 17.3346L19.332 10.668" stroke="#100F11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                {list}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                                <Link to="" className="w-full px-5 py-2.5 rounded-full flex items-center justify-center text-[#0160C9] group-hover:text-white group-hover:bg-[#0160C9]  transition-all duration-500 border border-[#0160C9] text-base font-medium">{index == 2 ? "Contact Sales" : "Get Started"}</Link>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <TestimonialSection />
            <PreFooter />
        </>
    )
}