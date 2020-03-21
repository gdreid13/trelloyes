import React from 'react';
import Card from 'Card.css';

function Card(props) {
    <div className="card">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>
}

export default Card;