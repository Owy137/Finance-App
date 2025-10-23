import { useState } from 'react'
import './Table.css'

function FileTable() {
    return(
        <table className="uploadTable">
            <thead>
                <tr>
                    <th>Include</th>
                    <th>Filename</th>
                    <th>Balance</th>
                    <th>Minimum Payment</th>
                    <th>Custom Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><button type="checkbox" id="includeBox"></button></td>
                    <td>Test File 1</td>
                    <td>1234</td>
                    <td>34</td>
                    <td><input type="number" placeholder="Enter amount"/></td>
                </tr>
                <tr>
                    <td><button type="checkbox" id="includeBox"></button></td>
                    <td>Test File 2</td>
                    <td>2345</td>
                    <td>45</td>
                    <td><input type="number" placeholder="Enter amount"/></td>
                </tr>
            </tbody>
        </table>
    );
}

export default FileTable