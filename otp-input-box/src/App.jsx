import { useEffect, useRef, useState } from "react"

const DIGITS_IN_OTP = 5;

function App() {
  const [digitsArray, setDigitsArray] = useState(new Array(DIGITS_IN_OTP).fill(''));
  // const inputList = useRef([]);
  const inputList = [];

  useEffect(()=>{
    // inputList.current[0].focus();
    inputList[0].focus();
  },[]);

  const handleInput = (e, idx) => {
    if(isNaN(e.target.value)) return;
    const newArray = [...digitsArray];
    newArray[idx] = e.target.value.slice(-1);
    if(e.target.value.trim())
      // inputList.current[idx+1]?.focus();
      inputList[idx+1]?.focus();
    setDigitsArray(newArray);
  }

  const handleKeyDown=(e,idx)=>{
   if(e.target.value || e.key!="Backspace") return;
    // inputList.current[idx-1]?.focus();
    inputList[idx-1].focus()
  }

  return (
    <div className="container">
      <h1>OTP</h1>
      <div>
        {digitsArray.map((val, idx) => (
          <input key={idx} type="text" 
            className="digit-box" 
            onChange={(e) => handleInput(e, idx)} 
            value={val}
            // ref={(ref)=>inputList.current[idx]=ref}
            ref={(ref)=>inputList.push(ref)}
            onKeyDown={(e)=>handleKeyDown(e,idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
