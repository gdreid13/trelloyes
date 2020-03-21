import React from 'react';
import List from './List/List';
import STORE from './store';

class App extends React.Component {
  static defaultProps = {
    STORE: STORE
    }

   render() {
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-List">
          <List 
          header="headers"
          cardIds = {STORE.lists[0].cardIds}
          allCards = {STORE.allCards}/>
        </div>
      </main>
    );
  }
}

export default App;