import { useState } from 'react'
import UploadButton from './UploadButton.jsx'
import './Table.css'

function FileTable({data, totalBalance, setTotalBalance}) {
    return(
        <table className="uploadTable">
            <thead>
                <tr>
                    <th>Filename</th>
                    <th>Balance</th>
                    <th>Min Payment</th>
                    <th>Custom Amount</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {data?.balances.map((balance, i) => {
                    return(
                        <tr key={i}>
                            <td>{balance.filename}</td>
                            <td>{balance.balance}</td>
                            <td>{balance.minimum}</td>
                            <td><input type="number" step="0.01" min="0" placeholder="Custom amount"/></td>
                            <td><button>Remove</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default FileTable