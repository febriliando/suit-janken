<template>
  <div class="ui container">
    <div class="ui middle aligned equal width stackable grid">
      <div class="column">
        <div class="ui center aligned grid">
          <button class="ui facebook button" @click="login">
            <i class="facebook icon"></i>
            Log in with Facebook
          </button>
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
  .ui.middle.aligned.equal.width.stackable.grid {
    height: 100vh;
  }

  .ui.facebook.button {
    background-color: #4060B8;
  }
</style>
