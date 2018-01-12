<template lang="html">
  <div class="col-md-6">
    <h1>PlayerTwo</h1>
    <button>Gunting</button>
    <button>Batu</button>
    <button>Kertas</button>
    <br>
    <h2>Choose: </h2>
  </div>
</template>

<script>
import { userRef} from '../firebase'
export default {
  name: 'PlayerTwo'
}
</script>

<style lang="css">
  .col-md-6 {
    border-style: solid;
    border-width: 5px;
    height: 200px;
  }
</style>
