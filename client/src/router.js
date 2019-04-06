import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "admin" */ './views/Login.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import(/* webpackChunkName: "admin" */ './views/Create.vue')
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import(/* webpackChunkName: "admin" */ './views/Reset.vue')
    },
  ]
})
