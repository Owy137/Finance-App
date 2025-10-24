import { useState } from 'react'
import './styling/Bubble.css'

function Bubble({total, min, selections}){

    var custBalance = 0;

    for(const key in selections){
        console.log(selections[key]);
        custBalance += Number(selections[key]);
    }

    return(
        <div className="ResultBubble">
            <h3>Total Balance: {total}</h3>
            <h3>Minimum Balance: {min}</h3>
            <h3>Custom Balance: {custBalance}</h3>
        </div>
    );
}

export default Bubble