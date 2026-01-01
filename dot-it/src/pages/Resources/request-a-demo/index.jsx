
import FormThumbnail from "../../../assets/images/form-thumbnail.webp"
import ContactForm from "../../../components/common/ContactForm"
import MainHeading from "../../../components/common/MainHeading"
import usePageTitle from "../../../hooks/usePageTitle"

export default function RequestDemo() {

    usePageTitle("Request a Demo | Dot it")
    return (
        <>
            <section className="bg-[#FAFAFA] mt-[71px] py-20">
                <div className="container">
                    <MainHeading
                        BeforeColoredtext="See"
                        coloredText="dot.it"
                        AfterColoredtext="in action"
                        desc="Ready to experience how dot.it transforms your inbox into your smartest sales tool?"
                    />
                </div>
            </section>
            <ContactForm heading="Book your demo "
                desc="Our team will walk you through key features, integrations, and real use cases to help you get started."
                img={FormThumbnail} />

        </>

    )
}