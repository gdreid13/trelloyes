import React from 'react';
import card from '../Card/card.css';

function Card(props) {
    <div className="Card">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>
}

export default Card;