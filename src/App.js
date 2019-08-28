import React from 'react';
import './App.sass';
import Input from './components/Input/Input'
import { List, arrayMove } from 'react-movable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deletePlace = this.deletePlace.bind(this);
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

  deletePlace(index) {
    const places = this.state.places.filter(place => {
      return place.address !== index
    });
    this.setState({
      places: places,
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
        <List className="App__places"
          values={this.state.places}
          onChange={({ oldIndex, newIndex }) =>
            this.setState(prevState => ({
              places: arrayMove(prevState.places, oldIndex, newIndex)
            }))
          }
          renderList={({ children, props }) => <ol {...props}>{children}</ol>}
          renderItem={({ value, props }) => <li {...props}>{value}</li>}
        />
        {/*<Places
         className='App__places'
         places={this.state.places}
         onButtonClick={this.deletePlace}
       />*/}
      </div>
    );
  }
}

export default App;