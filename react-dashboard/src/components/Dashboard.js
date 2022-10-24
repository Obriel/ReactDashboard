import React from 'react'
import Page1 from './Page1';


export default function Dashboard(props) {


 
    return(
        <div>
            <h1>Dashboard</h1>

           {/* <Page1/> */}
           {props.arr}
            
        </div>
    );

}