import accordianbg from "../../assets/images/accordian-bg.webp"
import { useState } from "react";

const AccordionSection = ({ Accordians }) => {
    const [activeIndex, setActiveIndex] = useState(0); // which accordion is open

    return (
        <div className="grid grid-cols-1 md:grid-cols-[652px_1fr] items-start gap-7.5">
            {/* Left: Accordion */}

            <div className='bg-[#e6e9ed24] p-7.5 rounded-2xl flex flex-col items-start gap-6'>
                {Accordians.map((accordian, index) => (
                    <div key={index} className={`w-full sm:max-w-[592px] py-3 px-5 rounded-3xl border cursor-pointer ${activeIndex === index ? "bg-[#F3F8FF] border-[#D9E7F7]" : "border-[#E9EAEB]"}  `}>
                        <button onClick={() => setActiveIndex(index)} className='w-full text-start cursor-pointer text-xl leading-7.5 font-medium flex items-center gap-3'>
                            {accordian.icon}

                            {accordian.title}
                        </button>
                        <div className={`overflow-hidden transition-all duration-200  ${activeIndex === index ? 'max-h-200' : 'max-h-0'}`}>
                            <p className={`mt-2 text-lg leading-normal text-[#414651] font-normal text-start `}>{accordian.content}</p>
                        </div>
                    </div>

                ))}
            </div>

            {/* Right: Image */}
            <div className="w-full overflow-hidden  bg-cover bg-center bg-no-repeat rounded-md p-5" style={{backgroundImage:`URL(${accordianbg})`}}>
                <img
                    src={Accordians[activeIndex].img}
                    alt={Accordians[activeIndex].title}
                    className=" object-cover"
                    loading="lazy"
                    width={593}
                    height={709}
                />
            </div>
        </div>
    );
};

export default AccordionSection;
