import React, {  Component, useState} from 'react'
import "./Page1.css";

export default function Page1() {
    

const [appState,changeState] = useState({
    objects: [{ id: 1, toggled: false },
        { id: 2, toggled: false },
        { id: 3, toggled: false },
        { id: 4, toggled: false }
    ]
});

function toggleActiveStyles(index){
    if (appState.objects[index].toggled){
        return "box active";
    } else{
        return "box inactive";
    }
}

        return(
            <div className="Page1">
                <h1>Page 1</h1>
                {appState.objects.map((element, index) => (
                    <div key={index} className={toggleActiveStyles(index)}></div>
                ))}
            </div>
        )
    
}