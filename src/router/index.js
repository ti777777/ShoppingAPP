import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../views/Home.vue'
import Product from '../views/Product'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: ()=>import('../views/Index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/test',
    name:'test',
    component:Test
  },
  {
    path:'/product',
    name:'product',
    component:Product
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
