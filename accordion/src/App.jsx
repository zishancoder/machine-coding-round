import { useState } from 'react';
import data from '../data.json';
import AccordianItem from './component/AccordionItem';


const App = () => {
  const [showAccordianItemIndex,setShowAccordianItemIndex]=useState(null);
  return <div className="container">
    <h2>Accordian</h2>
    <div className='accordion'>
      {data.map((item,index)=>(
        <AccordianItem 
          key={index} 
          title={item.title} 
          description={item.description}
          isOpen={showAccordianItemIndex!=null?(index===showAccordianItemIndex):false}
          setShowAccordianItemIndex={()=>setShowAccordianItemIndex(index)}
        />
      ))}
    </div>
  </div>
}

export default App;