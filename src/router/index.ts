import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "page-home" */ '../views/Home.vue'),
  },
  {
    path: '/create-order',
    name: 'CreateOrder',
    component: () => import(/* webpackChunkName: "page-create-order" */ '../views/CreateOrder.vue'),
  },
  {
    path: '/pay-order',
    name: 'PayOrder',
    component: () => import(/* webpackChunkName: "page-pay-order" */ '../views/PayOrder.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
