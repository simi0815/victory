import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MobHome from '../views/MobHome'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index'
  },
     {
    path: '/index',
    name: 'Home',
    component: Home
  },
  {
    path:'/mob/index',
    name:'MobHome',
    component:MobHome,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
    mode:'history',
  routes
})

export default router
