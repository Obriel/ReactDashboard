import React from 'react'


export default function Dashboard({dashboard, unpinFromDashboard}) {



    return (
        <div>
            <h1>Dashboard</h1>


            <div className="Page2">

                {dashboard.sort((a,b) => a.page.localeCompare(b.page) || a.id - b.id )
                .map((item, index) => (
                    <div key={index} className="box active" onClick={() => unpinFromDashboard(item)}><p>{item.name}</p><p>{item.page}</p></div>
                ))}

            </div>

        </div>
    );

}