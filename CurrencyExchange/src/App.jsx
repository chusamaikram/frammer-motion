


import { useState } from "react";
import InputBox from "./components/InputBox";
import UseCurrencyInfo from "./hooks/UseCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = UseCurrencyInfo(from); 
  const options = Object.keys(CurrencyInfo);

  const convert = () => {
    if (!CurrencyInfo[to]) return;
    
    const result = (amount / CurrencyInfo[from]) * CurrencyInfo[to];
    setConvertedAmount(result.toFixed(2));
  };

  const swap = () => {
    setFrom(to);
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg')"
      }}
    >
      <div className="w-full flex items-center">
        <div className="w-full mx-auto rounded-lg p-5 border border-gray-60 backdrop-blur-sm bg-white/30 max-w-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                selectedCurrency={from}
                onCurrencyChange={setFrom}
                onAmountChange={setAmount}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                selectedCurrency={to}
                onCurrencyChange={setTo}
                amountDisabled
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-blue-600 text-white px-4 py-3"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
