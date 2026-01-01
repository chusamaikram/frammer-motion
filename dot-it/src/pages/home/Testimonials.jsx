
// import samantha from "../../assets/images/samantha.svg"
// import jordan from "../../assets/images/jordan.svg"
// import gabriel from "../../assets/images/gabriel.svg"
// export default function TestimonialSection() {

//     const TestimonialCard = [
//         {
//             desc: "Our reps used to dread CRM updates — now dot.it does it for them. The AI catches details from every email thread and keeps deals moving without anyone lifting a finger. Productivity is up and our pipeline visibility has never been clearer.",
//             name: "Samantha R.",
//             designation: "Head of Sales, Banking ",
//             img: samantha,
//         },
//         {
//             desc: "dot.it is like having a personal assistant inside my inbox. It updates our CRM automatically and surfaces insights I didn’t even know I needed. My follow-ups are faster, my notes are accurate, and I’ve saved hours every week.",
//             name: "Jordan M",
//             designation: "Account Executive, Automotive",
//             img: jordan,
//         },
//         {
//             desc: "I love that dot.it lives inside my email. I don’t have to switch tabs or dig through our CRM to find context. It just appears — client history, deal notes, next steps — all in one view. It’s like my inbox finally became intelligent.",
//             name: "Gabriel W.",
//             designation: "Project Manager, Market Research",
//             img: gabriel,
//         },
//     ]
//     return (
//         <>
//             <section className="py-8 sm:py-20 ">
//                 <div className="container">
//                     <h2 className="text-4xl leading-11 font-semibold text-center">Trusted by teams globally</h2>
//                     <p className="mt-4 text-base sm:text-lg leading-7 text-center">From startups to enterprises, dot.it helps teams save time, reduce manual work, and close deals faster.</p>
//                     <div className="mt-15 flex items-center">
//                         {TestimonialCard.map((card, index) => (
//                             <div key={index} className="mr-7.5 w-[375px] ">
//                                 <div className="flex flex-col items-start gap-4 p-6 rounded-3xl bg-[#F5F5F5] w-full h-full min-h-[340px]">
//                                     <div className="flex flex-col items-start gap-4 ">
//                                         <svg width="68" height="47" viewBox="0 0 68 47" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6281 10.587C13.7116 10.3252 14.8191 10.1933 15.93 10.194C24.7275 10.194 31.8572 18.342 31.8572 28.389C31.8572 38.439 24.7275 46.587 15.93 46.587C7.1325 46.587 0 38.442 0 28.389C0 28.095 0.005625 27.798 0.0196875 27.504H0C0 12.339 10.8 0 24.075 0V6.108C19.7691 6.108 15.7978 7.782 12.6281 10.587ZM48.2738 10.587C49.3369 10.329 50.4394 10.194 51.57 10.194C60.3675 10.194 67.5 18.342 67.5 28.389C67.5 38.439 60.3675 46.587 51.57 46.587C42.7725 46.587 35.6428 38.442 35.6428 28.389C35.6428 28.095 35.6484 27.798 35.6625 27.504H35.6428C35.6428 12.339 46.4428 0 59.7178 0V6.108C55.4091 6.108 51.4434 7.782 48.2738 10.587Z" fill="#0160C9" />
//                                         </svg>
//                                         <p className="text-xl leading-7.5 text-start">{card.desc}</p>
//                                     </div>
//                                     <div className="flex items-center gap-3">
//                                         <img src={card.img} alt={card.name} width={50} height={50} />
//                                         <div className="flex flex-col items-start gap-2">
//                                             <h3 className="text-base leading-6 font-bold text-[#67646A]">{card.name}</h3>
//                                             <p className="text-sm leading-5 text-[#413D45]">{card.designation}</p>

//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                         ))}

//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import samantha from "../../assets/images/samantha.svg";
import jordan from "../../assets/images/jordan.svg";
import gabriel from "../../assets/images/gabriel.svg";

