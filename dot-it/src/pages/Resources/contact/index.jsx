import ContactForm from "../../../components/common/ContactForm";
import ContactThumbnail from "../../../assets/images/form-thumbnail.webp"
import MainHeading from "../../../components/common/MainHeading";
import usePageTitle from "../../../hooks/usePageTitle";

export default function ContactUs() {

    usePageTitle("Contact Us | Dot it")
    return (
        <>
            <section className=" mt-[71px] py-10 md:py-20 bg-[#FAFAFA]">
                <div className="container">
                    <MainHeading BeforeColoredtext="Let's connect and" coloredText="dot.it"
                        desc="Have questions? Your thoughts and feedback are important to us." />
                </div>
            </section>
            <ContactForm
                heading="Ready to dot your i’s and cross your t’s"
                desc="Our friendly team would love to hear from you."
                img={ContactThumbnail} />

        </>
    )
}