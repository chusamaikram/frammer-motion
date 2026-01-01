import { useEffect, useRef, useState } from "react";
import MainHeading from "../../components/common/MainHeading";
import ScrolSpySidebar from "../../components/ScrolSpySidebar";
import usePageTitle from "../../hooks/usePageTitle";


export const termsSections = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "registration", title: "Registration and Account" },
    { id: "use", title: "Use of the Services" },
    { id: "changes", title: "Changes to Terms" },
    { id: "fees", title: "Fees & Payment" },
    { id: "privacy", title: "Data & Privacy" },
    { id: "intellectual", title: "Intellectual Property" },
    { id: "termination", title: "Termination" },
    { id: "disclaimer", title: "Disclaimer of Warranties" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "law", title: "Governing Law" },
    { id: "dispute", title: "Dispute Resolution" },
];
export default function TermsConditions() {

    usePageTitle("Terms & Conditions | Dot it")



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
            <section className="mt-[71px] py-10 sm:py-20 bg-[#FAFAFA]">
                <div className="container">
                    <MainHeading
                        BeforeColoredtext="Terms &"
                        coloredText=" Conditions"
                        desc="By accessing our website, you are agreeing to be bound by these terms of service, and agree that you are responsible for compliance with any applicable local laws."
                        descStyle="max-w-[636px] text-center"
                    />
                </div>
            </section>

            <section className="py-8 sm:py-20">
                <div className="container">
                    <div className="md:px-8 grid grid-cols-1 md:grid-cols-[362px_1fr] md:gap-20 items-start">
                        <ScrolSpySidebar
                            sections={termsSections}
                            activeId={activeId}
                            onNavigate={scrollToSection}

                        />
                        <div className="flex flex-col items-start gap-10">
                            <p className="text-base sm:text-lg leading-7 text-start text-[#777B8B]">Welcome to dot.it Technologies, Inc., d/b/a “dot.it” (“dot.it” the company "we", "us", "our"). These Terms of Service ("Terms") govern your use of our sales engagement software and related services (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the Services.</p>
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

                                    {section.id === "acceptance" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            By accessing or using the Services, you represent that you have the legal authority to accept these Terms on behalf of yourself or the entity you represent. If you do not have such authority, you may not use the Services.
                                        </p>
                                    }
                                    {section.id === "registration" &&
                                        <ul className="flex flex-col items-start gap-1 ms-4 list-disc">
                                            <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">You may need to create an account to access some features of the Services. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</li>
                                            <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">You are responsible for safeguarding your account password and for any activities or actions under your account. You agree to notify us immediately of any unauthorized use of your account.
                                            </li>

                                        </ul>
                                    }
                                    {section.id === "fees" &&
                                        <ul className="flex flex-col items-start gap-1 ms-4 list-disc">
                                            <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Some parts of the Services may be offered on a subscription basis or for a fee. The specific terms related to pricing and payment will be provided at the time of purchase.</li>
                                            <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">You agree to pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable.
                                            </li>
                                            <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">We reserve the right to change our prices at any time. Any price change will be effective at the end of the then-current billing cycle.
                                            </li>

                                        </ul>
                                    }
                                    {section.id === "intellectual" &&
                                        <ul className="flex flex-col items-start gap-1 ms-4 list-disc">
                                            <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">The Services and all content, including but not limited to software, images, text, graphics, illustrations, logos, and patents, are owned by us or our licensors and are protected by intellectual property laws.</li>
                                            <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">You are granted a limited, non-exclusive, non-transferable, revocable license to use the Services solely for your internal business purposes.
                                            </li>
                                            <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">You shall not modify, reproduce, distribute, create derivative works of, publicly display, or perform any part of the Services without our prior written consent.
                                            </li>

                                        </ul>
                                    }

                                    {section.id === "termination" &&
                                        <ul className="flex flex-col items-start gap-1 ms-4 list-disc">
                                            <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">We may terminate or suspend your account and access to the Services at any time, without prior notice or liability, if you breach these Terms.</li>
                                            <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services.
                                            </li>

                                        </ul>
                                    }

                                    {section.id === "use" &&
                                        <div className="flex flex-col items-start gap-3">
                                            <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">a. You agree to use the Services only for lawful purposes and in accordance with these Terms.</p>
                                            <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">b. You shall not:</p>
                                            <ul className="flex flex-col items-start gap-1 ms-4 list-disc">
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Use the Services in any manner that could disable, overburden, damage, or impair the Services or interfere with any other party’s use of the Services.
                                                </li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Attempt to gain unauthorized access to any part of the Services. </li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Use any automated means to access the Services. </li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Use the Services to store or transmit malicious code. </li>
                                                <li className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">Resell, lease, or provide the Services in any commercial context to a third party. </li>

                                            </ul>
                                        </div>
                                    }

                                    {
                                        section.id === "changes" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting the updated Terms on our website. Your continued use of the Services after the posting of changes constitutes your acceptance of such changes.
                                        </p>
                                    }

                                    {
                                        section.id === "privacy" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            Our [Privacy Policy](link to Privacy Policy) describes how we collect, use, and disclose information about our users. By using the Services, you agree to our Privacy Policy.
                                        </p>
                                    }

                                    {
                                        section.id === "disclaimer" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            The Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.
                                        </p>
                                    }


                                    {
                                        section.id === "limitation" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            In no event shall we, our directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of or inability to use the Services.
                                        </p>
                                    }

                                    {
                                        section.id === "governing" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            These Terms shall be governed and construed in accordance with the laws of Texas/United States, without regard to its conflict of law provisions.                                        </p>
                                    }

                                    {
                                        section.id === "dispute" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            Any disputes arising out of or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of [Arbitration Association]. The arbitration shall be conducted in Texas / United States.                                        </p>
                                    }

                                    {
                                        section.id === "contact" &&
                                        <p className="text-base sm:text-lg leading-7 text-[#777B8B] text-start">
                                            If you have any questions about these Terms, please contact us at support@gotdot.it.
                                            By using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service..                                        </p>
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