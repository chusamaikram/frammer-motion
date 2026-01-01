import { useState } from "react"
import HomeTabs from "../../components/HomeTabs"
import automated from '../../assets/videos/automate-video.mp4'

export default function TabsSection() {

    const [active, setActive] = useState(1)

    const Tabs = [{ id: 1, name: 'Automate Workflows' }, { id: 2, name: 'Capture Data' }, { id: 3, name: 'Surface Insights' }]

    const Listing1 = ['Automatically log emails, meetings, and notes to your CRM',
        'Automatically log emails, meetings, and notes to your CRM',
        'Sync data across platforms without manual entry',
        'Reduce errors and save hours every week'
    ]
    const Listing3 = ['Understand email content and CRM data to reveal key opportunities',
        'dot.it recommends actions automatically, thinking like a top-performing rep',
        'Surface insights that drive decisions without manual analysis',
    ]
    const Listing2 = ['Automatically log emails, meetings, and notes to your CRM',
        'Automatically log emails, meetings, and notes to your CRM',
        'Share key takeaways and complete context with minimal effort',
    ]
    return (
        <>
            <section className="py-20">
                <div className="container">
                    <div className="flex flex-col items-center gap-15 px-7.5">
                        <h2 className="text-3xl sm:text-[36px] leading-11 font-semibold text-center">AI that works where you work</h2>
                        <div className="w-full overflow-x-auto">
                            <ul className="w-fit mx-auto min-w-max p-2 rounded-full bg-[#F9FAFB] border border-[#F2F4F7] flex items-center justify-center gap-2">
                                {Tabs.map(tab => (
                                    <li key={tab.id} >
                                        <button onClick={() => setActive(tab.id)} className={`py-2 px-[52.5px] text-base font-semibold  leading-6 cursor-pointer ${tab.id === active ? "bg-white rounded-full text-[#012246]" : "text-[#667085]"}`}>{tab.name}</button>
                                    </li>

                                ))}


                            </ul>
                        </div>
                        <div>
                            {active === 1 && (<HomeTabs
                                highlight='Automate'
                                heading='your workflow, right inside your inbox'
                                desc='Free your team from repetitive, manual tasks by letting dot.it’s AI handle the busywork so they can focus on closing deals.'
                                Listing={Listing1}
                                video={automated}
                            />)}
                            {active === 2 && (<HomeTabs
                                highlight='Capture'
                                heading='sales data and make it work for you'
                                desc='Make every client interaction count by automatically capturing, transcribing and summarizing key data points.'
                                Listing={Listing2}
                                video={automated}
                            />)}
                            {active === 3 && (<HomeTabs
                                highlight='Turn'
                                heading='your data into smarter revenue decisions'
                                desc='Harness actionable insights to optimize your strategy, identify trends, address challenges, and drive results.'
                                Listing={Listing3}
                                video={automated}
                            />)}


                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}