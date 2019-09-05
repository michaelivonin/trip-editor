import React from 'react';
import './YMap.sass';
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';

class YMap extends React.Component {
  constructor(props) {
    super(props);
    this.transfer = this.transfer.bind(this);
    this.setNewBounds = this.setNewBounds.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  transfer(ymaps) {
    this.props.handleTransfer(ymaps);
  }

  setNewBounds(map) {
    const objects = map.geoObjects;
    if (objects.getLength() === 1) {
      map.setCenter(
        objects.get(0).geometry.getCoordinates(), 9, {duration: 350}
      );
      console.log('1');
    }
    if (objects.getLength() > 1) {
      map.setBounds(
        objects.getBounds(), {checkZoomRange: true, duration: 350,}
      );
      console.log('2');
    }
  }

  handleDrag(event, index) {
    this.props.onDragEnd(event, index);
  }

  render() {
    const places = this.props.places;

    return (
      <YMaps query={{apikey: '9fbf58eb-f5d4-47d2-9d6b-7507e2ecb7c9'}}>
        <div className={this.props.className}>
          <Map
            className="App__map"
            instanceRef={(ref) => this.map = ref}
            onLoad={(ymaps) => {
              this.transfer(ymaps);
              this.map.geoObjects.events.add(
                ['add', 'dragend', 'remove'], () => this.setNewBounds(this.map)
              );
            }}
            defaultState={{
              center: [55.75, 37.57],
              zoom: 9,
            }}
            modules={['geocode']}
          >
            {!places.length || places.map((place, i) => (
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
            ))}
            {places.length > 1 ?
              (<Polyline
                geometry={places.map((place) => place.coordinates)}
                options={{
                  balloonCloseButton: false,
                  strokeColor: '#000',
                  strokeWidth: 4,
                  strokeOpacity: 0.5,
                }}
              />) :
              null
            }
          </Map>
        </div>
      </YMaps>
    );
  }
}

export default YMap;