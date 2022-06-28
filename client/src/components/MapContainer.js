import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: 41.745,
  lng: -72.523
};


function MyComponent(props) {


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB-O3fHzc3MbMi-GSsdCFCZ0UhxYaTI10A"
  })

  const [map, setMap] = React.useState(null)

  const [markedPlaceData, setMarkedPlaceData] = React.useState([])

  // const onLoad = marker => {
  //   console.log('marker: ', marker)
  // }

  const onLoad = React.useCallback(function callback(map) {
    const data = (props.markedPlaces.map((p) => {
      return {
        lat: p.geometry.location.lat,
        lng: p.geometry.location.lng,
        name: p.name
      }
    }))
    setMarkedPlaceData(data)
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      {
        markedPlaceData.map((p, index) => {
          console.log(p)
          return (
            <Marker
              key={"marker-" + index}
              position={{ lat: p.lat, lng: p.lng }}
              label={p.name}
            />
          )
        })
      }
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)