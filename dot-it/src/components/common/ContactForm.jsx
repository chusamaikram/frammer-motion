import Button from "../common/Button"
import { Formik } from "formik";
import { contactSchema } from "../ContactSchema";
export default function ContactForm({ heading, desc, img }) {
    return (
        <>
            <section className="py-10 md:py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-[minmax(100px,698px)_minmax(100px,582px)] gap-y-10 items-center">
                        <div className="flex flex-col items-start px-10">
                            <h2 className="text-[30px] font-semibold leading-9.5 ">{heading} </h2>
                            <p className="text-[#777B8B] text-base font-medium leading-6 mt-2">{desc}</p>
                            <Formik
                                initialValues={{
                                    name: "",
                                    email: "",
                                    message: "",
                                }}
                                validationSchema={contactSchema}
                                onSubmit={async (values, { resetForm }) => {
                                    await new Promise((res) => setTimeout(res, 1000));
                                    alert("Form submitted successfully");
                                    resetForm();
                                }}
                            >
                                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="mt-8 flex flex-col items-start gap-6 w-full"
                                    >
                                        {/* Name */}
                                        <div className="flex flex-col items-start w-full">
                                            <label className="text-[#344054] font-medium">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Full name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="mt-1.5 px-4 py-3.5 rounded-2xl bg-[#F5F5F5] w-full text-base outline-none text-[#A4A7AE]"
                                            />
                                            {errors.name && touched.name && (
                                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-col items-start w-full">
                                            <label className="text-[#344054] font-medium">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="You@example.com"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="mt-1.5 px-4 py-3.5 rounded-2xl bg-[#F5F5F5] w-full text-base outline-none text-[#A4A7AE]"
                                            />
                                            {errors.email && touched.email && (
                                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div className="flex flex-col items-start w-full mb-2">
                                            <label className="text-[#344054] font-medium ">Message</label>
                                            <textarea
                                                name="message"
                                                placeholder="Leave us a message"
                                                value={values.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="mt-1.5 px-4 py-3.5 rounded-2xl bg-[#F5F5F5] w-full min-h-[158px] resize-none outline-none text-[#A4A7AE]"
                                            />
                                            {errors.message && touched.message && (
                                                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                            )}
                                        </div>

                                        <Button variant="arrow" type="submit" disabled={isSubmitting}>
                                            Request a demo
                                        </Button>
                                    </form>
                                )}
                            </Formik>
                        </div>
                        <div className="w-full overflow-hidden">
                            <img className="w-full h-auto object-cover " src={img} alt="dot it thumbnail" width={582} height={582} loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}