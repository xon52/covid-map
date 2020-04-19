<template>
  <div id="app">
    <div class="map-wrapper">
      <world-map />
      <map-options />
    </div>
  </div>
</template>

<script>
import WorldMap from './components/WorldMap'
import MapOptions from './components/MapOptions'

export default {
  name: 'App',
  components: { WorldMap, MapOptions },
  data: () => ({})
}
</script>

<style>
.map-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
