import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from './Markers'

const MapView = () => {
  return (
    <MapContainer center={{lat: '10.42290454582473', lng: '-75.53921549780577'}} zoom={13}>, 
        <TileLayer 
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers/>
    </MapContainer>
  )
}

export default MapView