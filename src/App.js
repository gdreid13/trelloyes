import React from 'react';
import List from './List/List';
import STORE from './STORE';

class App extends React.Component {
  static defaultProps = {
    STORE: {
      lists: [],
      allCards: {},
    }
  }
   render() {
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-List">
          <List />
        </div>
      </main>
    );
  }
}

export default App;