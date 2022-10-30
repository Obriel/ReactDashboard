import React, { Component, useState } from 'react'
import "./Page2.css";
import Dashboard from './Dashboard';

export default function Page2({ pinToDashboard, unpinFromDashboard }) {

  const [toggle, setToggle] = useState(false)

  const [items, changeState] = useState([
    { id: 1, name: "item1", page: "Page 2", status: "", toggled: false },
    { id: 2, name: "item2", page: "Page 2", status: "", toggled: false },
    { id: 3, name: "item3", page: "Page 2", status: "", toggled: false },
    { id: 4, name: "item4", page: "Page 2", status: "", toggled: false }
  ]);



  const handleCheck = (index) => {
    let new_array = items;
    new_array[index].toggled = !new_array[index].toggled;
    changeState(new_array);

    console.log(new_array[index].name +" "+ new_array[index].toggled);
 }




const toggleActiveStyles = (index) => {
  if (items[index].toggled) {
    return "box active" ;
    
} else{
    return "box inactive";
}
}


const toggleActiveStatus = (index) => {
    if (items[index].toggled ){
        return items[index].status='(Pinned)';
        
    } else{
        return items[index].status="";
    } 
}



  return (
    <div>
      <h1>Page 2</h1>


      <div className="Page2">

        {items.map((item, index) => (
          <div key={index} className={toggleActiveStyles(index)}
          onClick={() => {handleCheck(index); pinToDashboard(item); toggleActiveStatus(index)}}><p>{item.name}</p><p>{item.status}</p></div>
        ))}

      </div>
    </div>
  );


}
