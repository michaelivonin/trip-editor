import React from 'react';
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
    const className = this.props.className;
    const places = this.props.places;

    return (
      <ol className={className}>
        {places.map(place => (
          <li key={place.address}>
            {place.address}
            <button
              key={place.address}
              onClick={() => this.deletePlace(place.address)}
            >
              &#10006;
            </button>
          </li>
        ))}
      </ol>
    );
  }
}

export default Places;