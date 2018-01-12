
<template lang="html">
<div class="row">
  <div v-for="(player, idx) in players" class="card col-md-4">
    <div>
      <div class="card-body">
        <h5 class="card-title"> {{player['.key']}} </h5>
        <h6 class="card-subtitle mb-2 text-muted">{{player.choice}}</h6>
        <p class="card-text">{{player.username}}</p>
        <button @click="subGunting(player['.key'], 1, idx)">Gunting</button>
        <button @click="subGunting(player['.key'], 2, idx)">Batu</button>
        <button @click="subGunting(player['.key'], 3, idx)">Kertas</button>
        

      </div>
    </div>
  </div>

</div>
</template>

<script>
import { userRef,db } from '../firebase'
export default {
  name: 'PlayerOne',
  data() {
    return {
      players: []
    }
  },
  firebase: function () {
    return {
      players: userRef
    }
  },
  mounted() {
    // this.showFinger()
  },
  methods: {
    // showFinger() {
    //   db.ref('User/' + key).on('value', function(snapshot){
    //
    //     var player = (snapshot.val() && snapshot.val().username)
    //     console.log(snapshot.val());
    //     // console.log(player);
    //   })
    // },
    subGunting(key, suit, idx) {
      db.ref('User/' + key).update({choice:suit})
      console.log(this.players[idx]);
      setTimeout(function () {
        v.message = "Hi Vue!";
    }, 3000);
      // console.log(temp);
      // var postData = {
      //   choice: 1
      // }
      // var newPostKey = db.ref('User').child('choice').push().key;
      // var updates = {};
      // updates['/choice/'] = 1;
      // return db.ref('User').child('User1').update(updates)
      // let tampung = db.ref('User').child('User1')
      // console.log(this.players[0]);
      // db.on('User', snap => console.log(snap.val()))
      // userRef.set()
    },
    subBatu() {
      userRef.User1.choice.push({choice: 'batu'})
    },
    subKertas() {
      userRef.User1.choice.push({choice: 'kertas'})
    }
  }
}
</script>

<style lang="css">
.col-md-6 {
  border-style: solid;
  border-width: 5px;
  height: 200px;
}
</style>
