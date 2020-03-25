import React from 'react';
import './list.css';
import Card from './Card'
import STORE from './store';

function List(props){
  const cards = props.cardIds.map(cardId =>
    <Card 
        title = {props.allCards[cardId].title}
        content = {props.allCards[cardId].content}
        key = {cardId}
    />
  );
  return (
  <section className="List">
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