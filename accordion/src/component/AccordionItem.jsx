import { useState } from "react";

const AccordianItem = ({title,description,isOpen,setShowAccordianItemIndex}) =>{
    // const [isOpen,setIsOpen] = useState(false);
    return (
    <div className="accordian-item">
        <div className="accordian-item-title">
            <span>{title}</span>
            <span className="accordian-item-icon" onClick={()=>setShowAccordianItemIndex()}>{isOpen?'⬆️':'⬇️'}</span>
        </div>
        <div className={"accordian-item-description"+(isOpen?'':' hide')}>{description}</div>
    </div>)
}

export default AccordianItem;