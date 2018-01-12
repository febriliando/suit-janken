<template>
  <div id="app">
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
#app {}
</style>
