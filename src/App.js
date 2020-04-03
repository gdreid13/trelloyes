import React, {Component} from 'react';
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
}


function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component {

  state = {
    store: STORE,
  };

  handleDeleteCard = (cardId) => {
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };
  
  handleAddCard = (listId) => {
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
                ...list,
                cardIds: [...list.cardIds, newCard.id]
              };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };
  
   render () {
    const { store } = this.state;
     
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

    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;