export default function TestimonialSection() {
    const testimonials = [
        {
            desc: "Our reps used to dread CRM updates — now dot.it does it for them. The AI catches details from every email thread and keeps deals moving without anyone lifting a finger. Productivity is up and our pipeline visibility has never been clearer.",
            name: "Samantha R.",
            designation: "Head of Sales, Banking",
            img: samantha,
        },
        {
            desc: "dot.it is like having a personal assistant inside my inbox. It updates our CRM automatically and surfaces insights I didn’t even know I needed. My follow-ups are faster, my notes are accurate, and I’ve saved hours every week.",
            name: "Jordan M.",
            designation: "Account Executive, Automotive",
            img: jordan,
        },
        {
            desc: "I love that dot.it lives inside my email. I don’t have to switch tabs or dig through our CRM to find context. It just appears — client history, deal notes, next steps — all in one view. It’s like my inbox finally became intelligent.",
            name: "Gabriel W.",
            designation: "Project Manager, Market Research",
            img: gabriel,
        },
        {
            desc: "Our reps used to dread CRM updates — now dot.it does it for them. The AI catches details from every email thread and keeps deals moving without anyone lifting a finger. Productivity is up and our pipeline visibility has never been clearer.",
            name: "Samantha R.",
            designation: "Head of Sales, Banking",
            img: samantha,
        },
        {
            desc: "dot.it is like having a personal assistant inside my inbox. It updates our CRM automatically and surfaces insights I didn’t even know I needed. My follow-ups are faster, my notes are accurate, and I’ve saved hours every week.",
            name: "Jordan M.",
            designation: "Account Executive, Automotive",
            img: jordan,
        },
        {
            desc: "I love that dot.it lives inside my email. I don’t have to switch tabs or dig through our CRM to find context. It just appears — client history, deal notes, next steps — all in one view. It’s like my inbox finally became intelligent.",
            name: "Gabriel W.",
            designation: "Project Manager, Market Research",
            img: gabriel,
        },
    ];

    return (
        <section className="py-14 sm:py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-4xl font-semibold text-center">
                    Trusted by teams globally
                </h2>
                <p className="mt-4 text-lg text-center max-w-3xl mx-auto">
                    From startups to enterprises, dot.it helps teams save time, reduce
                    manual work, and close deals faster.
                </p>

                {/* Slider */}
                <div className="mt-16 relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView="auto"
                        centeredSlides
                        spaceBetween={30}
                        loop
                        loopedSlides={testimonials.length}
                        speed={800}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            nextEl: ".testimonial-next",
                            prevEl: ".testimonial-prev",
                        }}
                        className="pb-4"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className="flex justify-center"
                                style={{ width: "375px" }}
                            >
                                {({ isActive }) => (
                                    <div
                                        className={`transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-40"
                                            }`}
                                    >
                                        {/* Card */}
                                        <div className="h-[420px] flex flex-col p-6 rounded-3xl bg-[#F5F5F5]">
                                            {/* Quote */}
                                            <svg
                                                width="68"
                                                height="47"
                                                viewBox="0 0 68 47"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12.6281 10.587C13.7116 10.3252 14.8191 10.1933 15.93 10.194C24.7275 10.194 31.8572 18.342 31.8572 28.389C31.8572 38.439 24.7275 46.587 15.93 46.587C7.1325 46.587 0 38.442 0 28.389C0 28.095 0.005625 27.798 0.0196875 27.504H0C0 12.339 10.8 0 24.075 0V6.108C19.7691 6.108 15.7978 7.782 12.6281 10.587ZM48.2738 10.587C49.3369 10.329 50.4394 10.194 51.57 10.194C60.3675 10.194 67.5 18.342 67.5 28.389C67.5 38.439 60.3675 46.587 51.57 46.587C42.7725 46.587 35.6428 38.442 35.6428 28.389C35.6428 28.095 35.6484 27.798 35.6625 27.504H35.6428C35.6428 12.339 46.4428 0 59.7178 0V6.108C55.4091 6.108 51.4434 7.782 48.2738 10.587Z"
                                                    fill="#0160C9"
                                                />
                                            </svg>

                                            {/* Text */}
                                            <p className="text-lg leading-relaxed mt-4">
                                                {item.desc}
                                            </p>

                                            {/* Footer */}
                                            <div className="flex items-center gap-3 mt-auto pt-6">
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className="w-12 h-12"
                                                />
                                                <div>
                                                    <h3 className="text-base font-semibold text-[#67646A]">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-sm text-[#413D45]">
                                                        {item.designation}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation */}
                    <div className="flex justify-center gap-6 mt-10">
                        <button className="testimonial-prev w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
                            ‹
                        </button>
                        <button className="testimonial-next w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}



