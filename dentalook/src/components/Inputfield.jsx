export default function InputField({
    label,
    type = "text",
    value,
    setValue,
    placeholder,
    id
}) {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="flex flex-col gap-1">
            <label
                htmlFor={inputId}
                className="text-sm font-semibold leading-5 text-[#2D3748] font-['Urbanist']"
            >
                {label}
            </label>

            <input
                id={inputId}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="w-full h-12.5 px-5 rounded-[15px] border border-[#E2E8F0] text-sm leading-5 text-[#A0AEC0] outline-none"
            />
        </div>
    );
}
