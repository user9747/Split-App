import React from 'react'
import '../App.css';
function Card({ name, amount,color }) {
    return (
        <div className="Card">
            <div>
                {name}
            </div>
            <div className={color}>
                ${amount}
            </div>
        </div>
    )
}

export default Card;
