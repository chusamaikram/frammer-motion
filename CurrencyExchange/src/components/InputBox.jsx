


import { useId } from "react";

export default function InputBox({
    label,
    amount,
    onAmountChange,
    currencyOptions = [],
    selectedCurrency,
    onCurrencyChange,
    amountDisabled = false,
    currencyDisabled = false
}) {
    const inputId = useId();

    return (
        <div className="bg-white p-3 rounded-lg flex">
            <div className="w-1/2">
                <label className="text-black/20 inline-block mb-2" htmlFor={inputId}>
                    {label}
                </label>
                <input
                    id={inputId}
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onAmountChange(Number(e.target.value))}
                    disabled={amountDisabled}
                    className="outline-none bg-transparent py-1.5 w-full"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="w-full text-black/20 mb-2">Currency Type</p>
                <select
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                    className="rounded-lg bg-gray-100 outline-none p-1 cursor-pointer"
                >
                    {currencyOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
