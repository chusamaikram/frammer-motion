import { useCallback, useEffect, useRef, useState } from "react"

export default function PasswordGenerator() {
    const [length, setlength] = useState(8);
    const [pasword, setPasword] = useState("");
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);

    const paswordGenerator = useCallback(() => {
        let pas = "";
        let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) string += "0123456789";
        if (charAllowed) string += "!@#$%^&*";

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * string.length);

            pas += string.charAt(char);
        }
        setPasword(pas);

    }, [length, numberAllowed, charAllowed, setPasword])

    useEffect(() => {
        paswordGenerator();
    }, [length, numberAllowed, charAllowed, setPasword,])

    const paswordRef = useRef(null);
    const btnRef = useRef(null);

    const CopyToClipboard = () => {
        paswordRef.current?.select();
        navigator.clipboard.writeText(pasword);
        btnRef.current.innerText = "Copied";
        setTimeout(() => {
            btnRef.current.innerText = "Copy";
        }, 2000);

    }

    return (
        <>
            <div className="flex items-center justify-center my-15 text-white">
                <div className="bg-gray-500 p-6 rounded-lg w-120">
                    <h1 className="text-center font-semibold text-[44px] py-8 ">Password Generator</h1>
                    <div className="flex items-center">
                        <input type="text"
                            ref={paswordRef}
                            className="text-orange-400 px-4 py-3 w-full bg-white rounded-lg outline-none"
                            value={pasword}
                            onChange={(e) => { setPasword(e.target.value) }}
                            readOnly />
                        <button className="bg-blue-500 min-w-18 cursor-pointer text-white font-semibold p-3 rounded-lg"
                            onClick={CopyToClipboard}
                            ref={btnRef}
                        >
                            Copy
                        </button>
                    </div>
                    <div className="flex items-center mt-6 justify-between">
                        <div className="flex flex-col items-start">
                            <input type="range"
                                min={6}
                                max={15}
                                value={length}
                                className="cursor-pointer h-5"
                                onChange={((e) => { setlength(e.target.value) })} />
                            <label className="">pasword length : {length}</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input type="checkbox"
                                value={numberAllowed}
                                onChange={() => { setNumberAllowed(!numberAllowed) }}
                                className="w-5 h-5"
                            />
                            <label>Numbers: </label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input type="checkbox"
                                value={charAllowed}
                                onChange={() => { setCharAllowed(!charAllowed) }}
                                className="w-5 h-5"
                            />
                            <label>Special characters: </label>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}