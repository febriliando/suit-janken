<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <label>Name:</label>
    <input type="text" v-model="name">
    <button type="button" name="button" @click="submitName()">Add</button>
    <GameRoom></GameRoom>
    <router-view/>
  </div>
</template>

<script>
import { userRef } from './firebase'
import GameRoom from './components/GameRoom'
export default {
  name: 'app',
  data() {
    return {
      name: ''
    }
  },
  components: {
    GameRoom:GameRoom
  },
  methods: {
    submitName() {
      namesRef.push({ name: this.name, edit: false })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
