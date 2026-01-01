import { useEffect, useRef, useState } from "react";
import MainHeading from "../../components/common/MainHeading";
import ScrolSpySidebar from "../../components/ScrolSpySidebar";
import usePageTitle from "../../hooks/usePageTitle"

export const termsSections = [
    { id: "collect", title: "What information do we collect?" },
    { id: "use", title: "How do we use your information?" },
    { id: "sharing", title: "Sharing Your Information" },
    { id: "security", title: "Data Security" },
    { id: "retention", title: "Data Retention" },
    { id: "privacy", title: "Data & Privacy" },
    { id: "rights", title: "Your Data Protection Rights" },
    { id: "international", title: "International Data Transfers" },
    { id: "links", title: "Third-Party Links" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "law", title: "Governing Law" },
    { id: "changes", title: "Changes to This Privacy Policy" },
];

export default function PrivaceyPolicey() {

    usePageTitle("Privacy Policy | Dot it")


    const [activeId, setActiveId] = useState(termsSections[0].id);
    const sectionRefs = useRef({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -60% 0px" }
        );

        Object.values(sectionRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        sectionRefs.current[id]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };


    return (
        <>
            <section className="mt-[71px] py-20 bg-[#FAFAFA]">
                <div className="container">
                    <MainHeading
                        BeforeColoredtext="Privacy "
                        coloredText="Policy"
                        desc="Your privacy is important to us at dot.it. We respect your privacy regarding any information we may collect from you across our website."
                        descStyle="max-w-[636px] text-center"
                    />
                </div>
            </section>

            <section className="py-10 sm:py-20">
                <div className="container">
                    <div className=" md:px-8 grid grid-cols-1 md:grid-cols-[362px_1fr] md:gap-20 items-start">
                        <ScrolSpySidebar
                            sections={termsSections}
                            activeId={activeId}
                            onNavigate={scrollToSection}

                        />
                        <div className="flex flex-col items-start gap-10">
                            <p className="text-base sm:text-base sm:text-lg leading-7 text-start text-[#777B8B]">dot.it Technologies, Inc. d/b/a "dot.it" ("Dot" or "the company" "we", "us", "our") is a privately held software company, with headquarters in McKinney, Texas. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our SaaS AI Engagement Software ("Service"). By accessing or using our Service, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not use our Service.</p>
                            {termsSections.map((section) => (
                                <div
                                    key={section.id}
                                    id={section.id}
                                    ref={(el) => (sectionRefs.current[section.id] = el)}
                                    className="flex flex-col items-start gap-5 scroll-mt-32"
                                >
                                    <h2 className="text-2xl leading-8 font-semibold text-[#101828]">
                                        {section.title}
                                    </h2>
                                    {section.id === "collect" &&
                                        <div>
                                            <p className="mb-3 text-base sm:text-base sm:text-lg leading-7 text-[#777B8B] text-start">We collect several types of information to provide and improve our Service to you:</p>
                                            <p className="text-lg mb-3 leading-7 font-semibold text-[#101828] text-start">a. Personal Information</p>
                                            <ul className="mb-3 flex flex-col items-start gap-1 ms-5 list-disc">
                                                <li className="text-base sm:text-lg leading-7 font-medium text-[#777B8B] text-start">Contact Information: Name, email address, phone number, and company details.</li>
                                                <li className="text-base sm:text-lg leading-7 font-medium text-[#777B8B] text-start">Account Information: Username, password, and other security information for authentication.
                                                </li>

                                            </ul>
                                            <p className="mb-3 text-base sm:text-base sm:text-lg leading-7 font-semibold text-[#101828] text-start">b. Usage Data</p>
                                            <ul className="mb-3 flex flex-col items-start gap-1 ms-5 list-disc">
                                                <li className="text-base sm:text-lg leading-7 font-medium text-[#777B8B] text-start"> Information about your usage of the Service, including IP address, browser type, operating system, referring URLs, and pages accessed.</li>
                                                <li className="text-base sm:text-lg leading-7 font-medium text-[#777B8B] text-start"> Account Information: Username, password, and other security information for authentication.
                                                </li>

                                            </ul>
                                            <p className="mb-3 text-base sm:text-base sm:text-lg leading-7 font-semibold text-[#101828] text-start">c. Communication Data</p>
                                            <ul className="mb-3 flex flex-col items-start gap-1 ms-5 list-disc">
                                                <li className="text-base sm:text-lg leading-7 font-medium text-[#777B8B] text-start">Data from emails, chats, and other communications you send to us, including metadata.</li>
                                            </ul>
                                            <p className="mb-3 text-base sm:text-base sm:text-lg leading-7 font-semibold text-[#101828] text-start">d. Third-Party Data</p>
                                            <ul className="flex flex-col items-start gap-1 ms-5 list-disc">
                                                <li className="text-base sm:text-lg leading-7 font-medium text-[#777B8B] text-start">Information from third-party services integrated with our Service, such as CRM systems.</li>

                                            </ul>
                                        </div>
                                    }
                                    {section.id === "use" &&
                                        <div>
                                            <p className="mb-2 text-base sm:text-lg leading-7 text-[#777B8B] text-start">We use the collected information for various purposes:</p>
                                            <ul className="flex flex-col items-start gap-1 ms-4 list-disc">
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">To Provide and Maintain the Service: Ensure proper operation and provide features you have requested.</li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">To Improve the Service: Analyze usage to enhance features and functionality.
                                                </li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">To Communicate with You: Respond to inquiries, provide updates, and send marketing communications with your consent.
                                                </li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">To Ensure Security: Monitor and improve the security of our Service.
                                                </li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">To Comply with Legal Obligations: Meet regulatory requirements and legal processes.
                                                </li>

                                            </ul>
                                        </div>
                                    }
                                    {section.id === "sharing" &&
                                        <div>
                                            <p className="mb-2 text-base sm:text-lg leading-7 text-[#777B8B] text-start">We may share your information in the following situations:</p>
                                            <ul className="flex flex-col items-start gap-1 ms-4 list-disc">
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">With Service Providers: Third parties that assist us in providing the Service, such as hosting and analytics services.</li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">For Legal Reasons: When required by law or to protect our rights, property, or safety, or that of others.
                                                </li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">In Business Transfers: In connection with a merger, sale, or acquisition of our company or assets.
                                                </li>

                                            </ul>
                                        </div>
                                    }

                                    {section.id === "security" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
                                    }

                                    {section.id === "retention" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">We retain your information as long as necessary to provide the Service and fulfill the purposes outlined in this Privacy Policy. We may also retain and use your information to comply with legal obligations, resolve disputes, and enforce our agreements.</p>

                                    }

                                    {
                                        section.id === "privacy" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting the updated Terms on our website. Your continued use of the Services after the posting of changes constitutes your acceptance of such changes.
                                        </p>
                                    }

                                    {
                                        section.id === "rights" &&
                                        <div>
                                            <p className="mb-2 text-base sm:text-lg leading-7 text-[#777B8B] text-start">Depending on your location, you may have the following rights regarding your personal information:</p>
                                            <ul className="flex flex-col items-start gap-1 ms-4 list-disc">
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Access: Request a copy of the information we hold about you.</li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Correction: Request correction of any inaccurate information.
                                                </li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Deletion: Request deletion of your personal information.
                                                </li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Objection: Object to processing your information based on legitimate interests.
                                                </li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Restriction: Request restriction of processing under certain circumstances.
                                                </li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Data Portability: Request transfer of your information to another entity.
                                                </li>

                                            </ul>
                                            <p className="m2-2 text-base sm:text-lg leading-7 text-[#777B8B] text-start">To exercise these rights, please contact us at <a href="mailto:support@gotdot.it" className="text-blue-500">support@gotdot.it</a> </p>
                                        </div>
                                    }

                                    {
                                        section.id === "international" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            Your information may be transferred to and processed in countries other than your own. We ensure that such transfers are conducted in accordance with applicable data protection laws and that appropriate safeguards are in place.
                                        </p>
                                    }


                                    {
                                        section.id === "links" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties.                                        </p>
                                    }

                                    {
                                        section.id === "liability" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            These Terms shall be governed and construed in accordance with the laws of Texas/United States, without regard to its conflict of law provisions.                                        </p>
                                    }

                                    {
                                        section.id === "law" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            Any disputes arising out of or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of [Arbitration Association]. The arbitration shall be conducted in Texas / United States.                                        </p>
                                    }

                                    {
                                        section.id === "changes" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.                                       </p>
                                    }

                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}