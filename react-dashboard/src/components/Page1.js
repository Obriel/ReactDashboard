import React, {  Component, useState} from 'react'
import "./Page1.css";
import Dashboard from './Dashboard';
import Page2 from './Page2';

export default function Page1({pinToDashboard}) {

const [appState,changeState] = useState({
    objects: [{ id: 1, name: "Item1", status: "", toggled: false },
        { id: 2, name: "Item2", status: "", toggled: false },
        { id: 3, name: "Item3", status: "", toggled: false },
        { id: 4, name: "Item4", status: "", toggled: false }
    ]
});



function toggleActive(item){
    let arrayCopy = [...appState.objects];

    arrayCopy[item].toggled
      ? (arrayCopy[item].toggled = false)
      : (arrayCopy[item].toggled = true)


    changeState({ ...appState, objects: arrayCopy })
  

    console.log(appState.objects[item].name);
    console.log(arrayCopy.length);

    const myArray = [appState.objects[item].name] ;
    
    <Dashboard arr = {myArray} />

console.log(myArray);
    
}


function toggleActiveStyles(item){
    if (appState.objects[item].toggled){
        return "box active" ;
        
    } else{
        return "box inactive";
    }
}


function toggleActiveStatus(item){
    if (appState.objects[item].toggled){
        return appState.objects[item].status='Pinned' ;
        
    } else{
        return appState.objects[item].status="";
    } 
}



        return(
            <div>
                
            <div className="Page1">
                

         

                {appState.objects.map((element, item) => (
                    <div key={item} className={`${toggleActiveStatus(item)} ${toggleActiveStyles(item)}`}
                    onClick={() => {toggleActive(item); pinToDashboard(item)}} ><p>{element.name}</p><p>{element.status}</p></div>
                ))}



            </div>
            </div>
        );
    
}