
export default function MainHeading({BeforeColoredtext,coloredText,AfterColoredtext, desc,className,headingStyle,descStyle}) {
    return (
        <>
            
            <div className={`flex flex-col items-center gap-3 mx-auto ${className}`}>
                        <h1 className={`text-3xl md:text-5xl leading-8 md:leading-15 font-semibold text-[#011A35]  ${headingStyle}`}>{BeforeColoredtext} <span className="text-[#0160C9]">{coloredText} </span>{AfterColoredtext}</h1>
                        <p className={`text-base md:text-base leading-5 md:leading-6 text-[#012246] ${descStyle}`}>{desc}</p>
                    </div>
        </>
    )
}