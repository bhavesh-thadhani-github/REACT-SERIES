import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  //Taking necessary variables
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)  //L15

  // the first thing we pass to useCallback hook is a function and then dependencies(inside the array)
  const passwordGenerator = useCallback(() => {   //L1
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";   //L2
    if (charAllowed) str += '!@#$%^&*()-_=+[]{}~`"<>?/';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);  //L3
      pass += str.charAt(char);   //L4
    }
    setPassword(pass);  //setPassword insert the value of pass in the password variable(above)
  }, [length, numberAllowed, charAllowed, setPassword]);  //inside the arrays, these are dependencies 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()   //L16
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)  //L17
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}  //L5
            className="outline-none w-full py-1 px-3"
            placeholder="password"  //L6
            readOnly  //L7
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"  //L8
              min={6}       //L9
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {    //L10
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"   //L11
            defaultChecked={numberAllowed}  //L12
            id="numberInput"
            onChange={() => {   //L13
              setNumberAllowed((prev) => !prev);  //L14
            }}
          />
          {/* L15 (htmlFor) */}
          <label htmlFor="numberInput">Numbers</label>  

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              />
            <label htmlFor="characterInput">Characters</label>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
