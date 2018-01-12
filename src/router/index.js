import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import LoginRoom from '@/components/LoginRoom'
import LobbyRoom from '@/components/LobbyRoom'
import GameRoom from '@/components/GameRoom'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginRoom
    },
    {
      path: '/',
      name: 'Home',
      component: LobbyRoom,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/room/:id',
      name: 'Room',
      component: GameRoom,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  console.log('currentUser --> ', currentUser)
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  console.log('requiresAuth --> ', requiresAuth)
  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (!requiresAuth && currentUser) {
    next('/')
  } else {
    next()
  }
})

export default router
