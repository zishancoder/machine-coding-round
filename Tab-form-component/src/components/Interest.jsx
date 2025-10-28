import { useState } from "react";

function Interest({data,setData}){
    const {interests}=data;
    const handleChange = (e) => {
       const updatedInterestList = e.target.checked?[...interests,e.target.id]:interests.filter(i=>i!==e.target.id);
       setData(prevState=>({
            ...prevState,
            interests:updatedInterestList
       }))
    }

    return <form className="form-container">
        <div>
            <input type="checkbox" id="coding" onChange={handleChange} checked={interests.includes('coding')}/>
            <label htmlFor="coding">coding</label>
        </div>
        <div>
            <input type="checkbox" id="cricket" onChange={handleChange} checked={interests.includes('cricket')}/>
            <label htmlFor="cricket">cricket</label>
        </div>
        <div>
            <input type="checkbox" id="reading" onChange={handleChange} checked={interests.includes('reading')}/>
            <label htmlFor="reading">reading</label>
        </div>
    </form>
}

export default Interest;