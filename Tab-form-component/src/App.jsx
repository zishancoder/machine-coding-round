import { useState } from "react";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Settings from "./components/Settings";

const tabs = [
  {
    name:"Profile",
    component:Profile
  },
  {
    name:"Interest",
    component:Interest
  },
  {
    name:"Settings",
    component:Settings
  }
]

function App(){
  const [activeTab,setActiveTab] = useState(0);
  const [data,setData] = useState({
    name:"",
    email:"",
    interests:[],
    theme:"light"
  })
  console.log(data);
  
  const TabComponent = tabs[activeTab].component;
  const handleActiveTab = (idx) =>{
    setActiveTab(idx);
  }
  return( 
  <div className="container">
    {tabs.map((tab,idx)=><span
     className="tab-heading"
     key={idx}
     onClick={()=>handleActiveTab(idx)}
    >{tab.name}</span>)}
    <div className="tab-body">
      <TabComponent data={data} setData={setData}/>
    </div>
    <div className="tab-footer">
      <button className={"btn" + (activeTab==0?" hide":" ")} onClick={()=>setActiveTab(prev=>prev-1)}>Prev</button>
      <button className={"btn" + (activeTab==tabs.length-1?" hide":" ")} onClick={()=>setActiveTab(prev=>prev+1)}>Next</button>
      <button className={"btn" + (activeTab!==tabs.length-1?" hide":" ")}>Submit</button>
    </div>
  </div>
  )
}

export default App;