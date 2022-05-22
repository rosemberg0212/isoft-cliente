import React from 'react'
import {Marker} from 'react-leaflet'
import {iconLocation} from './iconLocation'


const Markers = () => {
  return (
    <Marker position={{lat: '10.421209833559793', lng: '-75.5469451015671'}} icon={iconLocation} >
        
    </Marker>
  )
}

export default Markers