import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from "../views/Article";
import NotFound from '../views/404NotFound'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'Home',
        component: Home
    },
    {
        path:'/article/:id',
        name:'Article',
        component:Article
    },
    {
        path:'*',
        name:'NotFound',
        component:NotFound,
    }


]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
