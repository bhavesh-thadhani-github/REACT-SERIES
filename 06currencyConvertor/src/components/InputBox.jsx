import React, {useId} from 'react'
// useId is an another new hook. There are 1000s of hooks in react & we can also create & publish our custom hooks
// here we are using useId hook for more optimized code & performance

function InputBox({
    label,      //means what are we taking from the user-> FROM or TO
    amount,     //what Amount the User 'll pass
    onAmountChange,     //this 'll be a method
    onCurrencyChange,   //(method) to change the currency type
    currencyOptions = [],   //we 'll loop the currencyOptions through array, we have to taken an empty array so that our app do not get crash
    selectCurrency = 'usd', //what currency will be selected by the user
    amountDisable = false,  //in case or if the user does not pass any amount. This thing is required in production grade app
    currencyDisable = false,    //same as above
    
    className = "",
}) {
   
    const amountInputId = useId()   //this useId hook 'll return a amountInputId value

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}     {/* by wrapping it, we 'll get the data through the variable */}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}    //the input field is enabled or disabled
                    value={amount}              //value means the amount that user 'll pass
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}  //every input box has an onChange value(means the input value gets changed)
                    //onAmountChange method(access) gets fired when the input value gets changed
                    //we have not passed any default value to the onAmountChange function, so there are possibilities that it can get crash if no one passes any value
                    //the line after && is like a checker, which checks that if there is a value exists or not & if yes then only the onAmountChange function fires
                    //JS takes the value in the events in String format, so we have to convert it into Number format
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}  //the default value(if the user does not choose any currency type) is usd
                    //when the option gets changed then currency value should also gets changed, that's why we use onCurrencyChange
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}  //e means when the event gets fired, here also we have checker like above
                    disabled={currencyDisable}      //to check the currency field is enable or disable
                >
                    
                        {currencyOptions.map((currency) => (<option key={currency} value={currency}>   {/* we 'll get returned this option component */} {/* currency means each value that we get from the currencyOptions array */}
                            {currency}      {/* This currency value 'll get displayed to the user & the abover value={currency} gets displayed to server */} 
                        </option>))}        {/*REMEMBER THE KEY IN LOOPS IN REACT(jsx)(FOR PERFORMANCE). whenever we loop on a jsx then we have to pass a key */} {/*we can also take index values(0,1,2) in key instead of currency value, but currency is better option bcoz there can be performance drawbacks in index values. We can also take ID's from DB*/}
                    {/*FOR KEY-> DOM 'll create 1 element multiple (or 1000) times bcoz the currency value 'll gets changed, so there 'll be performance degradation*/}                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
