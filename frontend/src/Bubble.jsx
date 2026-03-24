import { useState } from 'react'

function Bubble({total, min, selections}){

    var custBalance = 0;

    for(const key in selections){
        console.log(selections[key]);
        custBalance += Number(selections[key]);
    }

    return(
        <div className="mt-6 bg-blue-100 border border-blue-500 rounded-xl p-5 w-fit self-center font-medium text-blue-900 shadow">
            <h3 className="text-lg">Total Balance: {total}</h3>
            <h3 className="text-lg">Minimum Balance: {min}</h3>
            <h3 className="text-lg">Custom Balance: {custBalance}</h3>
        </div>
    );
}

export default Bubble