import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginRoom from '@/components/LoginRoom'
import LobbyRoom from '@/components/LobbyRoom'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: LobbyRoom
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginRoom
    }
  ]
})
