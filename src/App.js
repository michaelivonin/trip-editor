import React from 'react';
import './App.sass';
import Input from './components/Input/Input'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit() {
    alert(this.state.value);
  }

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
            className='app__input'
            placeholder='Add new point'
            onInputChange={this.handleChange}
            onInputSubmit={this.handleSubmit}
          />
        </header>
      </div>
    );
  }
}

export default App;