import React from 'react';
import List from './List';
import STORE from './store';
import './App.css';


const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lists: STORE.lists,
      allCards: STORE.allCards
    }
  }

  handleDeleteButton = (id) => {
    this.setState ({
      lists: this.state.lists.map(list => {
        list.cardIds = list.cardIds.filter(cardId => cardId !== id)
        return list
      })
    })
  }

  handleAddRandomButton = (listId) => {
    const randomCard = newRandomCard()
    this.setState({
      lists: this.state.lists.map(list => {
        if (list.id == listId){
          list.cardIds = list.cardIds.concat(randomCard.id)
        }
        return list
      }),
      allCards: {
        ...this.state.allCards,
        [randomCard.id]: randomCard
      }
    })
  }
  
   render() {
    const lists = this.state.lists.map(listObject =>
      <List
        header = {listObject.header}
        cardIds = {listObject.cardIds}
        allCards = {this.state.allCards}
        key = {listObject.id}
        listId = {listObject.id}
        handleDeleteButton = {this.handleDeleteButton}
        handleAddRandomButton = {this.handleAddRandomButton}
      />
      ); 
    console.log(this.state.store);
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {lists}
          
        </div>
      </main>
    );
  }
}

export default App;