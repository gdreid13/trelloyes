import React from 'react';
import './list.css';
import Card from './Card'
import STORE from './store';

function List(props) {
  const cards = props.cardIds.map(cardId =>
    <Card 
        cardId = {cardId}
        key = {cardId.id}
        title = {props.allCards[cardId].title}
        content = {props.allCards[cardId].content}
        onClickDelete = {props.onClickDelete}
    />
  );
  return (
  <section className="List">
    <header className="List-header">{props.header}</header>
    <div className="List-cards">{cards}</div>
    <button
          type='button'
          className='List-add-button'
          onClick={() => props.onClickAdd(props.id)}
        >
          + Add Random Card
        </button>
  </section>
  )
};

List.defaultProps = {
  header : "header",
  cardIds : ['a', 'b', 'c'],
  allCards : STORE.allCards,
  onClickAdd: () => {},
}

export default List;