import React from 'react';
import './list.css';
import Card from './Card'
import STORE from './store';

function List(props) {
  console.log(props.store.lists.map);
  const cards = props.store.lists.map(cardId =>
    <Card 
        title = {cardId.title}
        content = {cardId.content}
        key = {cardId.id}
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