import salesforce from '../../assets/images/salesforce.svg'
import hubspot from '../../assets/images/hubsport.svg'
import CustomCrm from '../../assets/images/custom-crm.svg'
import MsDynamic from '../../assets/images/ms-dynamic.svg'
import HighLevel from '../../assets/images/high-level.svg'
import Button from '../../components/common/Button'
const Companies = [
    {
        img: salesforce,
        desc: "Update records, log emails, and manage opportunities all without leaving your inbox.",
        width: 83,
        height: 60
    },
    {
        img: hubspot,
        desc: "Sync conversations, track engagement, and auto update CRM fields directly from email.",
        width: 117,
        height: 66
    },
    {
        img: CustomCrm,
        desc: "Log calls, schedule follow ups, and keep your deals always up to date from the sidebar.",
        width: 173,
        height: 64
    },
    {
        img: MsDynamic,
        desc: "Two-way sync ensures every interaction you make in email is reflected instantly in Zoho.",
        width: 183,
        height: 84
    },
    {
        img: HighLevel,
        desc: "Integrated scheduling, meeting logging, and activity tracking right where you work.",
        width: 260,
        height: 65
    },

]
export default function CrmSection() {
    return (
        <>
            <section className="py-20  ">
                <div className="container">
                    <h2 className="text-center text-3xl sm:text-4xl leading-11 font-semibold">Maximize the value of your CRM</h2>
                    <p className="mt-4 text-center text-base sm:text-base sm:text-lg leading-7">Works seamlessly with your current tools</p>
                    <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  gap-5.5">
                        {Companies.map((card, index) => (
                            <div key={index} className="flex flex-col items-center gap-6 ">
                                <div className='w-36 h-16 flex items-center justify-center'>
                                    <img className='object-contain ' src={card.img} alt="thumbnail" width={card.width} height={card.height} loading='lazy' />
                                </div>
                                <p className='text-sm text-[#535862] leading-6 text-center'>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className='mt-8 flex items-center justify-center'>
                        <Button variant='arrow' to="#">Get Started</Button>
                    </div>
                </div>
            </section>
        </>
    )
}