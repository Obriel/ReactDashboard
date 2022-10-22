import React from 'react';
  
const List = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.status}</div>
    </div>
  );
};
  
export default List;