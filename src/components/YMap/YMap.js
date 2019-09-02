import React from 'react';
import './YMap.sass';
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';

class YMap extends React.Component {
  constructor(props) {
    super(props);
    this.transfer = this.transfer.bind(this);
  }

  transfer(args) {
    this.props.handleTransfer(args);
  }

  render() {
    const places = this.props.places;

    return (
      <YMaps
        query={{apikey: '9fbf58eb-f5d4-47d2-9d6b-7507e2ecb7c9'}}
      >
        <div className={this.props.className}>
          <Map
            className="App__map"
            onLoad={(ymaps) => this.transfer(ymaps)}
            defaultState={{
              center: [55.75, 37.57],
              zoom: 3,
            }}
            modules={['geocode']}
          >
            {!places.length ||
              places.map((place, i) => (
                <Placemark
                  key={i}
                  geometry={place.coordinates}
                  modules={['geoObject.addon.balloon']}
                  properties={{
                    iconContent: ++i,
                    balloonContent: place.address,
                  }}
                  options={{
                    preset: 'islands#blackStretchyIcon',
                    draggable: true,
                  }}
                />
              ))
            }
            {places.length > 1 ?
              (
                <Polyline
                  geometry={places.map((place) => place.coordinates)}
                  options={{
                    balloonCloseButton: false,
                    strokeColor: '#000',
                    strokeWidth: 4,
                    strokeOpacity: 0.5,
                  }}
                />
              ) : null
            }
          </Map>
        </div>
      </YMaps>
    );
  }
}

export default YMap;