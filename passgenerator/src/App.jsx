import { useCallback, useState, useEffect } from "react";

import "./App.css";

function App() {
  const [lengthh, setlength] = useState(8);
  const [numallowed, setnumallowed] = useState(false);
  const [symbol, setsymbol] = useState(false);
  const [password, setpassword] = useState("");



  const passg = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallowed) {
      str += "123456789";
    }
    if (symbol) {
      str += "!@#$%^&*()";
    }
    for (let i = 1; i <= lengthh; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      
    }
    setpassword(pass);
  }, [lengthh, numallowed, symbol, setpassword]);
  
  useEffect(()=> {passg()},[ lengthh,numallowed,symbol,passg])

  return (
    <>
      <div className="container w-[40vw] card mx-auto">
        <h1 className="text-4xl text-center text-white">
          Password Generator
          <div>
           
            <input
              className="border outline-none to-black text-black"
readOnly
              type="text"
              value={password}
              name=""
              id="col"
            />
          </div>
          <div className="flex ">
            <input
              type="range"
              min={8}
              max={100}
              value={lengthh}
              onChange={(e) => {
                setlength(e.target.value);
              }}
              name="rang"
              id="rang"
            />
            <label className="font-light text-sm" htmlFor="rang">
             
              length {`${lengthh}`}
            </label>
            <input
              type="checkbox"
              defaultChecked={numallowed}
              onChange={(prev) => {
                setnumallowed(!prev);
              }}
              name=""
              id=""
            />
            <input
              type="checkbox"
              defaultChecked={symbol}
              onChange={(prev) => {
                setsymbol(!prev);
              }}
              name=""
              id=""
            />
          </div>
        </h1>
      </div>
    </>
  );
}

export default App;
