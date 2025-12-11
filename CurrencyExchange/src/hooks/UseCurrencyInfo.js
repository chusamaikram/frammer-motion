
import { useEffect, useState } from "react";

export default function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res[currency]);
                setData(res[currency]);
            })
            .catch((err) => console.error("Failed to fetch currency data:", err));
    }, [currency]); 

    return data;
}
