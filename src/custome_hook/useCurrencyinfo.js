import { useEffect, useState } from 'react'


function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    useEffect( function () {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then( (response) => response.json() )
        .then( (data) => setData(data[currency]) )
        console.table(data);

    }, [currency])

    return data

}


export default useCurrencyInfo