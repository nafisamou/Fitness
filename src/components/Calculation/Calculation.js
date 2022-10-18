import React from 'react';
import './Calculation.css'

const Calculation = ({cart}) => {

let totalTime = 0;
for(const times of cart){
totalTime = totalTime + parseInt(times.time)
}


    return (
        <div>
          
        </div>
    );
};

export default Calculation;