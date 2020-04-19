<template>
  <fieldset class="map-options">
    <legend>Data</legend>
    <input v-model="type" type="radio" id="active" name="type" value="active" />
    <label for="active">Active</label><br />
    <input v-model="type" type="radio" id="confirmed" name="type" value="confirmed" />
    <label for="female">Confirmed</label><br />
    <input v-model="type" type="radio" id="recovered" name="type" value="recovered" />
    <label for="female">Recovered</label><br />
    <input v-model="type" type="radio" id="deaths" name="type" value="deaths" />
    <label for="deaths">Deaths</label>
  </fieldset>
</template>

<script>
import { EventBus } from '../bus.js'

export default {
  name: 'MapOPtions',
  data: () => ({
    type: 'active'
  }),
  watch: {
    type(newVal) {
      EventBus.$emit('changeType', newVal)
    }
  }
}
</script>

<style scoped>
.map-options {
  position: fixed;
  top: 10px;
  left: 10px;
  padding: 10px;
  background: white;
  border-radius: 10px;
  border: 2px ridge silver;
}
.map-options legend {
  background: white;
  font-weight: bold;
  padding: 5px 10px;
  border: 2px ridge silver;
  border-radius: 10px;
}
</style>
