import React from 'react';
import './App.sass';
import Input from './components/Input/Input'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Input
            className='app__button'
            value='Click me!'
          />
        </header>
      </div>
    );
  }
}

export default App;