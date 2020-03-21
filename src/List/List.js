import React from 'react';
import list from '../List/list.css'
import Card from '../Card/Card'

/* class List extends React.Component  {
  static defaultProps = {
    store: {
      header,
      cards,
    }
  }

  render() {
  return (
    <section className="List">
      <header className="List-header">{props.header}</header>
      <div className="List-cards">{props.cards}</div>
    </section>
  )};
} */

function List(props){
  return (
  <section className="List"> 
    <header className="List-header">{props.header}</header>
    <div className="List-cards">{props.cards}</div>
    <Card />
  </section> 
  )
};

export default List;