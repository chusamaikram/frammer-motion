import { useState } from "react";

export default function FaqSection({ FaqCards }) {
    const [open, setOpen] = useState(null);

    const handleToggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="flex flex-col items-start gap-4">
            {FaqCards.map((card, index) => {
                const isOpen = open === index;

                return (
                    <div
                        key={index}
                        className="bg-[#FAFAFA] rounded-xl border border-[#E9EAEB] p-5 max-w-[692px] w-full"
                    >
                        <button
                            onClick={() => handleToggle(index)}
                            className="flex items-center justify-between w-full text-left"
                            aria-expanded={isOpen}
                        >
                            <h3 className="text-lg sm:text-xl font-medium leading-7">
                                {card.question}
                            </h3>
                            <span className={`ms-3 text-2xl font-medium transition-transform duration-400 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                                {isOpen ? "−" : "+"}
                            </span>
                        </button>

                        <div
                            className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <p className="overflow-hidden text-base leading-6 text-[#414651]">
                                {card.answer}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
