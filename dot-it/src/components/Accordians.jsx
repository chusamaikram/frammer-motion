import { useState } from 'react'
import video from '../assets/videos/accordian-video.mp4'
export default function Accordian() {
    const [open, setOpen] = useState(0)

    const handleToggle = (index) => {
        setOpen(open === index ? null : index)
    };


    const Accordians = [
        {
            title: "Revenue Impact",
            desc: "Designed for the entire revenue team, dot.it understands your pipeline and delivers insights for consistent engagement.",
        },
        {
            title: "User-Centric Vision",
            desc: "Every facet of dot.it is designed with the user's journey in mind, creating an intuitive experience to navigating through your sales.",
        },
        {
            title: "Seamless Synergy",
            desc: "No more searching for email attachments. Drag and drop files directly into dot.it and allow dot.it's AI to sort items accordingly.",
        },
        {
            title: "Innovative AI",
            desc: "Save hours of digging through conversations with dot.it AI’s ability to recall specific details, provide next step, and AI Reply.",
        },
        {
            title: "Beyond Conventional",
            desc: "Stay informed with the latest company news, empowering your  team with relevant information for more effective engagements.",
        },
    ]
    return (
        <>
            <section className="bg-[#FAFAFA] py-20">
                <div className="container">
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-3xl sm:text-4xl leading-11 font-semibold text-center">The dot.it difference</h2>
                        <p className="text-base sm:text-base sm:text-lg leading-7 text-center">Not just doing things different but doing them better and smarter for every user.</p>
                    </div>
                    <div className="mt-15 grid grid-cols-1 md:grid-cols-[482px_1fr] items-center gap-18">
                        <div className='flex flex-col items-start gap-6'>
                            {Accordians.map((accordian, index) => (
                                <div key={index} className={`w-full py-3 px-5 rounded-3xl border cursor-pointer ${open === index ? "bg-[#F3F8FF] border-[#D9E7F7]" : "border-[#E9EAEB]"}  `}>
                                    <button onClick={() => handleToggle(index)} className='w-full text-start cursor-pointer text-base sm:text-lg leading-7.5 font-medium'>{accordian.title}</button>
                                    <div className={`overflow-hidden transition-all duration-200  ${open === index ? 'max-h-200' : 'max-h-0'}`}>
                                        <p className={`mt-2 text-sm text-[#414651] font-normal text-start `}>{accordian.desc}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                        <div>
                            <video className="w-full h-full object-cover" src={video} muted loop autoPlay />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}