import React from 'react';
import List from './List/List'


function App(props) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-List">
        {props.list}
        {props.allCards}
      </div>
    </main>
  );
}

export default App;