<template lang="html">
  <div class="container">
    <div class="row">
      <PlayerOne></PlayerOne>
      <!-- <PlayerTwo></PlayerTwo> -->
    </div>
  </div>
</template>

<script>
import PlayerOne from '@/components/PlayerOne'
import PlayerTwo from '@/components/PlayerTwo'
export default {
  data() {
  },
  components: {
    PlayerOne:PlayerOne,
    PlayerTwo:PlayerTwo
  }
}
</script>

<style lang="css">
</style>
