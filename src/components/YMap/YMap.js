import React from 'react';
import './YMap.sass';
import { YMaps, Map } from 'react-yandex-maps';

class YMap extends React.Component {
  /*constructor(props) {
    super(props);
    this.handleApiAvaliable = this.handleApiAvaliable.bind(this);
  }*/

  /*handleApiAvaliable(ymaps) {
    this.getGeoLocation(ymaps);
  };

  getGeoLocation(ymaps) {
    return ymaps.geolocation.get({
      provider: 'yandex',
      mapStateAutoApply: true
    }).then( result =>
      ymaps.geocode(result.geoObjects.position).then( res => {
        let firstGeoObject = res.geoObjects.get(0);
        console.log(firstGeoObject.getLocalities().length
          ? firstGeoObject.getLocalities()
          : firstGeoObject.getAdministrativeAreas())
      })
    );
  }*/

  render() {
    return (
      <YMaps>
        <div className={this.props.className}>
          <Map onLoad={ymaps => console.log(ymaps)}
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          />
        </div>
      </YMaps>
    );
  }
}

export default YMap;