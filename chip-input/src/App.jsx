import { useState } from "react";

const App = () => {
  const [data,setData] = useState([]);

  const handleKeyDown = (e) => {
    if(e.key=='Enter'){
      setData([...data,e.target.value]);
      e.target.value='';
    }
  }

  const handleChipDelete = (chipIdx) => {
    const updatedData = data.filter((val,idx)=>idx!=chipIdx)
    setData(updatedData);
  }

  return <div className="container">
    <h1>Input Chips</h1>
    <input type="text" onKeyDown={handleKeyDown}/>
    <div className="chip-container">
      {data.map((val,idx)=>(
        <div className="chip" key={idx}>
          <span className="chip-value">{val}</span>
          <span className="chip-cross-icon" onClick={()=>handleChipDelete(idx)}>❌</span>
        </div>
      ))}
    </div>
  </div>
}

export default App;