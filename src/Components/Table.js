import React from 'react';
import '../App.css';

function Table({ trans }) {
    const tableList = trans ? trans.map((t) => {
        return (
            <tr>
                <td>{t.name}</td>
                <td className="Green">{t.spent}</td>
                <td className="Red">{t.owe}</td>
            </tr>
        )
    }) : null

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Spent</th>
                <th>Owe</th>
            </tr>
            {tableList}
        </table>
    )
}

export default Table;