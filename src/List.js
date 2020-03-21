import React from 'react';
import './list.css';
import Card from './Card'

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

export default List;