<template>
  <div class="ui fluid container">
    <div class="ui center aligned middle aligned equal width stackable grid">
      <div class="column">
        <div class="row btm">
          <div class="column">
            <span class="title">R</span>
            <img class="rock" src="../assets/rock-font.png" style="">
            <span class="title space">CK</span>
            <span class="title">P</span>
            <img class="paper" src="../assets/paper-font.png" style="">
            <span class="title space">PER</span>
            <span class="title">S</span>
            <img class="scissors" src="../assets/scissors-font.png" style="">
            <span class="title">ISSORS</span>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <button class="ui facebook button" @click="login">
              <i class="facebook icon"></i>
              Log in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'LoginRoom',
    methods: {
      login: function () {
        let provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then(result => {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          // let token = result.credential.accessToken
          // The signed-in user info.
          let userInfo = {
            name: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL
          }
          console.log(userInfo)
          this.$router.replace('/')
        })
        .catch(error => {
          alert('Oops!!! ' + error)
        })
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 50px;
    font-weight: 600;
  }

  .space {
    padding-right: 30px;
  }

  .rock {
    position: relative;
    top: 8px;
  }

  .paper {
    position: relative;
    top: 14px;
  }

  .scissors {
    position: relative;
    top: 5px;
  }

  .btm {
    padding-bottom: 50px !important;
  }

  .ui.middle.aligned.equal.width.stackable.grid {
    height: 100vh;
  }

  .ui.facebook.button {
    background-color: #4060B8;
  }
</style>
