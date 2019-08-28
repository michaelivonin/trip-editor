/*import React from 'react';
import './Places.sass';

class Places extends React.Component {
  constructor(props) {
    super(props);
    this.deletePlace = this.deletePlace.bind(this);
  }

  deletePlace(index) {
    this.props.onButtonClick(index);
  }

  render() {
    const places = this.props.places;

    return (
      /{places.map(place => (
        <li
          className="App__places-item"
          key={place.address}
        >
          {place.address}
          <button
            className="App__places-button"
            key={place.address}
            onClick={() => this.deletePlace(place.address)}
          >
            &#10006;
          </button>
        </li>
      ))}
    );
  }
}*/

//export default Places;