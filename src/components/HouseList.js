import React from 'react';
import House from './House';

const HouseList = ({houses, deleteHouse}) => {
    return (<div>
        {houses.map(house => {
            return (
            <House
                key={house.id}
                {...house}
                onClick={()=> deleteHouse(house.id)}></House>)
        }) }
    </div>)
}

export default HouseList;