import { useEffect, useState } from "react"

//we use js instead of jsx bcoz hooks mainly return js most of the time not jsx
//custom hooks can use built-in hooks
//it's a default practice that whenever we use or create hooks we create them with the name 'use' at the starting

// this hook will return some data
// we want that when the hook gets load or when someone uses it then the hook or API gets called
function useCurrencyInfo(currency){     //some hooks take optional arguments but our hook does not take optional argument
    const [data, setData] = useState({})
    //useEffect first takes a callback and then dependency array(that if there is a change in the dependencies then api 'll again get called)
    useEffect( () => {
        fetch(`https://open.exchangerates.org/latest?base={currency}.json`)
        .then((res) => res.json())
        .then( (res) => setData(res[currency]))  //here [currency] 'll be the currency vlue like 'usd', 'inr' which is passed by the user & then bcoz of the setData method the the value of the data variable 'll be set to res[currency], res is a json object
        //bcoz of the above line we'll get the full key-value pair of a particular user selected currency type. But we only want the key(like 'inr')
        console.log(data);
    }, [currency])  //we call the useEffect when there is a change in dependency(means here when there is a change in currency variable)
    console.log(data);
    return data
}

export default useCurrencyInfo