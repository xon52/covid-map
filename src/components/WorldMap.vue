<template>
  <gmaps-map :options="mapOptions">
    <heat-map />
  </gmaps-map>
</template>

<script>
import { gmapsMap } from 'x5-gmaps'
import HeatMap from './HeatMap'

export default {
  name: 'WorldMap',
  components: { gmapsMap, HeatMap },
  data: () => ({
    mapOptions: {
      center: { lat: 20, lng: 0 },
      zoom: 3,
      fullscreenControl: false,
      mapTypeControl: false,
      rotateControl: false,
      scaleControl: false,
      streetViewControl: false,
      zoomControl: false
    }
  })
}
</script>
