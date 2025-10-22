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
        </table>
    );
}

export default FileTable