import React from 'react';
import list from '../List/list.css'
import Card from '../Card/Card'

function List(props){
  <section className="List">
    <header className="List-header">{props.header}</header>
    <div className="List-cards">{props.cards}</div>
  </section>
}

export default List 