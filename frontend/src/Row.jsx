import { useState } from 'react'
import './styling/row.css'

function Row({balance, index, changeSelection, setData ,data}){

    const [custAmount, setCustAmount] = useState({});

    const onSelect = (amount) => {
        console.log("Row: ",index, amount);
        changeSelection(index, amount);
    };

    const removeData = () => {
        console.log("Deleting index ", index);
        const newData = {...data.delete(index)};
        setData(newData);
    }

    return(
        <tr>
            <td>{balance.filename}</td>
            <td>{balance.balance}<button type="radio" onClick={() => onSelect(balance.balance)}/></td>
            <td>{balance.minimum}<button type="radio" onClick={() => onSelect(balance.minimum)}/></td>
            <td>
                <input type="number" step="0.01" min="0" placeholder="Custom amount" onChange={(e) => setCustAmount(e.target.value)}/>
                <button type="radio" onClick={() => onSelect(custAmount)}/>
            </td>
            <td><button onClick={() => removeData}>Delete based on index</button></td>
        </tr>
    );
}

export default Row