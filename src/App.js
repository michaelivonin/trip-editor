import React from 'react';
import './App.sass';
import Input from './components/Input/Input'
import Places from './components/Places/Places'
import { arrayMove, arrayRemove } from "react-movable";
import YMap from './components/YMap/YMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      places: [],
      point: '',
    };
  }

  handleChange(event) {
    this.setState({
      point: event.target.value,
    });
  }

  handleSubmit() {
    if (!this.state.point.length) return;
    const newPoint =  this.state.point;
    this.setState({
      places: this.state.places.concat(newPoint),
      point: '',
    });
  }

  handleMove({ oldIndex, newIndex }) {
    this.setState((prevState) => ({
      places: arrayMove(prevState.places, oldIndex, newIndex)
    }));
  }

  handleRemove(index) {
    this.setState((prevProps) => ({
      places:
        typeof index !== 'undefined'
          ? arrayRemove(prevProps.places, index)
          : prevProps.places
    }));
  }

  render() {
    return (
      <div className="App">
        <Input
          className='App__input'
          placeholder='Add new point'
          value={this.state.point}
          onInputChange={this.handleChange}
          onInputSubmit={this.handleSubmit}
        />
        {!this.state.places.length ||
          <Places
            className='App__places'
            places={this.state.places}
            onPointMove={this.handleMove}
            onButtonDelete={this.handleRemove}
          />
        }
        <YMap
          className="App__map-wrapper"
          places={this.state.places}
        />
      </div>
    );
  }
}

export default App;