import { useState } from 'react'
import UploadButton from './Button.jsx'
import './Table.css'

function FileTable() {
    return(
        <>
            <UploadButton />
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
                    <tr>
                        <td>Test File 1</td>
                        <td>1234</td>
                        <td>34</td>
                        <td><input type="number" placeholder="Enter amount"/></td>
                        <td><button>Remove</button></td>
                    </tr>
                    <tr>
                        <td>Test File 2</td>
                        <td>2345</td>
                        <td>45</td>
                        <td><input type="number" placeholder="Enter amount"/></td>
                        <td><button>Remove</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default FileTable