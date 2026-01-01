import { CheckIcon } from "../assets/svgs";
import Button from "./common/Button";

export default function HomeTabs({
    highlight,
    heading,
    desc,
    Listing,
    video,

}) {
    return (
        <>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 ">
                <div className="flex flex-col items-start gap-6 w-fit ">
                    <h3 className="text-3xl sm:text-4xl leading-11 font-semibold max-w-[450px]"><span className="text-[#0160C9]">{highlight}</span> {heading} </h3>
                    <p className="text-base sm:text-lg font-normal max-w-lg">{desc}</p>
                    <ul className="flex flex-col items-start gap-4">
                        {Listing.map((list, index) => (
                            <li key={index} className="flex items-center gap-2 text-lg">
                                <span className="w-6 h-6 flex items-center justify-center py-1.5 px-1"><CheckIcon /></span>
                                {list}
                            </li>
                        ))}
                    </ul>
                    <Button variant="arrow" to=""> Get Started</Button>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <video className="w-full h-full object-cover" src={video} muted autoPlay loop preload="none"/>
                </div>
            </div>
        </>
    )
}