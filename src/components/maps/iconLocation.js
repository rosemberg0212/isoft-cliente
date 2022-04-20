import l from 'leaflet'

export const iconLocation = l.icon({
    iconUrl: require('../../img/map-marker-icon.png'),
    iconRetinaUrl: require('../../img/map-marker-icon.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: 'leaflet-venue-icon'
})

