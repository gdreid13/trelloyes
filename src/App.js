import React from 'react';
import List from './List';
import STORE from './store';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      store: STORE
    }
  }

  handleDeleteButton = () => {

  }

  handleAddRandomButton = () => {
    
  }
  
   render() {
    const lists = this.state.store.lists.map(listObject =>
      <List
        header = {listObject.header}
        cardIds = {listObject.cardIds}
        allCards = {STORE.allCards}
        key = {listObject.id}
      />
      ); 
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