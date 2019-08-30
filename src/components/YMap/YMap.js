import React from 'react';
import './YMap.sass';
import { YMaps, Map, /*Placemark*/ } from 'react-yandex-maps';

class YMap extends React.Component {
  constructor(props) {
    super(props);
    //this.handleApiAvaliable = this.handleApiAvaliable.bind(this);
    //this.geocode = this.geocode.bind(this);
    this.state = {
      ymaps: null,
      coords: null,
    };
  }

  /*handleApiAvaliable(ymaps) {
    this.getGeoLocation(ymaps);
  };*/

  geocode(data) {
    //let coords = null;
    let getCoords = this.state.ymaps.geocode(data);
    getCoords.then((result) => this.setState({
      coords: result.geoObjects.get(0).geometry.getCoordinates()
    }));
    console.log(this.state.coords);
  };

  render() {
    const places = this.props.places;

    return (
      <YMaps
        query={{apikey: '9fbf58eb-f5d4-47d2-9d6b-7507e2ecb7c9'}}
      >
        <div className={this.props.className}>
          <Map
            onLoad={(ymaps) => this.setState({
              ymaps: ymaps,
            })}
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            modules={['geocode']}
          >
            {!this.state.coords ||
              places.map((place, i) => (
                /*this.state.ymaps.geocode(place).then(result => console.log(result.geoObjects.get(0).geometry.getCoordinates()))*/
                this.geocode(place)
              ))
            }
          </Map>
        </div>
      </YMaps>
    );
  }
}

export default YMap;