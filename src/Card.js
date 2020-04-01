import React from 'react';
import './card.css';

/* class CardClass extends React.Component  {
    static defaultProps = {
        store: {
          title,
          content,
        }
      }
    render() {
        return (
            <div className="card">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        );
} */

function Card(props) {
    return (
        <div className="Card">
            <h3>{props.card.title}</h3>
            <p>{props.card.content}</p>
            <button onClick={e => props.handleDeleteButton(props.card.id)}>Delete</button>
        </div>
    );
}


export default Card;