import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Prices from '@/components/Prices'
import Customers from '@/components/Customers'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
        path: '/:lang/about',
        component: About
    },
    {
        path: '/:lang/prices',
        component: Prices
    },
    {
        path: '/:lang/customers',
        component: Customers
    },
    {
        path: '/:lang/contact',
        component: Contact
    }
  ]
})
