
// export default function TabsData({ heading, desc, img, width, height }) {
//     return (
//         <>
//             <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-y-6 transition-all duration-300 ease-in-out">
//                 <div className="flex flex-col items-center md:items-start gap-6 w-full md:max-w-[469px]">
//                     <h2 className="text-2xl sm:text-4xl leading-11 font-semibold">{heading}</h2>
//                     <p className="text-lg sm:text-2xl leading-8 text-[#535862]">{desc}</p>
//                 </div>
//                 <div className="overflow-hidden">
//                     <img className="object-contain w-full h-auto " src={img} alt={heading} width={width} height={height} loading="eager" />
//                 </div>
//             </div>
//         </>
//     )
// }

export default function TabsData({ heading, desc, img, width, height }) {
    return (
        <div
            className="
                mt-5 flex flex-col md:flex-row items-center justify-between gap-y-6
                opacity-0 tab-fade
            "
        >
            <div className="flex flex-col items-center md:items-start gap-6 w-full md:max-w-[469px]">
                <h2 className="text-2xl sm:text-4xl font-semibold">
                    {heading}
                </h2>
                <p className="text-lg sm:text-2xl text-[#535862]">
                    {desc}
                </p>
            </div>

            <div className="overflow-hidden">
                <img
                    className="object-contain w-full h-auto"
                    src={img}
                    alt={heading}
                    width={width}
                    height={height}
                />
            </div>
        </div>
    );
}

