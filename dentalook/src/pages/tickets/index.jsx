import { useState } from "react"
import TicketForm from "./TicketForm";
import ConfirmationBox from "./ConfirmationBox";
import { TicketFormSchema } from "../../components/TicketFormSchema";

export default function HomePage() {

    const [modelOpen, setModelOpen] = useState(false);
    const [dataSubmit, setDataSubmit] = useState(false);
    const [formHeadeing, setFormHeading] = useState("IT ticket form");

    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        category: "",
        sub_category: "",
        name: "",
        location: "",
        description: "",
        attachment: null,
    });




    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Validate form data
            await TicketFormSchema.validate(formData, { abortEarly: false });

            setErrors({});

            setDataSubmit(true);

            const payload = {
                category: formData.category,
                sub_category: formData.sub_category,
                name: formData.name,
                location: formData.location,
                description: formData.description,
                attachment: formData.attachment,
            };

            alert(JSON.stringify(payload, null, 2));

            setFormData({
                category: "",
                sub_category: "",
                name: "",
                location: "",
                description: "",
                attachment: null,
            });

            setModelOpen(false);

        } catch (err) {
            //  Validation failed
            const validationErrors = {};

            if (err.inner) {
                err.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });
            }

            setErrors(validationErrors);
        }
    }

    const handleClick = () => {
        setDataSubmit(false);
        setModelOpen(false);

    }
    const TicketsBtn = [
        {
            name: "Submit IT Tickets",
            desc: "Information Technology Tickets",
        },
        {
            name: "Submit Payable Tickets",
            desc: "payable Tickets",
        },
        {
            name: "Submit Payroll Tickets",
            desc: "Payroll Tickets",
        },
        {
            name: "Submit HR Tickets",
            desc: "HR Tickets",
        },
        {
            name: "Submit EOD Tickets",
            desc: "EOD Tickets",
        },
        {
            name: "Submit Logistics Tickets",
            desc: "Logistics Tickets",
        },
    ]

   
    return (
        <>
            <div className="w-full flex flex-col items-start gap-4">
                <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] p-8 flex flex-col items-start">
                    <h1 className="text-black text-2xl font-bold leading-8">Tickets Panel</h1>
                    <p className="text-sm leading-5 text-[#757575]">Submit a ticket from one of the following categories</p>
                </div>
                <div className="w-full bg-white rounded-[10px] border border-[#E2E8F0] py-12 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8">
                    {TicketsBtn.map((btn, index) => (
                        <button key={index} className=" p-4 rounded-lg border border-[#E2E8F0] hover:border-[#087BB3] flex flex-col items-center justify-center gap-1 font-['Urbanist']" onClick={() => {
                            setFormHeading(btn.name);
                            setModelOpen(true)
                        }}>
                            <h3 className="text-base font-semibold leading-9.5 text-[#131313]">{btn.name}</h3>
                            <p className="text-[12px] font-semibold leading-4.5 text-[#475569] capitalize">{btn.desc}</p>

                        </button>
                    ))}


                </div>
            </div>


            {(modelOpen || dataSubmit) &&
                <>
                    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
                        <div className="relative max-w-[682px] w-full max-h-[calc(100vh-50px)] overflow-y-auto bg-white shadow-xl rounded-lg transform transition-all duration-300 opacity-100 translate-y-0 scale-100">
                            {!dataSubmit &&
                                <TicketForm
                                    formHeadeing={formHeadeing}
                                    formData={formData}
                                    setFormData={setFormData}
                                    handleSubmit={handleSubmit}
                                    setModelOpen={setModelOpen}
                                    errors={errors}
                                    setErrors={setErrors}
                                />
                            }

                            {dataSubmit &&
                                <ConfirmationBox
                                    setDataSubmit={setDataSubmit}
                                    handleClick={handleClick}
                                />
                            }
                        </div>
                    </div>

                </>
            }
        </>
    )
}