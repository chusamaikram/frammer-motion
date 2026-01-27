
import Button from "../../components/Button";
import MediaUpload from "../../components/MediaInput";

export default function TicketForm({ formHeadeing, formData, setFormData, handleSubmit, setModelOpen, errors, setErrors }) {



    const activeStyle = "bg-[#087BB3] text-white border-[#087BB3]";
    const inactiveStyle = "bg-[rgba(208,213,221,0.25)] text-[#373940] border-[#D0D5DD]";
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="px-4 sm:px-8 py-2 sm:py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg/7 font-semibold text-[#101828] capitalize">{formHeadeing}</h2>
                <button className="text-gray-500 hover:text-gray-700 text-2xl font-bold" onClick={() => setModelOpen(false)}>x</button>
            </div>

            <div className="p-4 sm:p-8 flex flex-col items-start gap-8 w-full">
                <div className="w-full">
                    <p className="text-[#373940] text-base font-medium leading-normal ">What would you like assistance with?</p>
                    <div className="mt-3">
                        <div className=" flex flex-col sm:flex-row items-center justify-between gap-3">
                            {["General", "Software", "Hardware"].map((item, index) => (
                                <button key={index} type="button"
                                    onClick={() => {
                                        setFormData({ ...formData, category: item })
                                        setErrors({ ...errors, category: null });
                                    }}
                                    className={`px-4 py-2 rounded-4xl  flex items-center justify-center w-full text-sm font-medium border ${formData.category === item ? activeStyle : inactiveStyle} `}>
                                    {item}
                                </button>

                            ))}
                        </div>
                        {errors.category && (
                            <p className="text-sm text-red-500 ">{errors.category}</p>
                        )}
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-[#373940] text-base font-medium leading-normal ">Which device you have an issue with?</p>
                    <div className="mt-3 ">
                        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-3">
                            {["Imaging", "Computers", "Phones", "Xrays", "Printers", "Scanners"].map((item, index) => (
                                <button key={index} type="button"
                                    onClick={() => {
                                        setFormData({ ...formData, sub_category: item })
                                        setErrors({ ...errors, sub_category: null });
                                    }}
                                    className={`px-4 py-2 rounded-4xl  flex items-center justify-center w-full text-sm font-medium border ${formData.sub_category === item ? activeStyle : inactiveStyle} `}>
                                    {item}
                                </button>
                            ))}
                        </div>
                        {errors.sub_category && (
                            <p className="text-sm text-red-500 ">{errors.sub_category}</p>
                        )}
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="name" className="text-base/normal font-medium text-[#373940]">What is the computer name? <span className="text-red-400">*</span></label>
                    <input type="text"
                        value={formData.name}
                        onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            setErrors({ ...errors, name: null });
                        }}
                        className={`mt-2 px-4 py-2.5 rounded-lg border  ${errors.name ? "border-red-500" : "border-[#D9DADF]"} outline-none w-full text-sm text-[#636E72]`}
                        placeholder="Enter Computer Name" />
                    {errors.name && (
                        <p className="text-sm text-red-500 ">{errors.name}</p>
                    )}
                </div>
                <div className="w-full">
                    <label htmlFor="location" className="text-base/normal font-medium text-[#373940]">Where is the computer located at? <span className="text-red-400">*</span></label>
                    <input type="text"
                        value={formData.location}
                        onChange={(e) => {
                            setFormData({ ...formData, location: e.target.value });
                            setErrors({ ...errors, location: null });
                        }}
                        className={`mt-2 px-4 py-2.5 rounded-lg border  ${errors.location ? "border-red-500" : "border-[#D9DADF]"} outline-none w-full text-sm text-[#636E72]`}
                        placeholder="Enter Computer Location" />
                    {errors.location && (
                        <p className="text-sm text-red-500 ">{errors.location}</p>
                    )}
                </div>
                <div className="w-full">
                    <label htmlFor="message" className="text-base/normal font-medium text-[#373940]">Please provide a detailed description of the issue. <span className="text-red-400">*</span></label>
                    <textarea type="text"
                        value={formData.description}
                        onChange={(e) => {
                            setFormData({ ...formData, description: e.target.value });
                            setErrors({ ...errors, description: null });
                        }}
                        className={`mt-2 min-h-[70px] resize-none px-4 py-2.5 rounded-lg border  ${errors.description ? "border-red-500" : "border-[#D9DADF]"} outline-none w-full text-sm text-[#636E72]`}
                        placeholder="Enter Ticket Details Here..." />
                    {errors.description && (
                        <p className="text-sm text-red-500 ">{errors.description}</p>
                    )}
                </div>
                <MediaUpload />
            </div>

            <div className="flex items-center justify-between gap-6 w-ful px-8  pb-8 bg-white ">
                <div className="w-full">
                    <Button name="Cancel" variant="secondary" type="button" onClick={() => setModelOpen(false)} />
                </div>
                <div className="w-full">
                    <Button name="Submit Ticket" variant="primary" type="submit" />
                </div>
            </div>
        </form>
    )
}