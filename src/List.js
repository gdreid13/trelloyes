import React from 'react';
import './list.css';
import Card from './Card'
import STORE from './store';

function List(props) {
  const cards = props.cardIds.map(cardId =>
    <Card 
        cardId = {cardId}
        card ={props.allCards[cardId]}
        key = {cardId.id}
        handleDeleteButton = {props.handleDeleteButton}
    />
  );
  return (
  <section className="List">
    <button onClick={e => props.handleAddRandomButton(props.listId)}>Random Card</button>
    <header className="List-header">{props.header}</header>
    <div className="List-cards">{cards}</div>
  </section>
  )
};

List.defaultProps = {
  header : "header",
  cardIds : ['a', 'b', 'c'],
  allCards : STORE.allCards,
}

export default List;