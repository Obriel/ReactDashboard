import React, {  Component, useState} from 'react'
import "./Page1.css";
import Dashboard from './Dashboard';
import Page2 from './Page2';

export default function Page1() {

const [appState,changeState] = useState({
    objects: [{ id: 1, name: "Item1", status: "", toggled: false },
        { id: 2, name: "Item2", status: "", toggled: false },
        { id: 3, name: "Item3", status: "", toggled: false },
        { id: 4, name: "Item4", status: "", toggled: false }
    ]
});



function toggleActive(index){
    let arrayCopy = [...appState.objects];

    arrayCopy[index].toggled
      ? (arrayCopy[index].toggled = false)
      : (arrayCopy[index].toggled = true)


    changeState({ ...appState, objects: arrayCopy })
  

    console.log(appState.objects[index].name);
    console.log(arrayCopy.length);

    const myArray = [appState.objects[index].name] ;
    
    <Dashboard arr = {myArray} />

console.log(myArray);
    
}


function toggleActiveStyles(index){
    if (appState.objects[index].toggled){
        return "box active" ;
        
    } else{
        return "box inactive";
    }
}


function toggleActiveStatus(index){
    if (appState.objects[index].toggled){
        return appState.objects[index].status='Pinned' ;
        
    } else{
        return appState.objects[index].status="";
    } 
}



        return(
            <div>
                
            <div className="Page1">
                

         

                {appState.objects.map((element, index) => (
                    <div key={index} className={`${toggleActiveStatus(index)} ${toggleActiveStyles(index)}`}
                    onClick={() => toggleActive(index)} ><p>{element.name}</p><p>{element.status}</p></div>
                ))}



            </div>
            </div>
        );
    
}