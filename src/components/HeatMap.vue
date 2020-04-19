<template>
  <gmaps-heatmap :items="items" :weightProp="type" :dissipating="false" :colors="colors" :maxIntensity="20000" />
</template>

<script>
import { gmapsHeatmap } from 'x5-gmaps'
import bus from '../bus.js'

export default {
  name: 'HeatMap',
  components: { gmapsHeatmap },
  data: () => ({ covidDataRaw: [], type: 'active' }),
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
  },
  methods: {
    getData() {
      fetch('https://covid19.mathdro.id/api/confirmed')
        .then(response => response.json())
        .then(data => (this.covidDataRaw = data))
        .catch(e => {
          console.error(e)
          alert('Error retreiving data :(')
          this.covidDataRaw = []
        })
    }
  },
  created() {
    this.getData()
    bus.$on('changeType', type => (this.type = type))
  }
}
</script>
