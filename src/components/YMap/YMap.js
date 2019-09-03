import React from 'react';
import './YMap.sass';
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';

class YMap extends React.Component {
  constructor(props) {
    super(props);
    this.transfer = this.transfer.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  transfer(args) {
    this.props.handleTransfer(args);
  }

  handleDrag(event, index) {
    this.props.onDragEnd(event, index);
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
            instanceRef={this.setMapControlInstanceRef}
          >
            {this.map.setBounds(
              places.map((place) => place.coordinates),
              {checkZoomRange: true}
            )
            }
            {!places.length ||
              places.map((place, i) => (
                <Placemark
                  key={i}
                  geometry={place.coordinates}
                  modules={['geoObject.addon.balloon']}
                  properties={{
                    iconContent: i + 1,
                    balloonContent: place.address,
                  }}
                  options={{
                    preset: 'islands#blackStretchyIcon',
                    draggable: true,
                  }}
                  onDragEnd={(event) => this.handleDrag(event, i)}
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
  setMapControlInstanceRef = (ref) => {
    this.map = ref;
  }
}

export default YMap;