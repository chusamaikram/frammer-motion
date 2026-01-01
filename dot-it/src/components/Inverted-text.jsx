

import invertedbg from "../assets/images/inverted-bg.webp"
const InvertedText = () => {
    return (
        <section className="py-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `URL(${invertedbg})` }}>
            <div className="container">
                <div className="flex items-center justify-center ">
                    <p className="text-center text-lg sm:text-2xl font-medium leading-8 max-w-[692px] text-[#717680]" > <span className="text-[#181D27]">dot.it is redefining sales management with seamless integrations</span > and <span className="text-[#181D27]">AI-driven insights </span>that simplify and streamline the entire workflow.</p>
                </div>
            </div>
        </section>
    )
}

export default InvertedText
