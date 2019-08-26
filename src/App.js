import React from 'react';
import './App.sass';
import Input from './components/Input/Input'
import Places from './components/Places/Places'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deletePlace = this.deletePlace.bind(this);
    this.state = {
      places: [],
      pointCount: 1,
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
    let count = this.state.pointCount;
    const newPoint = {
      address: this.state.point,
      count: count,
    };
    this.setState({
      places: this.state.places.concat(newPoint),
      pointCount: ++count,
      point: '',
    });
  }

  deletePlace(index) {
    const places = this.state.places.filter(place => place.address !== index);
    let count = this.state.pointCount;
    this.setState({
      places: places,
      pointCount: --count,
    });
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
       <Places
         className='App__places'
         places={this.state.places}
         onButtonClick={this.deletePlace}
       />
      </div>
    );
  }
}

export default App;