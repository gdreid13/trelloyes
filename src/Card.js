import React from 'react';
import './card.css';
export default function Card(props) {
    return (
      <div className='Card'>
        <button
          type='button'
          onClick={() => props.onClickDelete(props.id)}
        >
          delete
        </button>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    )
  }

        <div className="Card">
            <h3>{props.card.title}</h3>
            <p>{props.card.content}</p>
            <button onClick={e => props.handleDeleteButton(props.card.id)}>Delete</button>
        </div>
    );
}

Card.propTypes = {
    onClickDelete: () => {}
}
