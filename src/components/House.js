import React from 'react';

const House = ({onClick, id, name, location, price}) => {
    return <div 
       onClick ={onClick}
    >
       <div>{id}</div>
       <div>{name}</div>
       <div>{location}</div>
       <div>{price}</div>
    </div>
}

export default House;