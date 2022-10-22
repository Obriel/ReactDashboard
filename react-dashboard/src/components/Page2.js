import React, {  Component, useState} from 'react'
import "./Page2.css";
import List from './List';

export default function Page2() {

    const [users, setUsers] = useState(
        [{ id: 1, name: "Item1", status: "", toggled: false },
            { id: 2, name: "Item2", status: "", toggled: false }
        ]
    );
    
    
    
    function handlechange(index){
        let newUsers = [...users];

        newUsers[index].status == ""
          ? (newUsers[index].status = "Pinned")
          : (newUsers[index].status = "")

          setUsers({ users, newUsers })
        // newUsers[index].name = 'New Name';
        // newUsers[index].status = 'Pinned';
        // setUsers(newUsers);
      }; 

    //   const handlechange = (index) => {
    //     const newUsers = [...users];
    //     newUsers[index].name = 'New Name';
    //     newUsers[index].rollNo = 'New RollNo';
    //     setUsers(newUsers);
    //   };
    
    
    
   
        return(
            <div className="Page2">
             

                <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '40px',
      }}>
          
  
</div>


      {users.map((Users, index) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '200px',
              margin: '20px',
              height: '250px',
           margintop: '50px',
           marginleft: '150px',
              backgroundColor: 'lightblue',
              cursor: 'pointer',
              flexflow: 'row wrap',
            }}
            onClick={() => {
              handlechange(index);
            }}
            key={index}>
            <List key={index} name={Users.name} 
              status={Users.status} />
          </div>
        );
      })}
    {/* </div> */}

            </div>
        )
    
        
    }
