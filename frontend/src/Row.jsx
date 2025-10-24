import { useState } from 'react'
import './row.css'

function Row({balance, index, changeSelection}){

    const [custAmount, setCustAmount] = useState({});

    const onSelect = (amount) => {
        console.log("Row: ",index, amount);
        changeSelection(index, amount);
    };

    return(
        <tr id={index}>
            <td>{balance.filename}</td>
            <td>{balance.balance}<button type="radio" onClick={() => onSelect(balance.balance)}/></td>
            <td>{balance.minimum}<button type="radio" onClick={() => onSelect(balance.minimum)}/></td>
            <td>
                <input type="number" step="0.01" min="0" placeholder="Custom amount" onChange={(e) => setCustAmount(e.target.value)}/>
                <button type="radio" onClick={() => onSelect(custAmount)}/>
            </td>
            <td><button>Remove</button></td>
        </tr>
    );
}

export default Row