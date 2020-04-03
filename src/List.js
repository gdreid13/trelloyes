import React from 'react';
import './list.css';
import Card from './Card'

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            onClickDelete={props.onClickDelete}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={() => props.onClickAdd(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>

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
}


List.defaultProps = {
  onClickAdd: () => {},
}
