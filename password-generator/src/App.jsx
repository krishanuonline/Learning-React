import { useState, useCallback, useEffect, useRef } from "react";
// import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [allowNo, setAllowNo] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (allowNo) str += "0123456789";
    if (allowChar) str += "!@#$%^&*()_+={}`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);


  }, [length, allowNo, allowChar, setPassword]);

  const cpoyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{passwordGenerator()},[length,allowNo,allowChar,passwordGenerator])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={cpoyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />

          <label htmlFor="">Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultValue={allowNo}
            id="numberInput"
            onChange={() => {
              setAllowNo((prev) => !prev);
            }}
          />
          <label htmlFor="">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultValue={allowChar}
            id="CharacterInput"
            onChange={() => {
              setAllowChar((prev) => !prev);
            }}
          />
          <label htmlFor="">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
