import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
            const jsonData = await response.json();

            setData(jsonData[currency]);
        }

        fetchData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;