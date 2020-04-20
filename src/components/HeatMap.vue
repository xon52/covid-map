<template>
  <gmaps-heatmap :items="items" :weightProp="type" :dissipating="false" :colors="colors" :maxIntensity="20000" />
</template>

<script>
import { gmapsHeatmap } from 'x5-gmaps'
import { EventBus } from '../bus.js'

const getBackup = () =>
  fetch('https://xon52.github.io/covid-map/backup.json')
    .then(response => response.json())
    .then(data => data)
    .catch(e => {
      console.error(e)
      return []
    })

export default {
  name: 'HeatMap',
  components: { gmapsHeatmap },
  data: () => ({ covidDataRaw: [], type: 'active' }),
  created() {
    // Get data
    fetch('https://covid19.mathdro.id/api/confirmed')
      .then(response => response.json())
      .then(data => (this.covidDataRaw = data))
      .catch(e => {
        console.error(e)
        // Backup data for example
        getBackup()
          .then(data => (this.covidDataRaw = data))
          .catch(e => console.error(e))
      })
    // Listen for type change
    EventBus.$on('changeType', type => (this.type = type))
  },
  computed: {
    items() {
      return this.covidDataRaw.map(e => ({
        lat: e.lat,
        lng: e.long,
        active: e.active,
        confirmed: e.confirmed,
        deaths: e.deaths,
        recovered: e.recovered
      }))
    },
    colors() {
      if (this.type === 'recovered') return ['white', 'blue']
      if (this.type === 'deaths') return ['red', 'black']
      return ['green', 'yellow', 'red']
    }
  }
}
</script>
