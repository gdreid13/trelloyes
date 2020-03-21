import React from 'react';
import list from './list.css'
import Card from '../Card/Card'

function List(props){
  return (
  <section className="List">
    <header className="List-header">{props.header}</header>
    <div className="List-cards">{props.cards}</div>
    <Card 
    title="this is a title"
    content="this is content"/>
  </section>
  )}

export default List 