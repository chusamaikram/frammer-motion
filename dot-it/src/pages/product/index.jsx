import ProductBg from "../../assets/images/product-bg.webp"
import Button from "../../components/common/Button"
import productHero from "../../assets/images/product-hero.webp"
import ProductVideo from "../../assets/videos/product-page-video.mov"
import Productivity from "../../assets/images/sales-productivity.webp"
import Synchronization from "../../assets/images/real-time-synchronization.webp"
import Personalized from "../../assets/images/personalized-ai.webp"
import Agnostic from "../../assets/images/agnostic-integration.webp"
import AccordionSection from "./Product-accordian"
import SalesBanner from "../../assets/images/sales-management-banner.webp"

import { WorkInside, Synched, Smarter, Actionable } from "../../assets/svgs"

import ProductAccordian from "../../assets/images/accordian-thumbnail.webp"
import PreFooter from "../../components/common/Prefooter"
import InvertedText from "../../components/Inverted-text"
import MainHeading from "../../components/common/MainHeading"

import usePageTitle from "../../hooks/usePageTitle"




const FeatureRow = ({ heading, desc, img, reverse }) => {

    usePageTitle("Product | Dot it")
    return (
        <div
            className={`mt-12 flex items-center justify-center gap-24 flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Text */}
            <div className="flex flex-col items-start gap-6 md:max-w-md">
                <h3 className="text-3xl leading-9.5 font-semibold">{heading}</h3>
                <p className="text-lg">{desc}</p>
            </div>

            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={img}
                    alt={heading}
                    width={450}
                    height={450}
                    loading="lazy"
                />
            </div>
        </div>
    );
};

const features = [
    {
        heading: "Sales Productivity",
        desc: "Manage every phase of the sales process directly in email. Streamline operations and increase productivity by reducing the need to juggle between platforms",
        img: Productivity,
    },
    {
        heading: "Real-Time Synchronization",
        desc: "Receive instant updates in the CRM based on recent engagement. Edit records directly in email and ensure no detail is missed by reducing data entry errors.",
        img: Synchronization,
    },
    {
        heading: "Personalized AI",
        desc: "Leverage the power of AI through dot.it’s ability to read emails, suggest next steps, track customer history and sort through tasks. ",
        img: Personalized,
    },
    {
        heading: "CRM Agnostic Integration",
        desc: "Integrate dot.it seamlessly with any CRM system you're currently using. Gain unparalleled flexibility by eliminating the need to switch or adapt to new platforms.",
        img: Agnostic,
    },
];


const accordionItems = [
    {
        title: "Work Inside Email",
        content: "dot.it embeds CRM details directly in your email sidebar, allowing you to log activities, update records and respond from a single platform.",
        img: ProductAccordian,
        icon: <WorkInside />
    },
    {
        title: "Always Synced ",
        content: "With seamless, two-way synchronization between email and CRM, every email, note and update is automatically logged, eliminating the back-and-forth.",
        img: ProductAccordian,
        icon: < Synched />
    },
    {
        title: "Smarter Interactions",
        content: "Schedule, track, and log without the hassle. dot.it syncs every touchpoint so you can focus on the conversation, with smooth automation.",
        img: ProductAccordian,
        icon: <Smarter />
    },
    {
        title: "Actionable Insights",
        content: "See deal context, reminders, and pipeline intelligence where you actually work in email, so you never have to leave the conversation.",
        img: ProductAccordian,
        icon: <Actionable />
    },
];


export default function ProductPage() {
    return (
        <>
            <section className="mt-[71px] py-20 bg-cover bg-center  "
                style={{ backgroundImage: `url(${ProductBg})` }}>
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-25">

                        <div className="flex flex-col items-start gap-3 max-w-[560px]">
                            <h1 className="text-4xl sm:text-[40px] leading-11 sm:leading-[56px] font-semibold text-start text-[#011A35]">Managing workflows across multiple platforms is chaotic but not with <span className="text-[#0160C9]">dot.it</span> </h1>
                            <p className="text-base leading-6 text-[#012246] text-start">Transform your email into a powerful CRM workspace. Update deals, log activities, and surface insights without switching tabs. Save time, reduce errors, focus on what matters.</p>
                            <div className="mt-3">
                                <Button variant="arrow" href="https://tally.so/r/315L24">Get Started</Button>
                            </div>
                        </div>
                        <div>
                            <img src={productHero} alt="thumbnail" width={441} height={432} loading="eager" />
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-20 bg-[#E6EFFA]">
                <div className="container">
                    <h2 className="text-3xl sm:text-4xl font-semibold leading-11 text-center">Where sales management meets simplicity</h2>
                    <div className="relative max-w-[797px] w-full m-auto translate-y-[27px] sm:translate-y-[55px]">
                        <img className="w-full h-auto" src={SalesBanner} alt="sales Management Banner" loading="lazy" width={797} height={400} />
                        <video className="absolute top-[3%] left-[9%] w-[83%] h-[90%] object-cover rounded-lg" src={ProductVideo} loop muted autoPlay playsInline />
                    </div>
                </div>
            </section>
            <section className="py-8 sm:py-20">
                <div className="container">
                    <h2 className="text-3xl sm:text-4xl leading-9 sm:leading-11 font-semibold text-center mt-10">Discover the power behind dot.it's unique features</h2>
                    <div className="mt-3">
                        {features.map((feature, index) => (
                            <FeatureRow
                                key={index}
                                {...feature}
                                reverse={index % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl mb-6 font-semibold leading-9.5 text-center">Everything you need right inside your inbox</h2>
                    <AccordionSection Accordians={accordionItems} />
                </div>
            </section>
            <InvertedText />
            <PreFooter />
        </>
    )
}