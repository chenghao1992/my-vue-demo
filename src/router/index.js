import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '../components/testPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/testPage',
      name:'testPage',
      component: Test
    }
  ]
})
