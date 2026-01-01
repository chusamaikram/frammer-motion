import Button from "./common/Button";

export default function ScrolSpySidebar({ sections,
    activeId,
    onNavigate, }) {
    return (
        <>

            <aside className="hidden md:block p-8 sticky top-20 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] ">
                <ul className="flex flex-col items-start gap-4 w-full mb-6 ">
                    {sections.map((item) => (
                        <li key={item.id} className="w-full" >
                            <button
                                onClick={() => onNavigate(item.id)}
                                className={`text-base sm:text-lg leading-7 hover:text-blue-800  cursor-pointer w-full flex items-center justify-start ${activeId === item.id ? "text-blue-500 font-medium" : "text-[#717680]"}`}>{item.title}</button>
                        </li>
                    ))}
                </ul>
                <Button to="/contact-us" className="max-w-[222px]">Got a question? Contact us</Button>

            </aside>

        </>
    )
}