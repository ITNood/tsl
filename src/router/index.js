import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/my/index',
      name: 'my',
      component: () => {
        return import('../views/my/index')
      }
    },
    {
      path: '/life/index',
      name: 'life',
      component: () => {
        return import('../views/life/index')
      }
    },
    {
      path: '/addressbook/index',
      name: 'addressbook',
      component: () => {
        return import('../views/addressbook/index')
      }
    },
    {
      path: '../supply/index',
      name: '/supply',
      component: () => {
        return import('../views/supply/index')
      }
    }
  ]
})
