import React from 'react'
import {Marker} from 'react-leaflet'
import {iconLocation} from './iconLocation'


const Markers = () => {
  return (
    <Marker position={{lat: '10.42290454582473', lng: '-75.53921549780577'}} icon={iconLocation} >
        
    </Marker>
  )
}

export default Markers