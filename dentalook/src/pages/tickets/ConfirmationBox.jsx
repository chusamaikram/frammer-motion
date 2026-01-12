
import SubmitIcon from "../../assets/images/submitted.svg"
import Button from "../../components/Button"
export default function ConfirmationBox({ setDataSubmit, handleClick }) {
    return (
        <div>
            <div className="px-8 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg/7 font-semibold text-[#101828] capitalize">IT Service Desk Request Submitted</h2>
                <button className="text-gray-500 hover:text-gray-700 text-2xl font-bold" onClick={() => setDataSubmit(false)}>x</button>
            </div>
            <div className=" mx-auto p-8">
                <div className="flex flex-col items-center gap-4">
                    <img className=" object-cover" src={SubmitIcon} alt="submit icon" width={100} height={100} />
                    <p className="text-base/5.5 font-medium text-[#373940] text-center max-w-75">Thank you for submitting the request, what would you like to do next?</p>
                </div>
                <div className="mt-13 flex items-center justify-between gap-6 w-ful bg-white ">
                    <div className="w-full">
                        <Button name="Go To My Dashboard" variant="secondary" to="/" />
                    </div>
                    <div className="w-full">
                        <Button name="Submit Another Ticket" variant="primary" type="button" onClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}
