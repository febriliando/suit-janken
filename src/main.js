// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyCoNFpKJ528e-SnDEB-2xazXym3TCW7tIQ',
  authDomain: 'house-selling-af09d.firebaseapp.com',
  databaseURL: 'https://house-selling-af09d.firebaseio.com',
  projectId: 'house-selling-af09d',
  storageBucket: 'house-selling-af09d.appspot.com',
  messagingSenderId: '435080367530'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
