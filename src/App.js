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
    this.transfer = this.transfer.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.state = {
      places: [],
      point: '',
      ymaps: null,
    };
  }

  handleChange(event) {
    this.setState({
      point: event.target.value,
    });
  }

  handleSubmit() {
    if (!this.state.point.length) {
      alert('Enter address, please.');
      return;
    }
    const newPoint =  this.state.point;
    const askGeocode = this.state.ymaps.geocode(newPoint);
    askGeocode
      .then(
        (result) => {
          if (!result.metaData.geocoder.found) {
            alert('Incorrect input! Repeat, please.');
            this.setState({
              point: '',
            });
            return;
          }
          const newPoint = {
            address: this.state.point,
            coordinates: result.geoObjects.get(0).geometry.getCoordinates(),
          };
          this.setState({
            places: this.state.places.concat(newPoint),
            point: '',
          });
        },
        (err) => console.log(err.message)
      );
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

  transfer(ymaps) {
    this.setState({
      ymaps: ymaps,
    });
  }

  handleDrag(event, index) {
    const places = this.state.places;
    const newCoordinates = event.get('target').geometry.getCoordinates()
      .map((coord) => +coord.toPrecision(8));
    const newAddress = this.state.ymaps.geocode(newCoordinates);
    newAddress
      .then(
        (result) => {
          const newPoint = {
            address: result.geoObjects.get(0).properties.getAll().text,
            coordinates: newCoordinates,
          };
          Object.assign(places[index], newPoint);
          this.setState({
            places: places,
          });
        },
        (err) => console.log(err.message)
      );
  }

  render() {
    return (
      <div className="App">
        <div
          className="App__column1"
        >
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
        </div>
        <div
          className="App__column2"
        >
          <YMap
            className="App__map-wrapper"
            places={this.state.places}
            handleTransfer={this.transfer}
            onDragEnd={this.handleDrag}
          />
        </div>
      </div>
    );
  }
}

export default App;