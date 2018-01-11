<template>
  <div class="ui fluid container">
    <div class="ui middle aligned equal width stackable grid">
      <div class="four wide column large screen only">
        <img class="leftAva" src="../assets/genji.png" alt="">
      </div>
      <div class="centered center aligned sixteen wide mobile sixteen wide tablet eight wide computer column">
        <h1 class="ui header">Select Room</h1>
        <button class="ui red button" @click="play">Room 1</button>
        <button class="ui orange button">Room 2</button>
        <button class="ui yellow button">Room 3</button>
        <button class="ui olive button">Room 4</button>
        <button class="ui green button">Room 5</button>
        <button class="ui teal button">Room 6</button>
        <button class="ui blue button">Room 7</button>
        <button class="ui violet button">Room 8</button>
        <button class="ui purple button">Room 9</button>
        <button class="ui pink button">Room 10</button>
        <button class="ui brown button">Room 11</button>
        <button class="ui grey button">Room 12</button>
      </div>
      <div class="four wide column large screen only">
        <img src="../assets/ikaruga.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LobbyRoom',
  methods: {
    play: function () {
      this.$router.push('/play')
    }
  }
}
</script>

<style scoped>
  .ui.middle.aligned.equal.width.stackable.grid {
    height: 100vh;
  }

  .ui.button {
    width: 160px;
    margin: .25rem;
  }

  .leftAva {
    max-height: 750px;
    position: absolute;
    z-index: -1;
    top: -345px;
    right: -204px;
  }
</style>
