import React from 'react'
import Page1 from './Page1';


export default function Dashboard({dashboard, unpinFromDashboard}) {



    return (
        <div>
            <h1>Dashboard</h1>


            <div className="Page2">

                {dashboard.sort((a,b) => a.id > b.id ? 1 : -1)
                .map((item, index) => (
                    <div key={index} className="box active" onClick={() => unpinFromDashboard(item)}><p>{item.name}</p><p>{item.page}</p></div>
                ))}

            </div>

        </div>
    );

}