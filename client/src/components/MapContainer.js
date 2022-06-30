import React, { useEffect, useState } from 'react';
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
  });
  
  const [map, setMap] = React.useState()

  const [markedPlaceData, setMarkedPlaceData] = React.useState([])

  // const onLoad = marker => {
  //   console.log('marker: ', marker)
  // }
  useEffect(()=> {
    const data = props.markedPlaces.map((p) => {
      return {
                   lat: p.geometry.location.lat,
          lng: p.geometry.location.lng,
  
        name: p.name,
        images: p.photos,
        hours: p.opening_hours,
        rating: p.rating
      }
    })
    console.log(typeof data[0].lat, "data")
    console.log(typeof center.lat)
    setMarkedPlaceData(data)

  },[props])
console.log(markedPlaceData)
  const onLoad = React.useCallback(function callback(map) {
  

    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded && markedPlaceData && markedPlaceData.length > 0 ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      // onUnmount={onUnmount}
      
    >
       <Marker
              key={"marker-" + "index"}
              position={ {lat: props.markedPlaces[0].lat, lng: props.markedPlaces[0].lng}} 
              // position={{lat: markedPlaceData[0].lat, lng: markedPlaceData[0].lng}} 
              label= {markedPlaceData[0].name}
            />
      { /* Child components, such as markers, info windows, etc. */}
      {  
        // markedPlaceData.map((p, index) => {
        
          // return (
            // <Marker
            //   key={"marker-" + "index"}
            //   position={{lat: markedPlaceData[0].lat, lng: markedPlaceData[0].lng}} 
            //   label= {markedPlaceData[0].name}
            // />
          
        // })
      }
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)