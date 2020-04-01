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
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}


export default Card;