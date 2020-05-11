<template>
  <fieldset class="map-options">
    <legend>Data</legend>
    <label><input v-model="type" type="radio" id="active" name="type" value="active" /> Active</label><br />
    <label><input v-model="type" type="radio" id="confirmed" name="type" value="confirmed" /> Confirmed</label><br />
    <label><input v-model="type" type="radio" id="recovered" name="type" value="recovered" /> Recovered</label><br />
    <label><input v-model="type" type="radio" id="deaths" name="type" value="deaths" /> Deaths</label>
  </fieldset>
</template>

<script>
import { EventBus } from '../bus.js'

export default {
  name: 'MapOptions',
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
  font-size: large;
}
input {
  margin-bottom: 10px;
}
.map-options legend {
  background: white;
  font-weight: bold;
  padding: 5px 10px;
  border: 2px ridge silver;
  border-radius: 10px;
}
</style>
