
import Vue from 'vue'
import Router from 'vue-router'

import Login from '../../views/Login'

import index from '../../views/index'
import notfound from '../../views/404'
import aa from '../../views/aa'
import UserSettings from '../../views/setting/UserSettings'
const profile = () => import('../components/UserProfile.vue')
const email = () => import('../components/UserEmailsSubscriptions.vue')
const helper = () => import('../components/UserProfilePreview.vue')
console.log(profile)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'settings',
      component: UserSettings,
      meta: {
        keepAlive: true
      },
      children: [
        {
          path: 'email',
          component: email,
        },
        {
          path: 'profile',
          components: {
            default: () => import('../components/UserProfile.vue'),
            helper: helper,
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        keepAlive: false
      }, props: true
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        keepAlive: true
      }, children: [
        {
          path: 'aa',
          component: aa
        }
      ]
    },

    {
      path: '*',
      name: '404',
      component: notfound,
      meta: {
        keepAlive: true
      }
    },
  ]
})