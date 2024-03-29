import { useState } from 'react'
//IMPORTING COMPONENT
import { InputBox } from './components'   //we not have to write index file(since index file is in component folder)bcoz index file is called by default
//IMPORTING HOOK
import useCurrencyInfo from './hooks/useCurrencyInfo'   //here we have to mention file name(hooks) but above we don't have to do this. (Reason Above)


function App() {

  //since the state of the below variables gets changed, we use useState hook
  const [amount, setAmount] = useState(0)   //input amount passed by the User
  const [from, setFrom] = useState('usd')   //from which currency to convert
  const [to, setTo] = useState('inr')       //convert to which currency
  const [convertedAmount, setConvertedAmount] = useState(0) //calculated(Converted) Amount

  const currencyInfo = useCurrencyInfo(from)  //since useCurrencyInfo wants an argument, so we passed it the value which is stored in the from variable(which is the user passed input value) & then we have stored it in the var currencyInfo
  //it 'll also not get crashed bcoz there is a by default 'usd' value. In the currencyInfo we 'll get the user selected key-value pair of the currency (like- usd: x-amt)

  const options = Object.keys(currencyInfo) //now we have hold the key value(like usd, inr) in the variable 'options' here

  //for Swap functionality we have created a swap function
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])  //this is the state that 'll display the final convertedAmount to the user
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://wallpapers.com/images/hd/stock-market-background-04542iaa3qfiztzd.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();   //when the form gets submitted then it goes to an url or an address, we don't want that so we have prevented it
                        convert() //the convert method should also get called when user submit the form
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}     //to get the user enterd amount
                            currencyOptions={options}   //to get the currency options(like usd, inr) from the above options variable
                            onCurrencyChange={(currency) => setAmount(amount)}  //NOT SURE: the amount in the setAmout gets changed
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}  //bcoz of this the value 'll change in the user input
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable   //this means the value of amountDisable is True
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
