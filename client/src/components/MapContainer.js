import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: 41.745,
  lng: -72.523
};


function MyComponent(props) {
  console.log(props.markedPlaces)
  let latLng =  {lat: props.markedPlaces[0].geometry.location.lat, lng: props.markedPlaces[0].geometry.location.lng}
const [mapLoaded, setMapLoaded] = React.useState(false);


  
  const [map, setMap] = React.useState()

  const [markedPlaceData, setMarkedPlaceData] = React.useState([])

  // const onLoad = marker => {
  //   console.log('marker: ', marker)
  // }
  console.log('loader')
  const { isLoaded } = useJsApiLoader({

    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB-O3fHzc3MbMi-GSsdCFCZ0UhxYaTI10A"
  });

  useEffect(()=> {
    const data = props.markedPlaces.map((p) => {
      return {
                   lat: p.geometry.location.lat,
          lng: p.geometry.location.lng,
  
        name: p.name,
        images: p.photos,
        hours: p.opening_hours,
        address: p.formatted_address,
        rating: p.rating
      }
    })
    console.log(typeof data[0].lat, "data")
    console.log(typeof center.lat)
    setMarkedPlaceData(data)
if (markedPlaceData.length > 0) {


 setMapLoaded(true)

}
  },[props])

  // const Marker = (options) => {
  //   const [marker, setMarker] = React.useState();
  
  //   React.useEffect(() => {
  //     if (!marker) {
  //       setMarker(new google.maps.Marker());
  //     }
  
  //     // remove marker from map on unmount
  //     return () => {
  //       if (marker) {
  //         marker.setMap(null);
  //       }
  //     };
  //   }, [marker]);
  //   React.useEffect(() => {
  //     if (marker) {
  //       marker.setOptions(options);
  //     }
  //   }, [marker, options]);
  //   return null;
  //   console.log(marker, options)
  // };
console.log(markedPlaceData)
  const onLoad = React.useCallback(function callback(map) {
  

    const bounds = new window.google.maps.LatLngBounds(latLng);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(markedPlaceData) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={latLng}
      zoom={15}
      onLoad={onLoad}
      // onUnmount={onUnmount}
      
    >
       <Marker
              key={"marker-" + "index"}
              // position={ {lat: props.markedPlaces[0].geometry.lat, lng: props.markedPlaces[0].lng}} 
              position ={latLng}
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