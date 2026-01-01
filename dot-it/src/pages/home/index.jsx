import Button from "../../components/common/Button";
import home_video from '../../assets/videos/home-video.mp4';
import { Keysha, Medc, BlueEvening, FiveOak, Zapta } from '../../assets/svgs';
import HeroBg from '../../assets/images/hero-bg.webp'
import TabsSection from "./WorkflowTabs";
import Accordian from "../../components/Accordians";
import CrmSection from "./CrmSection";
import PreFooter from "../../components/common/Prefooter";
import AutoSwitchingTabs from "./AutoSwitchingTabs";
import TestimonialSection from "./Testimonials";

export default function HomePage() {

    const Slider = [
        { img: <Keysha /> },
        { img: <Medc /> },
        { img: <BlueEvening /> },
        { img: <FiveOak /> },
        { img: <Zapta /> },
        { img: <Keysha /> },
        { img: <Medc /> },
        { img: <BlueEvening /> },
        { img: <FiveOak /> },
        { img: <Zapta /> },
        { img: <Keysha /> },
        { img: <Medc /> },
        { img: <BlueEvening /> },
    ]
    return (
        <>
            <section className=" pt-20 md:pt-40 pb-8 sm:pb-20 bg-cover bg-center" style={{ backgroundImage: `url(${HeroBg})` }}>
                <div className="container">
                    <div className="flex flex-col items-center justify-center gap-3 ">
                        <div className="bg-[#F6F4F1] rounded-full py-1 px-2.5 flex items-center gap-2">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.0413923 8.87577C0.0137963 8.91373 0 8.95859 0 9.00345C0 9.05176 0.0137963 9.09662 0.0413923 9.13458C0.0724378 9.16909 0.110388 9.1967 0.155232 9.2174L2.46295 10.0456C3.72546 10.5046 4.86724 11.2362 5.8193 12.1852C6.77136 13.1307 7.50266 14.2799 7.95454 15.5464L8.78587 17.8447C8.79967 17.8896 8.82727 17.931 8.86522 17.9586C8.90661 17.9862 8.95145 18 8.99974 18C9.04803 18 9.09633 17.9862 9.13428 17.9586C9.16877 17.9241 9.19291 17.8861 9.21361 17.8447L10.0449 15.5464C10.5003 14.2834 11.2281 13.1342 12.1802 12.1852C13.1253 11.2293 14.2706 10.4977 15.5365 10.0456L17.8443 9.2174C17.8891 9.2036 17.9305 9.17254 17.9581 9.13458C17.9891 9.09662 18.0029 9.05176 17.9995 9.00345C17.9995 8.95514 17.9857 8.90682 17.9581 8.86886C17.927 8.83435 17.8891 8.80675 17.8443 8.78949L15.5365 7.95782C14.2775 7.4954 13.1322 6.7638 12.1802 5.81825C11.2281 4.87269 10.4968 3.72699 10.0449 2.46051L9.21361 0.155285C9.19981 0.110423 9.17222 0.0690167 9.13428 0.0414094C9.09633 0.013802 9.04803 0 8.99974 0C8.95145 0 8.90316 0.013802 8.86522 0.0414094C8.83072 0.0724676 8.80312 0.110423 8.78587 0.155285L7.95454 2.46741C7.49921 3.73044 6.76792 4.87615 5.8193 5.82515C4.87414 6.78106 3.72891 7.51265 2.46295 7.96472L0.155232 8.79639C0.110388 8.81019 0.0689883 8.83781 0.0413923 8.87577Z" fill="#0160C9" />
                            </svg>
                            <p className='text-sm text-[#191D4D] font-medium '>AI Powered Sales Management</p>
                        </div>
                        <h1 className="max-w-218 text-4xl sm:text-[48px] leading-12 sm:leading-15 text-[#011A35] font-semibold text-start md:text-center tracking-[-0.5px]">Manage your entire    sales journey without ever leaving your inbox</h1>
                        <p className="max-w-218 text-[#012246] text-base font-normal text-start md:text-center">dot.it connects your touchpoints emails, meetings, calls, and CRM activity-into one streamlined flow. Our AI handles the busywork by logging updates, automating follow ups, surfacing valuable insights, and providing next steps alongside actionable intelligence. No more lost deals to messy processes just faster cycles and stronger closes.</p>
                        <div className="mt-3 flex flex-col items-center justify-center gap-4.5">
                            <div className="flex items-center gap-2">
                                <svg width="78" height="14" viewBox="0 0 78 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99873 1.01953C7.18015 1.01953 7.34278 1.13154 7.40747 1.30107L8.78297 4.9059L12.5617 5.09069C12.7398 5.0994 12.8947 5.21523 12.9535 5.38351C13.0122 5.5518 12.963 5.73888 12.829 5.85647L9.9532 8.38091L11.0101 12.4299C11.0563 12.6066 10.9877 12.7934 10.8383 12.8984C10.6888 13.0034 10.4899 13.0045 10.3392 12.901L6.99873 10.6081L3.65819 12.901C3.50759 13.0045 3.30862 13.0034 3.15914 12.8984C3.00966 12.7934 2.94114 12.6066 2.98728 12.4299L4.04425 8.38091L1.16843 5.85647C1.03448 5.73888 0.985253 5.5518 1.04398 5.38351C1.10271 5.21523 1.25765 5.0994 1.43568 5.09069L5.21447 4.9059L6.58993 1.30107C6.65462 1.13154 6.81726 1.01953 6.99873 1.01953Z" fill="#FBBF24" />
                                    <path d="M22.9987 1.01953C23.1801 1.01953 23.3428 1.13154 23.4075 1.30107L24.783 4.9059L28.5617 5.09069C28.7398 5.0994 28.8947 5.21523 28.9535 5.38351C29.0122 5.5518 28.963 5.73888 28.829 5.85647L25.9532 8.38091L27.0101 12.4299C27.0563 12.6066 26.9877 12.7934 26.8383 12.8984C26.6888 13.0034 26.4899 13.0045 26.3392 12.901L22.9987 10.6081L19.6582 12.901C19.5076 13.0045 19.3086 13.0034 19.1591 12.8984C19.0097 12.7934 18.9411 12.6066 18.9873 12.4299L20.0442 8.38091L17.1684 5.85647C17.0345 5.73888 16.9853 5.5518 17.044 5.38351C17.1027 5.21523 17.2577 5.0994 17.4357 5.09069L21.2145 4.9059L22.5899 1.30107C22.6546 1.13154 22.8173 1.01953 22.9987 1.01953Z" fill="#FBBF24" />
                                    <path d="M38.9987 1.01953C39.1801 1.01953 39.3428 1.13154 39.4075 1.30107L40.783 4.9059L44.5617 5.09069C44.7398 5.0994 44.8947 5.21523 44.9535 5.38351C45.0122 5.5518 44.963 5.73888 44.829 5.85647L41.9532 8.38091L43.0101 12.4299C43.0563 12.6066 42.9877 12.7934 42.8383 12.8984C42.6888 13.0034 42.4899 13.0045 42.3392 12.901L38.9987 10.6081L35.6582 12.901C35.5076 13.0045 35.3086 13.0034 35.1591 12.8984C35.0097 12.7934 34.9411 12.6066 34.9873 12.4299L36.0442 8.38091L33.1684 5.85647C33.0345 5.73888 32.9853 5.5518 33.044 5.38351C33.1027 5.21523 33.2577 5.0994 33.4357 5.09069L37.2145 4.9059L38.5899 1.30107C38.6546 1.13154 38.8173 1.01953 38.9987 1.01953Z" fill="#FBBF24" />
                                    <path d="M54.9987 1.01953C55.1801 1.01953 55.3428 1.13154 55.4075 1.30107L56.783 4.9059L60.5617 5.09069C60.7398 5.0994 60.8947 5.21523 60.9535 5.38351C61.0122 5.5518 60.963 5.73888 60.829 5.85647L57.9532 8.38091L59.0101 12.4299C59.0563 12.6066 58.9877 12.7934 58.8383 12.8984C58.6888 13.0034 58.4899 13.0045 58.3392 12.901L54.9987 10.6081L51.6582 12.901C51.5076 13.0045 51.3086 13.0034 51.1591 12.8984C51.0097 12.7934 50.9411 12.6066 50.9873 12.4299L52.0442 8.38091L49.1684 5.85647C49.0345 5.73888 48.9853 5.5518 49.044 5.38351C49.1027 5.21523 49.2577 5.0994 49.4357 5.09069L53.2145 4.9059L54.5899 1.30107C54.6546 1.13154 54.8173 1.01953 54.9987 1.01953Z" fill="#FBBF24" />
                                    <path d="M70.9987 1.01953C71.1801 1.01953 71.3428 1.13154 71.4075 1.30107L72.783 4.9059L76.5617 5.09069C76.7398 5.0994 76.8947 5.21523 76.9535 5.38351C77.0122 5.5518 76.963 5.73888 76.829 5.85647L73.9532 8.38091L75.0101 12.4299C75.0563 12.6066 74.9877 12.7934 74.8383 12.8984C74.6888 13.0034 74.4899 13.0045 74.3392 12.901L70.9987 10.6081L67.6582 12.901C67.5076 13.0045 67.3086 13.0034 67.1591 12.8984C67.0097 12.7934 66.9411 12.6066 66.9873 12.4299L68.0442 8.38091L65.1684 5.85647C65.0345 5.73888 64.9853 5.5518 65.044 5.38351C65.1027 5.21523 65.2577 5.0994 65.4357 5.09069L69.2145 4.9059L70.5899 1.30107C70.6546 1.13154 70.8173 1.01953 70.9987 1.01953Z" fill="#FBBF24" />
                                </svg>
                                <p className="text-sm font-medium text-[#535862]">100+ Early access members</p>
                            </div>
                            <Button variant="arrow" to="">Get Started

                            </Button>
                        </div>

                    </div>
                </div>
            </section>
            <section className="pb-20" >
                <div className="container">
                    <div className="overflow-hidden">
                        <video src={home_video} loop muted autoPlay playsInline />
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="container">
                    <div className="max-w-[922px] mx-auto overflow-hidden ">
                        <ul className="slide-track py-5 shrink-0 flex items-center justify-between gap-[91px]">
                            {Slider.map((slide, index) => (
                                <li key={index}>
                                    {slide.img}
                                </li>
                            ))}

                        </ul>
                    </div>

                </div>
            </section>
            <TabsSection />
            <Accordian />
            <CrmSection />
            <AutoSwitchingTabs />
            <TestimonialSection />
            <PreFooter />
        </>
    )
}